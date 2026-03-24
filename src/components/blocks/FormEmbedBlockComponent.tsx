import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ContactForm } from '@/components/forms/ContactForm'
import { SignupForm } from '@/components/forms/SignupForm'

interface FormEmbedBlockProps {
  eyebrow?: string | null
  heading?: string | null
  description?: string | null
  formType: 'contact' | 'signup'
  formTitle?: string | null
  layout?: 'full' | 'centered' | null
}

export function FormEmbedBlockComponent({
  eyebrow,
  heading,
  description,
  formType,
  formTitle,
  layout = 'centered',
}: FormEmbedBlockProps) {
  const FormComponent =
    formType === 'contact' ? (
      <ContactForm />
    ) : (
      <SignupForm formTitle={formTitle ?? 'Sign Up'} />
    )

  return (
    <section className="bg-warm-white py-20 lg:py-28">
      <div className="mx-auto max-w-[80rem] px-5 lg:px-8">
        {/* Optional header */}
        {(eyebrow || heading || description) && (
          <ScrollReveal>
            <div className={`mb-12 ${layout === 'centered' ? 'text-center' : ''}`}>
              {eyebrow && (
                <p className="text-sm font-semibold uppercase tracking-widest text-rich-red">
                  {eyebrow}
                </p>
              )}
              {heading && (
                <h2 className="mt-4 font-serif text-[length:var(--text-h2)] leading-[var(--leading-heading)] text-brand-black">
                  {heading}
                </h2>
              )}
              {description && (
                <p
                  className={`mt-4 text-lg leading-relaxed text-dark-grey ${
                    layout === 'centered' ? 'mx-auto max-w-2xl' : 'max-w-2xl'
                  }`}
                >
                  {description}
                </p>
              )}
            </div>
          </ScrollReveal>
        )}

        {/* Form */}
        <ScrollReveal>
          {layout === 'centered' ? (
            <div className="mx-auto max-w-2xl rounded-xl border border-warm-grey/20 bg-white p-8 shadow-sm">
              {FormComponent}
            </div>
          ) : (
            <div>{FormComponent}</div>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
