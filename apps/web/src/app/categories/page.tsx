'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import CategoryGrid from '@/components/CategoryGrid'

// Mock data for categories
const mockCategories = [
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Custom websites and web applications',
    imageUrl: '/images/web-dev.jpg',
    serviceCount: 45,
  },
  {
    id: 'mobile-development',
    name: 'Mobile Development',
    description: 'iOS and Android applications',
    imageUrl: '/images/mobile-dev.jpg',
    serviceCount: 32,
  },
  {
    id: 'design',
    name: 'Design',
    description: 'UI/UX and graphic design services',
    imageUrl: '/images/design.jpg',
    serviceCount: 28,
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Digital marketing and SEO services',
    imageUrl: '/images/marketing.jpg',
    serviceCount: 36,
  },
  {
    id: 'content-writing',
    name: 'Content Writing',
    description: 'Professional content creation services',
    imageUrl: '/images/content.jpg',
    serviceCount: 24,
  },
  {
    id: 'data-science',
    name: 'Data Science',
    description: 'Data analysis and machine learning services',
    imageUrl: '/images/data-science.jpg',
    serviceCount: 19,
  },
]

export default function CategoriesPage() {
  const router = useRouter()

  const handleCategorySelect = (categoryId: string) => {
    router.push(`/services?category=${categoryId}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Service Categories
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Browse through our wide range of professional services
            </p>
          </div>
        </div>

        <div className="mt-16">
          <CategoryGrid categories={mockCategories} onCategorySelect={handleCategorySelect} />
        </div>
      </div>
    </div>
  )
} 