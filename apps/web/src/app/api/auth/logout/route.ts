import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  try {
    cookies().delete('token')
    return NextResponse.json({ message: 'Sesión cerrada exitosamente' })
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json(
      { message: 'Error al cerrar sesión' },
      { status: 500 }
    )
  }
} 