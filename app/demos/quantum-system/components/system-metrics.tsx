import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface SystemMetricsProps {
  metrics: {
    quantumCircuitDepth: number
    neuralNetworkSize: number
    memoryUsage: number
  }
}

export function SystemMetrics({ metrics }: SystemMetricsProps) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">System Metrics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Quantum Circuit Depth</span>
              <span>{metrics.quantumCircuitDepth}</span>
            </div>
            <Progress value={metrics.quantumCircuitDepth} max={100} />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Neural Network Size</span>
              <span>{metrics.neuralNetworkSize} parameters</span>
            </div>
            <Progress value={metrics.neuralNetworkSize / 1000} />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Memory Usage</span>
              <span>{metrics.memoryUsage.toFixed(2)} MB</span>
            </div>
            <Progress value={metrics.memoryUsage} max={1000} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}