'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'

interface Service {
  id: string
  title: string
  description: string
  price: number
  imageUrl: string
  provider: {
    id: string
    name: string
    avatarUrl: string
  }
  rating: number
  reviewCount: number
  category: string
}

interface FeaturedServicesProps {
  services: Service[]
  title?: string
  subtitle?: string
}

const FeaturedServices: FC<FeaturedServicesProps> = ({
  services,
  title = 'Servicios Destacados',
  subtitle = 'Los servicios más populares y mejor valorados',
}) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">{subtitle}</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col items-start rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full aspect-[16/9] mb-6">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <Link
                  href={`/services?category=${service.category}`}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {service.category}
                </Link>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={`/services/${service.id}`}>
                    <span className="absolute inset-0" />
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  src={service.provider.avatarUrl}
                  alt={service.provider.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <Link href={`/providers/${service.provider.id}`}>
                      <span className="absolute inset-0" />
                      {service.provider.name}
                    </Link>
                  </p>
                  <div className="flex items-center gap-x-1 text-gray-600">
                    <StarIcon className="h-4 w-4 text-yellow-400" />
                    <span>{service.rating}</span>
                    <span className="text-gray-400">({service.reviewCount} reviews)</span>
                  </div>
                </div>
                <div className="ml-auto">
                  <p className="text-lg font-semibold text-primary-600">${service.price}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500"
          >
            Ver todos los servicios <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedServices 