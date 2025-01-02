import React from 'react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Progress } from '@/components/ui/progress'
import { Play, Pause, RotateCcw } from 'lucide-react'

interface NeuralControlsProps {
  neurons: number
  activity: number
  isRunning: boolean
  onNeuronsChange: (value: number) => void
  onStartStop: () => void
  onReset: () => void
}

export function NeuralControls({
  neurons,
  activity,
  isRunning,
  onNeuronsChange,
  onStartStop,
  onReset
}: NeuralControlsProps) {
  return (
    <>
      <div className="space-y-2">
        <label className="text-sm font-medium">Number of Neurons</label>
        <Slider
          value={[neurons]}
          onValueChange={([value]) => onNeuronsChange(value)}
          min={10}
          max={5000}
          step={10}
        />
        <span className="text-sm text-muted-foreground">
          Current: {neurons} neurons
        </span>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Neural Activity</label>
        <Progress value={activity} />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>0%</span>
          <span>{activity.toFixed(1)}%</span>
          <span>100%</span>
        </div>
      </div>

      <div className="flex gap-4">
        <Button onClick={onStartStop}>
          {isRunning ? (
            <>
              <Pause className="mr-2 h-4 w-4" />
              Pause
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              Start
            </>
          )}
        </Button>
        <Button variant="outline" onClick={onReset}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </>
  )
}