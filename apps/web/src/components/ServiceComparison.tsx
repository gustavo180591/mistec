'use client'

import { FC } from 'react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'

interface ComparisonFeature {
  id: string
  name: string
  included: boolean
}

interface Service {
  id: string
  name: string
  description: string
  price: number
  features: ComparisonFeature[]
}

interface ServiceComparisonProps {
  services: Service[]
  title?: string
  subtitle?: string
}

const ServiceComparison: FC<ServiceComparisonProps> = ({
  services,
  title = 'Compara servicios',
  subtitle = 'Encuentra el servicio que mejor se adapta a tus necesidades',
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
        <div className="mt-16 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Característica
                      </th>
                      {services.map((service) => (
                        <th
                          key={service.id}
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          <div className="flex flex-col">
                            <span>{service.name}</span>
                            <span className="text-xs font-normal text-gray-500">
                              ${service.price}/hora
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {services[0].features.map((feature) => (
                      <tr key={feature.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {feature.name}
                        </td>
                        {services.map((service) => {
                          const serviceFeature = service.features.find((f) => f.id === feature.id)
                          return (
                            <td
                              key={`${service.id}-${feature.id}`}
                              className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                            >
                              {serviceFeature?.included ? (
                                <CheckIcon
                                  className="h-5 w-5 text-primary-600"
                                  aria-hidden="true"
                                />
                              ) : (
                                <XMarkIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              )}
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceComparison 