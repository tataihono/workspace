import { NextResponse } from 'next/server'

interface SignupFormBody {
  name: unknown
  email: unknown
  phone: unknown
  campus: unknown
  formTitle: unknown
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SignupFormBody
    const { name, email, phone, campus, formTitle } = body

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
    }

    // Placeholder: log the submission for future Rock RMS workflow integration
    console.log('[Signup Form Submission]', {
      name: name.trim(),
      email: email.trim(),
      phone: typeof phone === 'string' ? phone.trim() : null,
      campus: typeof campus === 'string' ? campus.trim() : null,
      formTitle: typeof formTitle === 'string' ? formTitle.trim() : 'General Signup',
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, message: 'Signup received.' })
  } catch {
    return NextResponse.json(
      { error: 'Invalid request. Please try again.' },
      { status: 400 },
    )
  }
}
