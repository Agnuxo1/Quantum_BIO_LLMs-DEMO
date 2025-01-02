'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { QuantumCircuit } from '@/components/quantum-circuit'
import { BioSequenceVisualizer } from '@/components/bio-sequence-visualizer'
import { ModelOutput } from '@/components/model-output'
import { SequenceStats } from '@/components/bio/sequence-stats'
import { SequenceProcessor } from '@/components/bio/sequence-processor'
import { bioSamples } from '@/lib/bio-samples'

export default function BioDemo() {
  const [sequence, setSequence] = useState('')
  const [qubits, setQubits] = useState(4)
  const [visualSequence, setVisualSequence] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [processedSequence, setProcessedSequence] = useState('')

  const handleProcessSequence = () => {
    setIsProcessing(true)
    setTimeout(() => {
      const result = SequenceProcessor.processSequence(sequence)
      setProcessedSequence(result)
      setVisualSequence(result)
      setIsProcessing(false)
    }, 1500)
  }

  const handleSequenceChange = (value: string) => {
    setSequence(value.toUpperCase())
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Quantum BIO LLMs Demo</CardTitle>
          <CardDescription>
            Explore the intersection of quantum computing and biological sequence analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Input Parameters */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Input Parameters</h3>
                <p className="text-sm text-muted-foreground">
                  Configure your quantum-biological analysis
                </p>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Biological Sequence</label>
                  <Input
                    placeholder="Enter DNA/RNA sequence..."
                    value={sequence}
                    onChange={(e) => handleSequenceChange(e.target.value)}
                  />
                  <div className="flex gap-2 mt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleSequenceChange(bioSamples.dna.sequence)}
                    >
                      Load DNA Sample
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleSequenceChange(bioSamples.rna.sequence)}
                    >
                      Load RNA Sample
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Try our sample sequences or enter your own DNA/RNA sequence using A, T, C, G (for DNA) or A, U, C, G (for RNA)
                  </p>
                  {sequence && <SequenceStats sequence={sequence} />}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Number of Qubits</label>
                  <Slider
                    value={[qubits]}
                    onValueChange={([value]) => setQubits(value)}
                    min={2}
                    max={8}
                    step={1}
                  />
                  <span className="text-sm text-muted-foreground">
                    Current: {qubits} qubits
                  </span>
                </div>
                <Button 
                  onClick={handleProcessSequence}
                  disabled={!sequence || isProcessing}
                >
                  Process Sequence
                </Button>
              </div>

              {/* Bio Sequence Visualization */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Bio Sequence Visualization</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive biological sequence display
                </p>
                <BioSequenceVisualizer 
                  sequence={visualSequence}
                  onChange={setVisualSequence}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Quantum Circuit */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Quantum Circuit</h3>
                <p className="text-sm text-muted-foreground">
                  Visual representation of quantum operations
                </p>
                <QuantumCircuit 
                  qubits={qubits}
                  sequence={sequence} 
                />
              </div>

              {/* Model Output */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Model Output</h3>
                <p className="text-sm text-muted-foreground">
                  Quantum-processed sequence results
                </p>
                <ModelOutput 
                  isProcessing={isProcessing} 
                  result={processedSequence}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}