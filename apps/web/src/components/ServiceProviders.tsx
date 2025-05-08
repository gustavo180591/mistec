'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface Provider {
  id: string
  name: string
  avatar: string
  role: string
  bio: string
  rating: number
  reviewCount: number
  serviceCount: number
}

interface ServiceProvidersProps {
  providers: Provider[]
  title?: string
  subtitle?: string
}

const ServiceProviders: FC<ServiceProvidersProps> = ({
  providers,
  title = 'Our Service Providers',
  subtitle = 'Meet our team of expert service providers',
}) => {
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
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="flex flex-col items-start rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5"
            >
              <div className="flex items-center gap-x-4">
                <Image
                  className="h-16 w-16 rounded-full bg-gray-50"
                  src={provider.avatar}
                  alt={provider.name}
                  width={64}
                  height={64}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    <Link href={`/providers/${provider.id}`}>{provider.name}</Link>
                  </h3>
                  <p className="text-sm leading-6 text-gray-600">{provider.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">{provider.bio}</p>
              <div className="mt-6 flex items-center gap-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${
                        i < provider.rating ? 'text-yellow-400' : 'text-gray-300'
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
                    {provider.rating.toFixed(1)} ({provider.reviewCount} reviews)
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  {provider.serviceCount} services
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceProviders 