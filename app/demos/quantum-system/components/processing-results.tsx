import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ProcessingResults {
  quantumCoherence: number
  neuralOutputShape: number[]
  memoryPatterns: number
  reconstructionQuality: number
}

export function ProcessingResults({ results }: { results: ProcessingResults }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Processing Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <div className="text-sm font-medium">Quantum Coherence</div>
            <div className="text-2xl">{results.quantumCoherence.toFixed(4)}</div>
          </div>
          
          <div className="space-y-1">
            <div className="text-sm font-medium">Neural Output Shape</div>
            <div className="text-2xl">{results.neuralOutputShape.join(' × ')}</div>
          </div>
          
          <div className="space-y-1">
            <div className="text-sm font-medium">Memory Patterns</div>
            <div className="text-2xl">{results.memoryPatterns}</div>
          </div>
          
          <div className="space-y-1">
            <div className="text-sm font-medium">Reconstruction Quality</div>
            <div className="text-2xl">{results.reconstructionQuality.toFixed(4)}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}