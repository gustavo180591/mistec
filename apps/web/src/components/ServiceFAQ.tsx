'use client'

import { FC, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

interface FAQ {
  id: string
  question: string
  answer: string
}

interface ServiceFAQProps {
  faqs: FAQ[]
  title?: string
  subtitle?: string
}

const ServiceFAQ: FC<ServiceFAQProps> = ({
  faqs,
  title = 'Preguntas frecuentes',
  subtitle = 'Todo lo que necesitas saber sobre este servicio',
}) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id)
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
        <div className="mx-auto mt-16 max-w-2xl divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="py-6">
              <button
                className="flex w-full items-start justify-between text-left"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </span>
                <span className="ml-6 flex h-7 items-center">
                  <ChevronDownIcon
                    className={`h-6 w-6 transform ${
                      openFaqId === faq.id ? 'rotate-180' : ''
                    } transition-transform duration-200`}
                    aria-hidden="true"
                  />
                </span>
              </button>
              {openFaqId === faq.id && (
                <div className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceFAQ 