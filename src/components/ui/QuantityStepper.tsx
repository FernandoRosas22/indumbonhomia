import { Minus, Plus } from 'lucide-react'

interface QuantityStepperProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
  size?: 'sm' | 'md'
}

export default function QuantityStepper({
  quantity,
  onIncrease,
  onDecrease,
  size = 'md',
}: QuantityStepperProps) {
  const iconSize = size === 'sm' ? 12 : 14
  const pad = size === 'sm' ? 'p-1.5' : 'p-2'

  return (
    <div className="flex items-center border border-line">
      <button
        type="button"
        onClick={onDecrease}
        className={`${pad} text-ink transition-colors hover:bg-porcelain disabled:opacity-30`}
        disabled={quantity <= 1}
        aria-label="Restar cantidad"
      >
        <Minus size={iconSize} />
      </button>
      <span className="w-8 text-center text-sm text-ink">{quantity}</span>
      <button
        type="button"
        onClick={onIncrease}
        className={`${pad} text-ink transition-colors hover:bg-porcelain`}
        aria-label="Sumar cantidad"
      >
        <Plus size={iconSize} />
      </button>
    </div>
  )
}
