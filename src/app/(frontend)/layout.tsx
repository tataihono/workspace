import type { ReactNode } from 'react'
import '@/styles/globals.css'

export const metadata = {
  title: {
    default: 'Ev Church',
    template: '%s | Ev Church',
  },
  description:
    'Ev Church — a community of Christ-followers in Auckland, New Zealand.',
}

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white font-sans text-brand-black antialiased">
        {/* Header will be added in Phase 2 */}
        <main>{children}</main>
        {/* Footer will be added in Phase 2 */}
      </body>
    </html>
  )
}
