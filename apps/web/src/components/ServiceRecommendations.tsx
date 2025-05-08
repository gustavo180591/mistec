'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'

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
}

interface ServiceRecommendationsProps {
  services: Service[]
  title?: string
  subtitle?: string
}

const ServiceRecommendations: FC<ServiceRecommendationsProps> = ({
  services,
  title = 'Recommended Services',
  subtitle = 'Services you might be interested in',
}) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Recommendations</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">{subtitle}</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover"
                  src={service.imageUrl}
                  alt={service.title}
                  width={400}
                  height={300}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <Link href={`/services/${service.id}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{service.title}</p>
                    <p className="mt-3 text-base text-gray-500">{service.description}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <Link href={`/providers/${service.provider.id}`}>
                      <Image
                        className="h-10 w-10 rounded-full"
                        src={service.provider.avatar}
                        alt={service.provider.name}
                        width={40}
                        height={40}
                      />
                    </Link>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <Link href={`/providers/${service.provider.id}`} className="hover:underline">
                        {service.provider.name}
                      </Link>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <span>{service.rating} rating</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{service.reviewCount} reviews</span>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <p className="text-lg font-semibold text-primary-600">${service.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceRecommendations 