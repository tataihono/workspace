import type { ReactNode } from 'react'

export const metadata = {
  title: 'Ev Church Admin',
}

export default function PayloadLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
