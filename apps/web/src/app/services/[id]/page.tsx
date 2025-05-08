'use client'

import { FC } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'
import ServiceFeatures from '@/components/ServiceFeatures'
import ServicePricing from '@/components/ServicePricing'
import ServiceReviews from '@/components/ServiceReviews'
import ServiceFAQ from '@/components/ServiceFAQ'
import BookingForm from '@/components/BookingForm'

// Datos de ejemplo para el servicio
const serviceData = {
  id: '1',
  title: 'Diseño de Sitio Web Profesional',
  description: 'Creamos sitios web modernos y responsivos que destacan tu marca y atraen a tus clientes. Nuestro equipo de diseñadores y desarrolladores trabaja en conjunto para crear una experiencia web única y efectiva.',
  price: 999,
  imageUrl: '/images/services/web-design.jpg',
  provider: {
    id: '1',
    name: 'María García',
    avatarUrl: '/images/providers/maria.jpg',
    description: 'Diseñadora web con más de 5 años de experiencia en la creación de sitios web modernos y funcionales.',
  },
  rating: 4.9,
  reviewCount: 128,
  category: 'Diseño Web',
  features: [
    {
      id: '1',
      name: 'Diseño responsivo',
      description: 'Tu sitio web se verá perfecto en cualquier dispositivo',
    },
    {
      id: '2',
      name: 'Optimización SEO',
      description: 'Mejora tu posicionamiento en buscadores',
    },
    {
      id: '3',
      name: 'Integración con redes sociales',
      description: 'Conecta tu sitio web con tus redes sociales',
    },
    {
      id: '4',
      name: 'Panel de administración',
      description: 'Gestiona tu contenido fácilmente',
    },
    {
      id: '5',
      name: 'Soporte técnico',
      description: 'Asistencia técnica cuando la necesites',
    },
    {
      id: '6',
      name: 'Dominio y hosting incluidos',
      description: 'Todo lo necesario para tu sitio web',
    },
  ],
  pricingPlans: [
    {
      id: '1',
      name: 'Básico',
      price: 499,
      description: 'Ideal para pequeñas empresas',
      features: [
        'Diseño responsivo',
        'Hasta 5 páginas',
        'Formulario de contacto',
        'Optimización básica SEO',
      ],
    },
    {
      id: '2',
      name: 'Profesional',
      price: 999,
      description: 'Perfecto para empresas en crecimiento',
      features: [
        'Todo lo del plan Básico',
        'Hasta 10 páginas',
        'Integración con redes sociales',
        'Panel de administración',
        'Optimización SEO avanzada',
      ],
      popular: true,
    },
    {
      id: '3',
      name: 'Premium',
      price: 1499,
      description: 'Solución completa para grandes empresas',
      features: [
        'Todo lo del plan Profesional',
        'Páginas ilimitadas',
        'E-commerce básico',
        'Blog integrado',
        'Soporte prioritario',
      ],
    },
  ],
  faqs: [
    {
      id: '1',
      question: '¿Cuánto tiempo toma desarrollar un sitio web?',
      answer: 'El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede tomar 2-3 semanas, mientras que proyectos más complejos pueden tomar 1-2 meses.',
    },
    {
      id: '2',
      question: '¿Ofrecen mantenimiento después del lanzamiento?',
      answer: 'Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, respaldos y soporte técnico.',
    },
    {
      id: '3',
      question: '¿Puedo hacer cambios en mi sitio web después del lanzamiento?',
      answer: 'Sí, todos nuestros planes incluyen un panel de administración que te permite hacer cambios básicos. Para cambios más complejos, ofrecemos servicios de soporte adicional.',
    },
  ],
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado del servicio */}
        <div className="py-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {/* Información principal */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src={serviceData.imageUrl}
                  alt={serviceData.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                {serviceData.title}
              </h1>
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="ml-1 text-sm text-gray-600">
                    {serviceData.rating} ({serviceData.reviewCount} reseñas)
                  </span>
                </div>
                <span className="text-sm text-gray-500">{serviceData.category}</span>
              </div>
              <p className="mt-4 text-lg text-gray-600">{serviceData.description}</p>
            </div>

            {/* Formulario de reserva */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <BookingForm
                  serviceId={serviceData.id}
                  serviceTitle={serviceData.title}
                  price={serviceData.price}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Características del servicio */}
        <ServiceFeatures features={serviceData.features} />

        {/* Planes de precios */}
        <ServicePricing plans={serviceData.pricingPlans} />

        {/* Reseñas */}
        <ServiceReviews
          reviews={[]}
          totalReviews={serviceData.reviewCount}
          rating={serviceData.rating}
        />

        {/* Preguntas frecuentes */}
        <ServiceFAQ faqs={serviceData.faqs} />
      </div>
    </div>
  )
} 