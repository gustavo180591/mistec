import { NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken'
import { hash } from 'bcryptjs'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: Request) {
  try {
    const { token, password } = await request.json()

    // Verify the token
    const decoded = verify(token, JWT_SECRET) as {
      email: string
      type: string
    }

    // Check if it's a password reset token
    if (decoded.type !== 'password-reset') {
      return NextResponse.json(
        { message: 'Token inválido' },
        { status: 400 }
      )
    }

    // Hash the new password
    const hashedPassword = await hash(password, 12)

    // TODO: Update the user's password in the database
    // For now, we'll just log the hashed password
    console.log('New hashed password:', hashedPassword)

    return NextResponse.json({
      message: 'Contraseña restablecida exitosamente',
    })
  } catch (error) {
    console.error('Reset password error:', error)
    return NextResponse.json(
      { message: 'Token inválido o expirado' },
      { status: 400 }
    )
  }
} 