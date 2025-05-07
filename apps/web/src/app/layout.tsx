import { Inter } from 'next/font/google'
import { ApolloWrapper } from '@/lib/apollo-wrapper'
import Navigation from '@/components/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Mistec - Marketplace Platform',
  description: 'A modern marketplace platform for services and products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gray-50">
        <ApolloWrapper>
          <Navigation />
          <main>{children}</main>
        </ApolloWrapper>
      </body>
    </html>
  )
} 