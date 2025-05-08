import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  id: string
  title: string
  description: string
  price: number
  imageUrl: string
  provider: {
    id: string
    name: string
    avatarUrl?: string
  }
  rating: number
  reviewCount: number
}

export default function ServiceCard({
  id,
  title,
  description,
  price,
  imageUrl,
  provider,
  rating,
  reviewCount,
}: ServiceCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none sm:h-48">
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={300}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <Link href={`/services/${id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((star) => (
              <svg
                key={star}
                className={`h-4 w-4 ${
                  star < rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500">({reviewCount})</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {provider.avatarUrl && (
              <Image
                src={provider.avatarUrl}
                alt={provider.name}
                width={24}
                height={24}
                className="h-6 w-6 rounded-full"
              />
            )}
            <span className="text-sm text-gray-500">{provider.name}</span>
          </div>
          <p className="text-lg font-medium text-gray-900">${price}</p>
        </div>
      </div>
    </div>
  )
} 