'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ProviderProfileProps {
  provider: {
    id: string
    name: string
    avatar: string
    bio: string
    rating: number
    reviewCount: number
    services: {
      id: string
      title: string
      price: number
      imageUrl: string
    }[]
  }
}

export default function ProviderProfile({ provider }: ProviderProfileProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Provider Info */}
          <div>
            <div className="flex items-center">
              <div className="h-16 w-16 flex-shrink-0">
                <Image
                  className="h-16 w-16 rounded-full"
                  src={provider.avatar}
                  alt={provider.name}
                  width={64}
                  height={64}
                />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">{provider.name}</h1>
                <div className="mt-1 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <svg
                      key={rating}
                      className={`h-5 w-5 flex-shrink-0 ${
                        rating < provider.rating ? 'text-yellow-400' : 'text-gray-300'
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
                    {provider.rating} ({provider.reviewCount} reviews)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-medium text-gray-900">About</h2>
              <div className="mt-4 space-y-6 text-base text-gray-600">
                <p>{provider.bio}</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href={`/providers/${provider.id}/contact`}
                className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Contact Provider
              </Link>
            </div>
          </div>

          {/* Provider Services */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Services Offered</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
              {provider.services.map((service) => (
                <div key={service.id} className="group relative">
                  <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      className="h-full w-full object-cover object-center"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      <Link href={`/services/${service.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {service.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">${service.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 