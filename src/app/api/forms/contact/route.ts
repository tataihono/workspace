import { NextResponse } from 'next/server'

interface ContactFormBody {
  name: unknown
  email: unknown
  message: unknown
  campus: unknown
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactFormBody
    const { name, email, message, campus } = body

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 })
    }

    // Placeholder: log the submission for future Rock RMS workflow integration
    console.log('[Contact Form Submission]', {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      campus: typeof campus === 'string' ? campus.trim() : null,
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, message: 'Message received.' })
  } catch {
    return NextResponse.json(
      { error: 'Invalid request. Please try again.' },
      { status: 400 },
    )
  }
}
