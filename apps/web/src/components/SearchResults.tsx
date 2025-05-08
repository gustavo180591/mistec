'use client'

import { FC } from 'react'
import ServiceCard from '@/components/ServiceCard'

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

interface SearchResultsProps {
  services: Service[]
  totalResults: number
  onSortChange: (sortOption: string) => void
  onFilterChange: (filters: { category?: string; priceRange?: string }) => void
}

const SearchResults: FC<SearchResultsProps> = ({
  services,
  totalResults,
  onSortChange,
  onFilterChange,
}) => {
  return (
    <div>
      {/* Encabezado con resultados y ordenamiento */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-6">
        <div>
          <h2 className="text-lg font-medium text-gray-900">
            {totalResults} {totalResults === 1 ? 'servicio encontrado' : 'servicios encontrados'}
          </h2>
        </div>
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-sm text-gray-600">
            Ordenar por:
          </label>
          <select
            id="sort"
            name="sort"
            className="rounded-md border-gray-300 text-sm focus:border-primary-500 focus:ring-primary-500"
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="relevance">Relevancia</option>
            <option value="price-low-high">Precio: Menor a Mayor</option>
            <option value="price-high-low">Precio: Mayor a Menor</option>
            <option value="rating">Mejor Calificación</option>
            <option value="reviews">Más Reseñas</option>
          </select>
        </div>
      </div>

      {/* Lista de servicios */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            price={service.price}
            imageUrl={service.imageUrl}
            provider={service.provider}
            rating={service.rating}
            reviewCount={service.reviewCount}
          />
        ))}
      </div>

      {/* Mensaje cuando no hay resultados */}
      {services.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900">No se encontraron servicios</h3>
          <p className="mt-2 text-sm text-gray-500">
            Intenta ajustar tus criterios de búsqueda o filtros
          </p>
        </div>
      )}
    </div>
  )
}

export default SearchResults 