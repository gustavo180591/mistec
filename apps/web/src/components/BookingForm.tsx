'use client'

import { useState, FC, FormEvent, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'

interface BookingFormProps {
  serviceId: string
  serviceTitle: string
  price: number
}

interface BookingFormData {
  date: string
  time: string
  duration: string
  notes: string
}

const BookingForm: FC<BookingFormProps> = ({ serviceId, serviceTitle, price }) => {
  const router = useRouter()
  const [formData, setFormData] = useState<BookingFormData>({
    date: '',
    time: '',
    duration: '1',
    notes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // TODO: Implement actual booking logic
      console.log('Booking submitted:', { serviceId, ...formData })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Redirect to confirmation page
      router.push(`/bookings/confirmation?serviceId=${serviceId}`)
    } catch (error) {
      console.error('Booking failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">Book {serviceTitle}</h3>
        <p className="mt-1 text-sm text-gray-500">Schedule your service appointment</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            required
            min={new Date().toISOString().split('T')[0]}
            value={formData.date}
            onChange={handleChange}
            className="input-primary mt-1"
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            type="time"
            name="time"
            id="time"
            required
            value={formData.time}
            onChange={handleChange}
            className="input-primary mt-1"
          />
        </div>
      </div>

      <div>
        <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
          Duration (hours)
        </label>
        <select
          id="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="input-primary mt-1"
        >
          <option value="1">1 hour</option>
          <option value="2">2 hours</option>
          <option value="3">3 hours</option>
          <option value="4">4 hours</option>
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          className="input-primary mt-1"
          placeholder="Any specific requirements or preferences?"
        />
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">Total Price</p>
            <p className="text-sm text-gray-500">Based on duration</p>
          </div>
          <p className="text-lg font-medium text-gray-900">
            ${price * parseInt(formData.duration)}
          </p>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full"
        >
          {isSubmitting ? 'Processing...' : 'Confirm Booking'}
        </button>
      </div>
    </form>
  )
}

export default BookingForm 