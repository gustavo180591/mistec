'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ServiceReviews from '@/components/ServiceReviews'

// Mock data for a service
const mockService = {
  id: '1',
  title: 'Professional Web Development',
  description: 'Custom website development using modern technologies like React, Node.js, and TypeScript. Perfect for businesses looking to establish their online presence or upgrade their existing website.',
  price: 1500,
  imageUrl: '/images/web-dev.jpg',
  provider: {
    name: 'Tech Solutions Inc.',
    avatar: '/images/provider1.jpg',
    rating: 4.8,
    reviewCount: 124,
  },
  features: [
    'Responsive design for all devices',
    'Modern tech stack (React, Node.js, TypeScript)',
    'SEO optimization',
    'Performance optimization',
    'Security best practices',
    '3 months of free support',
  ],
  reviews: [
    {
      id: '1',
      user: {
        name: 'John Smith',
        avatar: '/images/user1.jpg',
      },
      rating: 5,
      comment: 'Excellent service! The team delivered a high-quality website that exceeded our expectations.',
      date: '2024-03-15',
    },
    {
      id: '2',
      user: {
        name: 'Sarah Johnson',
        avatar: '/images/user2.jpg',
      },
      rating: 4,
      comment: 'Great work on our website redesign. The team was professional and responsive throughout the project.',
      date: '2024-03-10',
    },
    {
      id: '3',
      user: {
        name: 'Michael Brown',
        avatar: '/images/user3.jpg',
      },
      rating: 5,
      comment: 'Outstanding service! The website they built for us has significantly improved our online presence.',
      date: '2024-03-05',
    },
  ],
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Service Image */}
          <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg">
            <Image
              src={mockService.imageUrl}
              alt={mockService.title}
              className="h-full w-full object-cover object-center"
              width={800}
              height={600}
            />
          </div>

          {/* Service Details */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{mockService.title}</h1>
            
            <div className="mt-3">
              <h2 className="sr-only">Service information</h2>
              <p className="text-3xl tracking-tight text-gray-900">${mockService.price}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6 text-base text-gray-700">{mockService.description}</div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Provider</h3>
              <div className="mt-4 flex items-center">
                <div className="h-12 w-12 flex-shrink-0">
                  <Image
                    className="h-12 w-12 rounded-full"
                    src={mockService.provider.avatar}
                    alt={mockService.provider.name}
                    width={48}
                    height={48}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">{mockService.provider.name}</h4>
                  <div className="mt-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <svg
                        key={rating}
                        className={`h-4 w-4 flex-shrink-0 ${
                          rating < mockService.provider.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                    <p className="ml-2 text-sm text-gray-500">
                      {mockService.provider.rating} ({mockService.provider.reviewCount} reviews)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Features</h3>
              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-4 text-sm">
                  {mockService.features.map((feature) => (
                    <li key={feature} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href={`/services/${params.id}/book`}
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <ServiceReviews
            reviews={mockService.reviews}
            averageRating={mockService.provider.rating}
            totalReviews={mockService.provider.reviewCount}
          />
        </div>
      </div>
    </div>
  )
} 