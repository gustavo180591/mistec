'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'

interface Category {
  id: string
  name: string
  description: string
  imageUrl: string
  serviceCount: number
}

interface ServiceCategoriesProps {
  categories: Category[]
  title?: string
  subtitle?: string
  onCategorySelect?: (categoryId: string) => void
}

const ServiceCategories: FC<ServiceCategoriesProps> = ({
  categories,
  title = 'Service Categories',
  subtitle = 'Browse our wide range of services',
  onCategorySelect,
}) => {
  const handleCategoryClick = (categoryId: string) => {
    if (onCategorySelect) {
      onCategorySelect(categoryId)
    } else {
      window.location.href = `/services?category=${categoryId}`
    }
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">{title}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative cursor-pointer"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  className="h-full w-full object-cover object-center"
                  width={400}
                  height={300}
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <Link href={`/services?category=${category.id}`}>
                  <span className="absolute inset-0" />
                  {category.name}
                </Link>
              </h3>
              <p className="text-base font-semibold text-gray-900">{category.description}</p>
              <p className="mt-1 text-sm text-gray-500">{category.serviceCount} services</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceCategories 