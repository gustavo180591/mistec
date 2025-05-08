'use client'

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const sortOptions = [
  { id: 'price-asc', name: 'Price: Low to High' },
  { id: 'price-desc', name: 'Price: High to Low' },
  { id: 'rating-desc', name: 'Highest Rated' },
  { id: 'reviews-desc', name: 'Most Reviews' },
]

const priceRanges = [
  { id: 'all', name: 'All Prices' },
  { id: '0-500', name: 'Under $500' },
  { id: '500-1000', name: '$500 - $1,000' },
  { id: '1000-2000', name: '$1,000 - $2,000' },
  { id: '2000+', name: '$2,000+' },
]

interface ServiceFiltersProps {
  onSortChange: (sortId: string) => void
  onPriceRangeChange: (rangeId: string) => void
  onSearchChange: (query: string) => void
}

export default function ServiceFilters({
  onSortChange,
  onPriceRangeChange,
  onSearchChange,
}: ServiceFiltersProps) {
  const [selectedSort, setSelectedSort] = useState(sortOptions[0])
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0])
  const [searchQuery, setSearchQuery] = useState('')

  const handleSortChange = (option: typeof sortOptions[0]) => {
    setSelectedSort(option)
    onSortChange(option.id)
  }

  const handlePriceRangeChange = (range: typeof priceRanges[0]) => {
    setSelectedPriceRange(range)
    onPriceRangeChange(range.id)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearchChange(query)
  }

  return (
    <div className="space-y-4">
      {/* Search */}
      <div>
        <label htmlFor="search" className="sr-only">
          Search services
        </label>
        <input
          type="text"
          name="search"
          id="search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="input-primary w-full"
          placeholder="Search services..."
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Sort */}
        <div>
          <Listbox value={selectedSort} onChange={handleSortChange}>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                <span className="block truncate">{selectedSort.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {sortOptions.map((option) => (
                    <Listbox.Option
                      key={option.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-primary-100 text-primary-900' : 'text-gray-900'
                        }`
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                            {option.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        {/* Price Range */}
        <div>
          <Listbox value={selectedPriceRange} onChange={handlePriceRangeChange}>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                <span className="block truncate">{selectedPriceRange.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {priceRanges.map((range) => (
                    <Listbox.Option
                      key={range.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-primary-100 text-primary-900' : 'text-gray-900'
                        }`
                      }
                      value={range}
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                            {range.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
    </div>
  )
} 