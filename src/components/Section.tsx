import { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  className?: string
}

function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`px-8 py-12 max-w-4xl mx-auto text-left ${className}`.trim()}>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  )
}

export default Section
