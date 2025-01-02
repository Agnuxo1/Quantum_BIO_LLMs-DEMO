'use client'

import { GateType } from './circuit-types'

interface GateProps {
  type: GateType
  onClick?: () => void
}

export function Gate({ type, onClick }: GateProps) {
  return (
    <div
      className="w-8 h-8 border-2 border-primary rounded flex items-center justify-center cursor-pointer hover:bg-primary/10"
      onClick={onClick}
    >
      <span className="font-bold text-sm">{type}</span>
    </div>
  )
}