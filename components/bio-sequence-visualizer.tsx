'use client'

import { Textarea } from '@/components/ui/textarea'

interface BioSequenceVisualizerProps {
  sequence: string
  onChange: (value: string) => void
}

export function BioSequenceVisualizer({ sequence, onChange }: BioSequenceVisualizerProps) {
  return (
    <Textarea
      placeholder="Enter a sequence to visualize..."
      value={sequence}
      onChange={(e) => onChange(e.target.value)}
      className="font-mono"
    />
  )
}