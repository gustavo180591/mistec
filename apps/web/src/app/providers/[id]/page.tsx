'use client'

import ProviderProfile from '@/components/ProviderProfile'

// Mock data for a provider
const mockProvider = {
  id: '1',
  name: 'Tech Solutions Inc.',
  avatar: '/images/provider1.jpg',
  bio: 'We are a team of experienced developers and designers passionate about creating high-quality digital solutions. With over 5 years of experience in web and mobile development, we help businesses transform their ideas into reality.',
  rating: 4.8,
  reviewCount: 124,
  services: [
    {
      id: '1',
      title: 'Professional Web Development',
      price: 1500,
      imageUrl: '/images/web-dev.jpg',
    },
    {
      id: '2',
      title: 'Mobile App Development',
      price: 2500,
      imageUrl: '/images/mobile-dev.jpg',
    },
    {
      id: '3',
      title: 'UI/UX Design',
      price: 1200,
      imageUrl: '/images/design.jpg',
    },
    {
      id: '4',
      title: 'Digital Marketing',
      price: 800,
      imageUrl: '/images/marketing.jpg',
    },
  ],
}

export default function ProviderPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProviderProfile provider={mockProvider} />
    </div>
  )
} 