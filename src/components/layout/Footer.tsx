import Link from 'next/link'

type FooterColumn = {
  title: string
  links: { label: string; href: string; meta?: string }[]
}

const columns: FooterColumn[] = [
  {
    title: 'About',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Our Vision', href: '/vision' },
      { label: 'Our Team', href: '/about#our-team' },
      { label: 'What We Believe', href: '/about#what-we-believe' },
      { label: 'Health & Safety', href: '/hs' },
    ],
  },
  {
    title: 'Next Steps',
    links: [
      { label: 'Explaining Christianity', href: '/explaining-christianity' },
      { label: 'Newish Connect', href: '/newish' },
      { label: 'Connect Groups', href: '/connect-groups' },
      { label: 'Kids', href: '/kids' },
      { label: 'Youth', href: '/youth' },
    ],
  },
  {
    title: 'Sections',
    links: [
      { label: 'Church Online', href: 'https://live.ev.church' },
      { label: 'Resources', href: 'https://resources.aucklandev.co.nz' },
      { label: 'Contact', href: '/contact' },
      { label: 'Give', href: 'https://give.ev.church' },
    ],
  },
  {
    title: 'Campuses',
    links: [
      { label: 'North', href: '/campus/north', meta: 'Sunday 10:15am' },
      { label: 'Central', href: '/campus/central', meta: 'Sunday 10:15am' },
      { label: 'Unichurch', href: '/campus/unichurch', meta: 'Sunday 5:15pm' },
    ],
  },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/ev.church',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ev.church',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@ev.church',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith('http')
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-mid-grey transition-colors hover:text-rich-red"
      >
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className="text-sm text-mid-grey transition-colors hover:text-rich-red">
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-cool-grey bg-warm-white">
      <div className="mx-auto max-w-[80rem] px-4 py-12 lg:px-8">
        {/* Link columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-black">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href}>
                      {link.label}
                      {link.meta && (
                        <span className="ml-2 text-xs text-warm-grey">
                          {link.meta}
                        </span>
                      )}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social + bottom row */}
        <div className="mt-12 flex flex-col items-center gap-6 border-t border-cool-grey pt-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mid-grey transition-colors hover:text-rich-red"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 text-xs text-mid-grey sm:flex-row sm:gap-4">
            <Link href="/privacy" className="hover:text-rich-red">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline">&middot;</span>
            <span>&copy; {new Date().getFullYear()} Ev Church</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
