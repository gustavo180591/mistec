'use client'

import { FC, useState } from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Hero: FC = () => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/services?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Encuentra los mejores servicios profesionales
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Conectamos profesionales calificados con clientes que buscan servicios de calidad.
            Desde desarrollo web hasta diseño gráfico, encuentra el servicio perfecto para tus necesidades.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <form onSubmit={handleSearch} className="w-full max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="¿Qué servicio estás buscando?"
                  className="w-full rounded-full border-0 py-4 pl-6 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary-600 p-2 text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
          <div className="mt-8 flex items-center gap-x-6">
            <a
              href="/services"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Explorar servicios
            </a>
            <a href="/providers" className="text-sm font-semibold leading-6 text-gray-900">
              Ver proveedores <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="/images/hero-image.jpg"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 