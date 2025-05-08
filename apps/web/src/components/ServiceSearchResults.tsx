'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Service {
  id: string
  title: string
  description: string
  price: number
  imageUrl: string
  provider: {
    id: string
    name: string
    avatar: string
  }
  rating: number
  reviewCount: number
  category: string
}

interface ServiceSearchResultsProps {
  services: Service[]
  totalResults: number
  onSortChange: (sortBy: string) => void
  onFilterChange: (filters: { category?: string; priceRange?: string }) => void
}

export default function ServiceSearchResults({
  services,
  totalResults,
  onSortChange,
  onFilterChange,
}: ServiceSearchResultsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('')

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    onFilterChange({ category, priceRange: selectedPriceRange })
  }

  const handlePriceRangeChange = (priceRange: string) => {
    setSelectedPriceRange(priceRange)
    onFilterChange({ category: selectedCategory, priceRange })
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Search Results ({totalResults})
          </h2>
          <div className="flex items-center space-x-4">
            <select
              className="block w-48 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6"
              onChange={(e) => onSortChange(e.target.value)}
            >
              <option value="relevance">Relevance</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="reviews">Most Reviews</option>
            </select>
            <select
              className="block w-48 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-development">Mobile Development</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
            </select>
            <select
              className="block w-48 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6"
              value={selectedPriceRange}
              onChange={(e) => handlePriceRangeChange(e.target.value)}
            >
              <option value="">All Prices</option>
              <option value="0-100">$0 - $100</option>
              <option value="100-500">$100 - $500</option>
              <option value="500-1000">$500 - $1000</option>
              <option value="1000+">$1000+</option>
            </select>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {services.map((service) => (
            <div key={service.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                  width={400}
                  height={300}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/services/${service.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{service.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${service.price}</p>
              </div>
              <div className="mt-4 flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${
                        i < service.rating ? 'text-yellow-400' : 'text-gray-300'
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
                  <span className="ml-2 text-sm text-gray-500">
                    {service.rating.toFixed(1)} ({service.reviewCount} reviews)
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <Image
                  src={service.provider.avatar}
                  alt={service.provider.name}
                  className="h-8 w-8 rounded-full"
                  width={32}
                  height={32}
                />
                <Link
                  href={`/providers/${service.provider.id}`}
                  className="ml-2 text-sm text-gray-500 hover:text-gray-900"
                >
                  {service.provider.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 