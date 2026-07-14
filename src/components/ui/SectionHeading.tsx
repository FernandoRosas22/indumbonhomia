interface SectionHeadingProps {
  eyebrow?: string
  title: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow mb-4 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-6 bg-stone-light" />
          {eyebrow}
          {align === 'center' && <span className="h-px w-6 bg-stone-light" />}
        </p>
      )}
      <h2 className="text-[2rem] leading-[1.08] text-ink sm:text-4xl md:text-[3rem]">{title}</h2>
    </div>
  )
}
