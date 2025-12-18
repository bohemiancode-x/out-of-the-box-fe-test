'use client'

interface ScrollIndicatorProps {
  total: number
  current: number
}

export function ScrollIndicator({ total, current }: ScrollIndicatorProps) {
  return (
    <div className="flex gap-2 items-center">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`
            h-2 w-2 rounded-full transition-all duration-300
            ${
              index === current
                ? 'bg-primary scale-125 shadow-[0_0_8px_var(--color-primary)]'
                : index < current
                ? 'bg-primary/50'
                : 'bg-white/20'
            }
          `}
        />
      ))}
    </div>
  )
}
