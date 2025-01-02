'use client'

import { useState, useEffect } from 'react'
import { GateControls } from './quantum/gate-controls'
import { QubitLine } from './quantum/qubit-line'
import { CircuitState, GateType, QuantumGate } from './quantum/circuit-types'
import { QuantumBioGenerator } from '@/lib/quantum-bio-generator'

interface QuantumCircuitProps {
  qubits: number
  sequence?: string
}

export function QuantumCircuit({ qubits, sequence }: QuantumCircuitProps) {
  const [circuit, setCircuit] = useState<CircuitState>({
    gates: [],
    qubits
  })

  useEffect(() => {
    if (sequence) {
      const generatedGates = QuantumBioGenerator.generateCircuit(sequence, qubits)
      setCircuit({ gates: generatedGates, qubits })
    }
  }, [sequence, qubits])

  const handleAddGate = (type: GateType) => {
    setCircuit(prev => ({
      ...prev,
      gates: [...prev.gates, { type, position: prev.gates.length }]
    }))
  }

  const handleRemoveGate = (position: number) => {
    setCircuit(prev => ({
      ...prev,
      gates: prev.gates.filter((_, i) => i !== position)
    }))
  }

  const complexity = QuantumBioGenerator.analyzeCircuitComplexity(circuit.gates)

  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-4 bg-muted/50 space-y-4">
        <GateControls onAddGate={handleAddGate} />
        
        <div className="space-y-4">
          {Array.from({ length: qubits }).map((_, i) => (
            <QubitLine
              key={i}
              index={i}
              gates={circuit.gates.filter(g => 
                g.position === i || g.control === i
              )}
              onRemoveGate={handleRemoveGate}
            />
          ))}
        </div>
      </div>

      <div className="text-sm space-y-1 text-muted-foreground">
        <div>Circuit Complexity:</div>
        <div>Total Gates: {complexity.totalGates}</div>
        <div>Circuit Depth: {complexity.depth}</div>
        <div className="flex gap-2">
          {Object.entries(complexity.gateTypes).map(([type, count]) => (
            <span key={type}>{type}: {count}</span>
          ))}
        </div>
      </div>
    </div>
  )
}