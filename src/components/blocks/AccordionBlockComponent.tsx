'use client'

import { useState, useCallback } from 'react'

/** Extract plain text from Lexical rich text JSON */
function extractText(data: unknown): string {
  if (!data || typeof data !== 'object') return ''
  const root = (data as { root?: { children?: unknown[] } }).root
  if (!root?.children) return ''

  function getText(node: unknown): string {
    if (!node || typeof node !== 'object') return ''
    const n = node as { type?: string; text?: string; children?: unknown[] }
    if (n.type === 'text' && n.text) return n.text
    if (n.children) return n.children.map(getText).join('')
    return ''
  }

  return root.children.map(getText).join(' ')
}

interface AccordionItem {
  question: string
  answer: unknown // Lexical rich text state
  id?: string
}

interface AccordionBlockProps {
  heading?: string | null
  items: AccordionItem[]
  allowMultiple?: boolean | null
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-warm-grey">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-rich-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rich-red focus-visible:ring-offset-2"
      >
        <span className="text-lg font-semibold text-brand-black">{item.question}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-mid-grey transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* CSS grid-rows trick for smooth expand/collapse */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="pb-6 pr-12 text-dark-grey leading-[var(--leading-body)]">
            {typeof item.answer === 'string' ? (
              <p>{item.answer}</p>
            ) : (
              <div className="text-[0.9375rem] leading-relaxed text-dark-grey">
                {extractText(item.answer)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function AccordionBlockComponent({
  heading,
  items,
  allowMultiple = false,
}: AccordionBlockProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggle = useCallback(
    (index: number) => {
      setOpenItems((prev) => {
        const next = new Set(allowMultiple ? prev : [])
        if (prev.has(index)) {
          next.delete(index)
        } else {
          next.add(index)
        }
        return next
      })
    },
    [allowMultiple],
  )

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
        {heading && (
          <h2 className="mb-10 text-center font-serif text-[length:var(--text-h2)] leading-[var(--leading-heading)] text-brand-black">
            {heading}
          </h2>
        )}

        <div className="border-t border-warm-grey">
          {items.map((item, index) => (
            <AccordionRow
              key={item.id ?? index}
              item={item}
              isOpen={openItems.has(index)}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
