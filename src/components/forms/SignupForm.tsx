'use client'

import { useState, type FormEvent } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface SignupFormProps {
  formTitle: string
}

const campusOptions = [
  { label: 'North', value: 'north' },
  { label: 'Central', value: 'central' },
  { label: 'Unichurch', value: 'unichurch' },
] as const

const inputStyles =
  'w-full rounded-md border border-warm-grey/60 bg-white px-4 py-3 text-sm text-brand-black placeholder:text-mid-grey transition-colors duration-200 focus:border-rich-red focus:outline-none focus:ring-2 focus:ring-rich-red/20'

export function SignupForm({ formTitle }: SignupFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const body = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      campus: formData.get('campus'),
      formTitle,
    }

    try {
      const res = await fetch('/api/forms/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (!res.ok) {
        const data = (await res.json()) as { error?: string }
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-md border border-green-200 bg-green-50 p-6 text-center">
        <p className="text-lg font-semibold text-green-800">You are signed up.</p>
        <p className="mt-2 text-sm text-green-700">
          Thank you for registering. We will be in touch with more details soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === 'error' && errorMessage && (
        <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      <div>
        <label htmlFor="signup-name" className="mb-1.5 block text-sm font-medium text-brand-black">
          Name <span className="text-rich-red">*</span>
        </label>
        <input
          id="signup-name"
          name="name"
          type="text"
          required
          className={inputStyles}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="signup-email" className="mb-1.5 block text-sm font-medium text-brand-black">
          Email <span className="text-rich-red">*</span>
        </label>
        <input
          id="signup-email"
          name="email"
          type="email"
          required
          className={inputStyles}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="signup-phone" className="mb-1.5 block text-sm font-medium text-brand-black">
          Phone
        </label>
        <input
          id="signup-phone"
          name="phone"
          type="text"
          className={inputStyles}
          placeholder="021 000 0000"
        />
      </div>

      <div>
        <label htmlFor="signup-campus" className="mb-1.5 block text-sm font-medium text-brand-black">
          Campus Preference
        </label>
        <select id="signup-campus" name="campus" className={inputStyles}>
          <option value="">Select a campus</option>
          {campusOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center rounded-md bg-rich-red px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-deep-red active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'Signing up...' : 'Sign Up'}
      </button>
    </form>
  )
}
