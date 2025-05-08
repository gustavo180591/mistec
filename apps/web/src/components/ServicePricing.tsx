'use client'

import { FC } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

interface PricingPlan {
  id: string
  name: string
  description: string
  price: number
  features: string[]
  isPopular?: boolean
}

interface ServicePricingProps {
  plans: PricingPlan[]
  title?: string
  subtitle?: string
}

const ServicePricing: FC<ServicePricingProps> = ({
  plans,
  title = 'Planes y precios',
  subtitle = 'Elige el plan que mejor se adapte a tus necesidades',
}) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">{title}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 ${
                plan.isPopular ? 'bg-gray-50' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary-600 px-4 py-1 text-sm font-semibold text-white">
                    Más popular
                  </span>
                </div>
              )}
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">{plan.name}</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  ${plan.price}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/hora</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-primary-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.isPopular
                    ? 'bg-primary-600 text-white hover:bg-primary-500 focus-visible:outline-primary-600'
                    : 'bg-white text-primary-600 ring-1 ring-inset ring-primary-200 hover:ring-primary-300'
                }`}
              >
                Contratar plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicePricing 