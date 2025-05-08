'use client'

import Hero from '@/components/Hero'
import FeaturedServices from '@/components/FeaturedServices'
import HowItWorks from '@/components/HowItWorks'
import ServiceCategories from '@/components/ServiceCategories'
import ServiceTestimonials from '@/components/ServiceTestimonials'

// Datos de ejemplo para los servicios destacados
const featuredServices = [
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
]

// Datos de ejemplo para las categorías
const categories = [
  {
    id: 'web-development',
    name: 'Desarrollo Web',
    description: 'Sitios web y aplicaciones web personalizadas',
    imageUrl: '/images/categories/web-dev.jpg',
    serviceCount: 245,
  },
  {
    id: 'mobile-development',
    name: 'Desarrollo Móvil',
    description: 'Aplicaciones nativas y multiplataforma',
    imageUrl: '/images/categories/mobile-dev.jpg',
    serviceCount: 189,
  },
  {
    id: 'design',
    name: 'Diseño',
    description: 'Diseño gráfico, UI/UX y branding',
    imageUrl: '/images/categories/design.jpg',
    serviceCount: 312,
  },
  {
    id: 'marketing',
    name: 'Marketing Digital',
    description: 'SEO, redes sociales y publicidad online',
    imageUrl: '/images/categories/marketing.jpg',
    serviceCount: 278,
  },
]

// Datos de ejemplo para los testimonios
const testimonials = [
  {
    id: '1',
    content: 'Excelente servicio. El profesional fue muy atento y entregó el proyecto antes de lo esperado.',
    author: {
      name: 'Juan Pérez',
      role: 'CEO, TechStart',
      imageUrl: '/images/testimonials/juan.jpg',
    },
  },
  {
    id: '2',
    content: 'La mejor plataforma para encontrar profesionales calificados. Muy recomendada.',
    author: {
      name: 'Laura Sánchez',
      role: 'Directora de Marketing',
      imageUrl: '/images/testimonials/laura.jpg',
    },
  },
  {
    id: '3',
    content: 'Proceso simple y transparente. Encontré exactamente lo que necesitaba.',
    author: {
      name: 'Roberto Gómez',
      role: 'Emprendedor',
      imageUrl: '/images/testimonials/roberto.jpg',
    },
  },
]

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedServices services={featuredServices} />
      <ServiceCategories categories={categories} onCategorySelect={(id) => console.log(id)} />
      <HowItWorks />
      <ServiceTestimonials testimonials={testimonials} />
    </main>
  )
} 