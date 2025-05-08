import BookingForm from '@/components/BookingForm'

// Mock data - replace with actual data fetching
const service = {
  id: '1',
  title: 'Professional Web Development',
  price: 1500,
}

export default function BookingPage({ params }: { params: { id: string } }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <BookingForm
            serviceId={service.id}
            serviceTitle={service.title}
            price={service.price}
          />
        </div>
      </div>
    </div>
  )
} 