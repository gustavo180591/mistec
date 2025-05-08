import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { sign } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // TODO: Replace with your actual user authentication logic
    // This is just a mock implementation
    if (email === 'test@example.com' && password === 'password') {
      const token = sign(
        {
          id: '1',
          email: 'test@example.com',
          name: 'Test User',
        },
        JWT_SECRET,
        { expiresIn: '1d' }
      )

      cookies().set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 day
      })

      return NextResponse.json({
        id: '1',
        name: 'Test User',
        email: 'test@example.com',
      })
    }

    return NextResponse.json(
      { message: 'Credenciales inválidas' },
      { status: 401 }
    )
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { message: 'Error al iniciar sesión' },
      { status: 500 }
    )
  }
} 