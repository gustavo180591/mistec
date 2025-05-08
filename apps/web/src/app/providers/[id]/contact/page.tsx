'use client'

import { useState } from 'react'
import ContactForm from '@/components/ContactForm'

// Mock data for a provider
const mockProvider = {
  id: '1',
  name: 'Tech Solutions Inc.',
  avatar: '/images/provider1.jpg',
  bio: 'We are a team of experienced developers and designers passionate about creating high-quality digital solutions.',
}

export default function ContactPage({ params }: { params: { id: string } }) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (data: {
    name: string
    email: string
    subject: string
    message: string
  }) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log('Contact form submitted:', data)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact {mockProvider.name}
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Have a question or want to discuss your project? Send us a message and we'll get back to
              you as soon as possible.
            </p>
          </div>

          <div className="mt-16">
            <ContactForm
              providerId={mockProvider.id}
              providerName={mockProvider.name}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 