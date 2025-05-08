'use client'

import { FC } from 'react'
import { useSearchParams } from 'next/navigation'
import LoginForm from '@/components/auth/LoginForm'

const LoginPage: FC = () => {
  const searchParams = useSearchParams()
  const from = searchParams.get('from') || '/dashboard'

  return (
    <div className="min-h-screen bg-gray-50">
      <LoginForm onSuccess={() => window.location.href = from} />
    </div>
  )
}

export default LoginPage 