import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

// Mock data - replace with actual data fetching
const booking = {
  id: 'B123456',
  serviceTitle: 'Professional Web Development',
  date: '2024-02-20',
  time: '14:00',
  duration: 2,
  totalPrice: 3000,
  provider: {
    name: 'John Doe',
    email: 'john@example.com',
  },
}

export default function BookingConfirmationPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <CheckCircleIcon className="mx-auto h-12 w-12 text-green-600" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
            Booking Confirmed!
          </h1>
          <p className="mt-2 text-base text-gray-500">
            Your service has been successfully booked. Here are your booking details:
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Booking ID</dt>
                  <dd className="mt-1 text-sm text-gray-900">{booking.id}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Service</dt>
                  <dd className="mt-1 text-sm text-gray-900">{booking.serviceTitle}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Date</dt>
                  <dd className="mt-1 text-sm text-gray-900">{booking.date}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Time</dt>
                  <dd className="mt-1 text-sm text-gray-900">{booking.time}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Duration</dt>
                  <dd className="mt-1 text-sm text-gray-900">{booking.duration} hours</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Total Price</dt>
                  <dd className="mt-1 text-sm text-gray-900">${booking.totalPrice}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Provider</dt>
                  <dd className="mt-1 text-sm text-gray-900">{booking.provider.name}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Provider Email</dt>
                  <dd className="mt-1 text-sm text-gray-900">{booking.provider.email}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-lg font-medium text-gray-900">Next Steps</h2>
            <p className="mt-2 text-sm text-gray-500">
              You will receive a confirmation email with all the details. The service provider will contact you shortly to discuss the project requirements.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <Link
                href="/dashboard"
                className="btn-primary"
              >
                View in Dashboard
              </Link>
              <Link
                href="/services"
                className="btn-secondary"
              >
                Browse More Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 