'use client'

import { Button } from '@/components/ui/button'
import { Gate } from './gate'
import { GateType } from './circuit-types'

interface GateControlsProps {
  onAddGate: (type: GateType) => void
}

export function GateControls({ onAddGate }: GateControlsProps) {
  const gates: GateType[] = ['H', 'X', 'Y', 'Z', 'CNOT']

  return (
    <div className="flex gap-2 p-2 border rounded bg-background">
      {gates.map(gate => (
        <Gate key={gate} type={gate} onClick={() => onAddGate(gate)} />
      ))}
    </div>
  )
}