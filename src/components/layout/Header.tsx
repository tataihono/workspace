'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Visit',
    href: '/visit',
    children: [
      { label: 'What to Expect', href: '/visit' },
      { label: 'North', href: '/campus/north' },
      { label: 'Central', href: '/campus/central' },
      { label: 'Unichurch', href: '/campus/unichurch' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Our Vision', href: '/vision' },
  {
    label: 'Next Steps',
    href: '/next-steps',
    children: [
      { label: 'Explaining Christianity', href: '/explaining-christianity' },
      { label: 'Newish Connect', href: '/newish' },
      { label: 'Connect Groups', href: '/connect-groups' },
      { label: 'Kids', href: '/kids' },
      { label: 'Youth', href: '/youth' },
    ],
  },
  { label: 'Contact', href: '/contact' },
  { label: 'Give', href: 'https://give.ev.church' },
]

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

  function handleEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-brand-black transition-colors hover:text-rich-red"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
      >
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-1">
          <div className="min-w-48 rounded-md border border-cool-grey bg-white py-1 shadow-lg">
            {item.children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2 text-sm text-dark-grey transition-colors hover:bg-warm-white hover:text-rich-red"
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      )}
    </svg>
  )
}

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  if (!open) return null

  return (
    <div className="fixed inset-0 top-20 z-40 overflow-y-auto bg-white lg:hidden">
      <nav className="mx-auto max-w-lg px-6 py-6">
        {navItems.map((item) => (
          <div key={item.label} className="border-b border-cool-grey">
            {item.children ? (
              <>
                <button
                  className="flex w-full items-center justify-between py-4 text-base font-semibold text-brand-black"
                  onClick={() =>
                    setExpandedItem(
                      expandedItem === item.label ? null : item.label,
                    )
                  }
                  aria-expanded={expandedItem === item.label}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expandedItem === item.label ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedItem === item.label && (
                  <div className="pb-3 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-sm text-dark-grey hover:text-rich-red"
                        onClick={onClose}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                className="block py-4 text-base font-semibold text-brand-black hover:text-rich-red"
                onClick={onClose}
                {...(item.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      setScrolled(y > 50)
      if (y > 100) {
        setHidden(y > lastScrollY.current)
      } else {
        setHidden(false)
      }
      lastScrollY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          hidden && !mobileOpen ? '-translate-y-full' : 'translate-y-0'
        } ${
          scrolled || mobileOpen
            ? 'bg-white/80 shadow-sm backdrop-blur-[12px]'
            : 'bg-white/0'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[80rem] items-center justify-between px-4 lg:h-[100px] lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Ev Church home">
            <span className="text-xl font-bold text-brand-black lg:text-2xl">
              ev.church
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} />
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-semibold text-brand-black transition-colors hover:text-rich-red"
                  {...(item.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-md text-brand-black lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
