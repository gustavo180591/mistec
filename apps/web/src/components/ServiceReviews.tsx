'use client'

import { FC } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'

interface Review {
  id: string
  user: {
    id: string
    name: string
    avatarUrl: string
  }
  rating: number
  comment: string
  date: string
}

interface ServiceReviewsProps {
  reviews: Review[]
  totalReviews: number
  rating: number
}

const ServiceReviews: FC<ServiceReviewsProps> = ({
  reviews,
  totalReviews,
  rating,
}) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Reseñas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lo que dicen nuestros clientes
          </p>
          <div className="mt-4 flex items-center justify-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((star) => (
                <StarIcon
                  key={star}
                  className={`h-5 w-5 flex-shrink-0 ${
                    star < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  aria-hidden="true"
                />
              ))}
              <p className="ml-2 text-sm text-gray-500">
                {rating} ({totalReviews} reseñas)
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.id} className="flex flex-col">
              <div className="flex items-center gap-x-4">
                <Image
                  src={review.user.avatarUrl}
                  alt={review.user.name}
                  className="h-10 w-10 rounded-full bg-gray-50"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{review.user.name}</h3>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <StarIcon
                        key={star}
                        className={`h-4 w-4 flex-shrink-0 ${
                          star < review.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">{review.comment}</p>
              <p className="mt-2 text-xs text-gray-500">{review.date}</p>
            </div>
          ))}
        </div>

        {reviews.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No hay reseñas aún</h3>
            <p className="mt-2 text-sm text-gray-500">
              Sé el primero en dejar una reseña sobre este servicio
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ServiceReviews 