'use client'

import { useState } from 'react'
import SearchResults from '@/components/SearchResults'

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
  {
    id: '3',
    title: 'UI/UX Design',
    description: 'Professional UI/UX design services',
    price: 1200,
    imageUrl: '/images/design.jpg',
    provider: {
      name: 'Design Studio',
      avatar: '/images/provider3.jpg',
    },
    rating: 4.7,
    reviewCount: 56,
    category: 'design',
  },
  {
    id: '4',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing solutions',
    price: 800,
    imageUrl: '/images/marketing.jpg',
    provider: {
      name: 'Marketing Pro',
      avatar: '/images/provider4.jpg',
    },
    rating: 4.6,
    reviewCount: 42,
    category: 'marketing',
  },
]

export default function SearchPage() {
  const [filteredServices, setFilteredServices] = useState(mockServices)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    const filtered = mockServices.filter(
      (service) =>
        service.title.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredServices(filtered)
  }

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

  const handleFilterChange = (filters: { category?: string; priceRange?: string }) => {
    let filtered = mockServices

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter((service) => service.category === filters.category)
    }

    // Apply price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number)
      filtered = filtered.filter(
        (service) => service.price >= min && (!max || service.price <= max)
      )
    }

    // Apply search query filter
    if (searchQuery) {
      filtered = filtered.filter(
        (service) =>
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    setFilteredServices(filtered)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Search Services
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Find the perfect service for your needs
            </p>
          </div>

          <div className="mt-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search services..."
                className="block w-full rounded-md border-0 py-3 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <SearchResults
            services={filteredServices}
            totalResults={filteredServices.length}
            onSortChange={handleSortChange}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>
    </div>
  )
} 