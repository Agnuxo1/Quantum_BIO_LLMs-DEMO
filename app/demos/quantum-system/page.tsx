'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SystemMetrics } from './components/system-metrics'
import { ProcessingResults } from './components/processing-results'
import { SystemControls } from './components/system-controls'
import { useQuantumSystem } from './hooks/use-quantum-system'

export default function QuantumSystemDemo() {
  const {
    metrics,
    results,
    isProcessing,
    processData,
    retrievePattern,
    saveCheckpoint
  } = useQuantumSystem()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Quantum Bio System Demo</CardTitle>
          <CardDescription>
            Explore quantum-biological system processing and pattern retrieval
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <SystemControls 
              onProcess={processData}
              onRetrieve={retrievePattern}
              onSave={saveCheckpoint}
              isProcessing={isProcessing}
            />
            <SystemMetrics metrics={metrics} />
          </div>
          <ProcessingResults results={results} />
        </CardContent>
      </Card>
    </div>
  )
}