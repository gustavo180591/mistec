'use client'

import { useState, FC } from 'react'
import ServiceCard from './ServiceCard'

interface Service {
  id: string
  title: string
  description: string
  price: number
  imageUrl: string
  provider: {
    id: string
    name: string
    avatarUrl?: string
  }
  rating: number
  reviewCount: number
  category: string
}

interface SearchResultsProps {
  services: Service[]
  totalResults: number
  onSortChange: (sortOption: string) => void
  onFilterChange: (filters: { category?: string; priceRange?: string }) => void
}

const SearchResults: FC<SearchResultsProps> = ({
  services,
  totalResults,
  onSortChange,
  onFilterChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('')

  const categories = [
    { id: 'web-development', name: 'Web Development' },
    { id: 'mobile-development', name: 'Mobile Development' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' },
  ]

  const priceRanges = [
    { id: '0-500', name: 'Under $500' },
    { id: '500-1000', name: '$500 - $1,000' },
    { id: '1000-2000', name: '$1,000 - $2,000' },
    { id: '2000+', name: '$2,000+' },
  ]

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    onFilterChange({ category: categoryId, priceRange: selectedPriceRange })
  }

  const handlePriceRangeChange = (rangeId: string) => {
    setSelectedPriceRange(rangeId)
    onFilterChange({ category: selectedCategory, priceRange: rangeId })
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
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="block w-48 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <select
              value={selectedPriceRange}
              onChange={(e) => handlePriceRangeChange(e.target.value)}
              className="block w-48 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6"
            >
              <option value="">All Prices</option>
              {priceRanges.map((range) => (
                <option key={range.id} value={range.id}>
                  {range.name}
                </option>
              ))}
            </select>

            <select
              onChange={(e) => onSortChange(e.target.value)}
              className="block w-48 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6"
            >
              <option value="relevance">Sort by Relevance</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviews</option>
            </select>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              imageUrl={service.imageUrl}
              provider={{
                id: service.provider.id,
                name: service.provider.name,
                avatarUrl: service.provider.avatarUrl,
              }}
              rating={service.rating}
              reviewCount={service.reviewCount}
            />
          ))}
        </div>

        {services.length === 0 && (
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

export default SearchResults 