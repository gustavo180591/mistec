'use client'

import { useState } from 'react'
import ServiceFilters from '@/components/ServiceFilters'
import SearchResults from '@/components/SearchResults'

// Datos de ejemplo para los servicios
const initialServices = [
  {
    id: '1',
    title: 'Diseño de Sitio Web Profesional',
    description: 'Creamos sitios web modernos y responsivos que destacan tu marca y atraen a tus clientes.',
    price: 999,
    imageUrl: '/images/services/web-design.jpg',
    provider: {
      id: '1',
      name: 'María García',
      avatarUrl: '/images/providers/maria.jpg',
    },
    rating: 4.9,
    reviewCount: 128,
    category: 'Diseño Web',
  },
  {
    id: '2',
    title: 'Marketing Digital Completo',
    description: 'Estrategias de marketing digital personalizadas para aumentar tu presencia online.',
    price: 799,
    imageUrl: '/images/services/digital-marketing.jpg',
    provider: {
      id: '2',
      name: 'Carlos Rodríguez',
      avatarUrl: '/images/providers/carlos.jpg',
    },
    rating: 4.8,
    reviewCount: 95,
    category: 'Marketing',
  },
  {
    id: '3',
    title: 'Desarrollo de Aplicación Móvil',
    description: 'Desarrollamos aplicaciones móviles nativas y multiplataforma para iOS y Android.',
    price: 1499,
    imageUrl: '/images/services/mobile-app.jpg',
    provider: {
      id: '3',
      name: 'Ana Martínez',
      avatarUrl: '/images/providers/ana.jpg',
    },
    rating: 4.9,
    reviewCount: 156,
    category: 'Desarrollo Móvil',
  },
  {
    id: '4',
    title: 'SEO y Optimización Web',
    description: 'Mejora tu posicionamiento en buscadores y aumenta tu visibilidad online.',
    price: 699,
    imageUrl: '/images/services/seo.jpg',
    provider: {
      id: '4',
      name: 'David López',
      avatarUrl: '/images/providers/david.jpg',
    },
    rating: 4.7,
    reviewCount: 82,
    category: 'Marketing',
  },
  {
    id: '5',
    title: 'Diseño de Logo y Branding',
    description: 'Creamos identidades visuales únicas que representan tu marca.',
    price: 499,
    imageUrl: '/images/services/branding.jpg',
    provider: {
      id: '5',
      name: 'Sofía Martínez',
      avatarUrl: '/images/providers/sofia.jpg',
    },
    rating: 4.9,
    reviewCount: 143,
    category: 'Diseño',
  },
  {
    id: '6',
    title: 'Desarrollo de E-commerce',
    description: 'Tiendas online personalizadas con todas las funcionalidades necesarias.',
    price: 1299,
    imageUrl: '/images/services/ecommerce.jpg',
    provider: {
      id: '6',
      name: 'Juan Pérez',
      avatarUrl: '/images/providers/juan.jpg',
    },
    rating: 4.8,
    reviewCount: 167,
    category: 'Desarrollo Web',
  },
]

export default function ServicesPage() {
  const [services, setServices] = useState(initialServices)
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    rating: '',
  })

  const handleFilterChange = (newFilters: { category?: string; priceRange?: string }) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
    
    // Filtrar servicios
    let filteredServices = initialServices

    if (newFilters.category) {
      filteredServices = filteredServices.filter(
        (service) => service.category.toLowerCase() === newFilters.category?.toLowerCase()
      )
    }

    if (newFilters.priceRange) {
      const [min, max] = newFilters.priceRange.split('-').map(Number)
      filteredServices = filteredServices.filter((service) => {
        if (max) {
          return service.price >= min && service.price <= max
        }
        return service.price >= min
      })
    }

    setServices(filteredServices)
  }

  const handleSortChange = (sortOption: string) => {
    const sortedServices = [...services]

    switch (sortOption) {
      case 'price-low-high':
        sortedServices.sort((a, b) => a.price - b.price)
        break
      case 'price-high-low':
        sortedServices.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        sortedServices.sort((a, b) => b.rating - a.rating)
        break
      case 'reviews':
        sortedServices.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      default:
        // Por defecto, ordenar por relevancia (podría ser por ID o cualquier otro criterio)
        sortedServices.sort((a, b) => a.id.localeCompare(b.id))
    }

    setServices(sortedServices)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Servicios</h1>
          <p className="mt-2 text-sm text-gray-600">
            Encuentra el servicio perfecto para tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* Filtros */}
          <div className="lg:col-span-1">
            <ServiceFilters
              selectedCategory={filters.category}
              selectedPriceRange={filters.priceRange}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Resultados */}
          <div className="lg:col-span-3">
            <SearchResults
              services={services}
              totalResults={services.length}
              onSortChange={handleSortChange}
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 