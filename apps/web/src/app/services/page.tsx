'use client'

import { useState } from 'react'
import ServiceCard from '@/components/ServiceCard'
import ServiceFilters from '@/components/ServiceFilters'
import ServiceCategories from '@/components/ServiceCategories'

// Mock data for services
const mockServices = [
  {
    id: '1',
    title: 'Professional Web Development',
    description: 'Custom website development using modern technologies',
    price: 1500,
    imageUrl: '/images/web-dev.jpg',
    provider: {
      name: 'Tech Solutions Inc.',
      avatar: '/images/provider1.jpg',
    },
    rating: 4.8,
    reviewCount: 124,
    category: 'web-development',
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'Native iOS and Android app development',
    price: 2500,
    imageUrl: '/images/mobile-dev.jpg',
    provider: {
      name: 'Mobile Masters',
      avatar: '/images/provider2.jpg',
    },
    rating: 4.9,
    reviewCount: 89,
    category: 'mobile-development',
  },
  // Add more mock services as needed
]

export default function ServicesPage() {
  const [filteredServices, setFilteredServices] = useState(mockServices)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleSortChange = (sortOption: string) => {
    let sorted = [...filteredServices]
    switch (sortOption) {
      case 'price-low-high':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-high-low':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating)
        break
      case 'reviews':
        sorted.sort((a, b) => b.reviewCount - a.reviewCount)
        break
    }
    setFilteredServices(sorted)
  }

  const handlePriceRangeChange = (range: string) => {
    const [min, max] = range.split('-').map(Number)
    const filtered = mockServices.filter(
      (service) => service.price >= min && (!max || service.price <= max)
    )
    setFilteredServices(filtered)
  }

  const handleSearchChange = (query: string) => {
    const filtered = mockServices.filter(
      (service) =>
        service.title.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredServices(filtered)
  }

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
    const filtered = mockServices.filter((service) => service.category === categoryId)
    setFilteredServices(filtered)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceCategories onCategorySelect={handleCategorySelect} />
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ServiceFilters
          onSortChange={handleSortChange}
          onPriceRangeChange={handlePriceRangeChange}
          onSearchChange={handleSearchChange}
        />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              imageUrl={service.imageUrl}
              provider={service.provider}
              rating={service.rating}
              reviewCount={service.reviewCount}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No services found</h3>
            <p className="mt-2 text-sm text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 