import { Button } from '@/components/ui/Button'

interface CTAButton {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
  id?: string
}

type ColorPreset = 'primary-red' | 'light' | 'dark'

interface CTABlockProps {
  heading: string
  text?: string | null
  buttons?: CTAButton[] | null
  colorPreset?: ColorPreset | null
}

const presetStyles: Record<ColorPreset, { section: string; heading: string; body: string; overlay: boolean }> = {
  'primary-red': {
    section: 'bg-rich-red',
    heading: 'text-white',
    body: 'text-white/90',
    overlay: true,
  },
  light: {
    section: 'bg-warm-white',
    heading: 'text-brand-black',
    body: 'text-dark-grey',
    overlay: false,
  },
  dark: {
    section: 'bg-brand-black',
    heading: 'text-white',
    body: 'text-warm-white/80',
    overlay: true,
  },
}

/** Map button variants so they remain legible against each color preset */
function resolveButtonVariant(
  declared: 'primary' | 'secondary' | undefined,
  preset: ColorPreset,
): 'primary' | 'secondary' | 'text' {
  if (preset === 'primary-red') {
    return declared === 'secondary' ? 'secondary' : 'text'
  }
  return declared ?? 'primary'
}

export function CTABlockComponent({
  heading,
  text,
  buttons,
  colorPreset = 'primary-red',
}: CTABlockProps) {
  const preset = colorPreset ?? 'primary-red'
  const styles = presetStyles[preset]

  return (
    <section className={`relative overflow-hidden ${styles.section}`}>
      {/* Texture overlay for colored backgrounds */}
      {styles.overlay && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h40v40H0z\' fill=\'none\'/%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\' fill=\'white\'/%3E%3C/svg%3E")',
          }}
        />
      )}

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 lg:py-28">
        <h2
          className={`font-serif text-[length:var(--text-h2)] leading-[var(--leading-heading)] ${styles.heading}`}
        >
          {heading}
        </h2>

        {text && (
          <p className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed ${styles.body}`}>
            {text}
          </p>
        )}

        {buttons && buttons.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {buttons.map((btn) => {
              const variant = resolveButtonVariant(btn.variant, preset)
              const buttonClasses =
                preset === 'primary-red' && variant !== 'secondary'
                  ? 'bg-white text-rich-red hover:bg-warm-white'
                  : preset === 'dark' && variant === 'secondary'
                    ? 'border-white text-white hover:bg-white hover:text-brand-black'
                    : undefined

              return (
                <Button
                  key={btn.id ?? btn.href}
                  href={btn.href}
                  variant={variant}
                  size="large"
                  className={buttonClasses}
                >
                  {btn.label}
                </Button>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
