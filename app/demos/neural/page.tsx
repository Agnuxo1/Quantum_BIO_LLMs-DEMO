'use client'

import React, { useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ForceGraph } from './components/force-graph'
import { NeuralControls } from './components/neural-controls'
import { useNeuralGraph } from './hooks/useNeuralGraph'
import { ForceGraphMethods } from 'react-force-graph-2d'

export default function NeuralDemo() {
  const graphRef = useRef<ForceGraphMethods>(null)
  const {
    neurons,
    setNeurons,
    activity,
    isRunning,
    graphData,
    startSimulation,
    stopSimulation,
    generateGraph
  } = useNeuralGraph()

  const handleReset = () => {
    stopSimulation()
    generateGraph()
    if (graphRef.current) {
      graphRef.current.centerAt(0, 0, 1000)
      graphRef.current.zoom(1, 1000)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Neural Architecture Simulation</CardTitle>
          <CardDescription>
            Visualize the bioinspired neural network in action
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <NeuralControls
            neurons={neurons}
            activity={activity}
            isRunning={isRunning}
            onNeuronsChange={setNeurons}
            onStartStop={isRunning ? stopSimulation : startSimulation}
            onReset={handleReset}
          />

          <div className="h-[400px] w-full border rounded overflow-hidden">
            <ForceGraph
              ref={graphRef}
              graphData={graphData}
              nodeRelSize={6}
              linkWidth={1}
              linkDirectionalParticles={2}
              linkDirectionalParticleSpeed={0.01}
              cooldownTicks={100}
              onEngineStop={() => {}}
              width={1200}
              height={400}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}