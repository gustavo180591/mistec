import { NextResponse } from 'next/server'
import { hash } from 'bcryptjs'

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    // TODO: Replace with your actual user registration logic
    // This is just a mock implementation
    if (email === 'test@example.com') {
      return NextResponse.json(
        { message: 'El correo electrónico ya está registrado' },
        { status: 400 }
      )
    }

    // Hash the password
    const hashedPassword = await hash(password, 12)

    // TODO: Save user to database
    // For now, we'll just return a success response
    return NextResponse.json(
      { message: 'Usuario registrado exitosamente' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { message: 'Error al registrar usuario' },
      { status: 500 }
    )
  }
} 