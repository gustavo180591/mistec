'use client'

import { FC } from 'react'
import ResetPasswordForm from '@/components/auth/ResetPasswordForm'

interface ResetPasswordPageProps {
  params: {
    token: string
  }
}

const ResetPasswordPage: FC<ResetPasswordPageProps> = ({ params }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ResetPasswordForm token={params.token} />
    </div>
  )
}

export default ResetPasswordPage 