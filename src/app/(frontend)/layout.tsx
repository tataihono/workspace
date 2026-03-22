import type { ReactNode } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
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
        <Header />
        <main className="pt-20 lg:pt-[100px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
