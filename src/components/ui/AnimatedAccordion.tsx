'use client'

import { useState, useCallback } from 'react'

interface AccordionItemProps {
  question: string
  children: React.ReactNode
  isOpen: boolean
  onToggle: () => void
  hoverColor?: string
}

function AccordionItem({ question, children, isOpen, onToggle, hoverColor = 'hover:text-rich-red' }: AccordionItemProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between gap-4 px-8 py-6 text-left font-sans text-[1.0625rem] font-semibold text-brand-black transition-colors ${hoverColor} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rich-red focus-visible:ring-offset-2`}
      >
        {question}
        <svg
          className={`ml-4 h-5 w-5 shrink-0 text-mid-grey transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-8 pb-6 text-[0.9375rem] leading-relaxed text-mid-grey">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

interface AnimatedAccordionProps {
  items: { question: string; answer: string }[]
  /** Allow multiple items open at once */
  allowMultiple?: boolean
  /** Tailwind hover color class for the question button */
  hoverColor?: string
  /** Wrapper className for each item */
  itemClassName?: string
  /** Index of item to open by default */
  defaultOpen?: number
}

export function AnimatedAccordion({
  items,
  allowMultiple = false,
  hoverColor,
  itemClassName = 'rounded-xl border border-warm-grey/60 bg-warm-white',
  defaultOpen,
}: AnimatedAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(
    () => new Set(defaultOpen !== undefined ? [defaultOpen] : []),
  )

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
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={item.question} className={itemClassName}>
          <AccordionItem
            question={item.question}
            isOpen={openItems.has(i)}
            onToggle={() => toggle(i)}
            hoverColor={hoverColor}
          >
            {item.answer}
          </AccordionItem>
        </div>
      ))}
    </div>
  )
}
