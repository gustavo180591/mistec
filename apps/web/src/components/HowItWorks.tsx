'use client'

import { FC } from 'react'
import {
  MagnifyingGlassIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

const steps = [
  {
    name: 'Busca',
    description: 'Encuentra el servicio perfecto para tus necesidades usando nuestro buscador inteligente.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Conecta',
    description: 'Conoce a profesionales calificados y revisa sus perfiles, calificaciones y reseñas.',
    icon: UserGroupIcon,
  },
  {
    name: 'Conversa',
    description: 'Comunícate directamente con los proveedores para discutir los detalles de tu proyecto.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Contrata',
    description: 'Selecciona el profesional que mejor se adapte a tus necesidades y realiza el pago de forma segura.',
    icon: CheckCircleIcon,
  },
]

const HowItWorks: FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Cómo funciona</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Todo lo que necesitas en cuatro simples pasos
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nuestro proceso está diseñado para hacer que la contratación de servicios sea simple,
            segura y eficiente.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <step.icon
                    className="h-5 w-5 flex-none text-primary-600"
                    aria-hidden="true"
                  />
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks 