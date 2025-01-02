'use client'

import { Gate } from './gate'
import { QuantumGate } from './circuit-types'

interface QubitLineProps {
  index: number
  gates: QuantumGate[]
  onRemoveGate?: (position: number) => void
}

export function QubitLine({ index, gates, onRemoveGate }: QubitLineProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium w-6">q{index}</span>
      <div className="flex-1 h-px bg-border relative">
        {gates.map((gate, pos) => (
          <div
            key={pos}
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: `${(pos + 1) * 48}px` }}
          >
            <Gate
              type={gate.type}
              onClick={() => onRemoveGate?.(pos)}
            />
            {gate.type === 'CNOT' && gate.control === index && (
              <div className="absolute left-1/2 h-8 w-px bg-primary" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}