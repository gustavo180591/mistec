'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ServiceSearchResults from '@/components/ServiceSearchResults'

// Mock data for services
const mockServices = [
  {
    id: '1',
    title: 'Web Development Service',
    description: 'Professional web development services',
    price: 500,
    imageUrl: '/images/web-dev.jpg',
    provider: {
      id: '1',
      name: 'John Doe',
      avatar: '/images/avatar-1.jpg',
    },
    rating: 4.5,
    reviewCount: 120,
    category: 'web-development',
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'iOS and Android app development',
    price: 800,
    imageUrl: '/images/mobile-dev.jpg',
    provider: {
      id: '2',
      name: 'Jane Smith',
      avatar: '/images/avatar-2.jpg',
    },
    rating: 4.8,
    reviewCount: 85,
    category: 'mobile-development',
  },
  {
    id: '3',
    title: 'UI/UX Design',
    description: 'Professional UI/UX design services',
    price: 300,
    imageUrl: '/images/design.jpg',
    provider: {
      id: '3',
      name: 'Mike Johnson',
      avatar: '/images/avatar-3.jpg',
    },
    rating: 4.2,
    reviewCount: 65,
    category: 'design',
  },
  {
    id: '4',
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing services',
    price: 400,
    imageUrl: '/images/marketing.jpg',
    provider: {
      id: '4',
      name: 'Sarah Wilson',
      avatar: '/images/avatar-4.jpg',
    },
    rating: 4.6,
    reviewCount: 95,
    category: 'marketing',
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [filteredServices, setFilteredServices] = useState(mockServices)
  const [totalResults, setTotalResults] = useState(mockServices.length)

  const handleSortChange = (sortBy: string) => {
    let sortedServices = [...filteredServices]
    switch (sortBy) {
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
        // Default to relevance (no specific sorting)
        break
    }
    setFilteredServices(sortedServices)
  }

  const handleFilterChange = (filters: { category?: string; priceRange?: string }) => {
    let filtered = [...mockServices]

    if (filters.category) {
      filtered = filtered.filter((service) => service.category === filters.category)
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number)
      filtered = filtered.filter((service) => {
        if (max) {
          return service.price >= min && service.price <= max
        } else {
          return service.price >= min
        }
      })
    }

    setFilteredServices(filtered)
    setTotalResults(filtered.length)
  }

  useEffect(() => {
    const query = searchParams.get('q')
    if (query) {
      const searchResults = mockServices.filter(
        (service) =>
          service.title.toLowerCase().includes(query.toLowerCase()) ||
          service.description.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredServices(searchResults)
      setTotalResults(searchResults.length)
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceSearchResults
        services={filteredServices}
        totalResults={totalResults}
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
      />
    </div>
  )
} 