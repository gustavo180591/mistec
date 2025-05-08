import { NextResponse } from 'next/server'
import { sign } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // TODO: Replace with your actual user lookup logic
    // This is just a mock implementation
    if (email !== 'test@example.com') {
      // We still return success even if the email doesn't exist
      // This is a security best practice to prevent email enumeration
      return NextResponse.json({
        message: 'Si el correo existe, se enviarán las instrucciones',
      })
    }

    // Generate a password reset token
    const resetToken = sign(
      {
        email,
        type: 'password-reset',
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    )

    // TODO: Send email with reset link
    // For now, we'll just log the token
    console.log('Password reset token:', resetToken)

    return NextResponse.json({
      message: 'Si el correo existe, se enviarán las instrucciones',
    })
  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json(
      { message: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
} 