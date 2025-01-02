import { useState, useCallback, useRef, useEffect } from 'react'

interface GraphData {
  nodes: Array<{ id: string; val: number }>
  links: Array<{ source: string; target: string; value: number }>
}

export function useNeuralGraph(initialNeurons: number = 50) {
  const [neurons, setNeurons] = useState(initialNeurons)
  const [activity, setActivity] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [graphData, setGraphData] = useState<GraphData>({ nodes: [], links: [] })
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const generateGraph = useCallback(() => {
    const nodes = Array.from({ length: neurons }, (_, i) => ({
      id: `node${i}`,
      val: Math.random() * 10
    }))

    const links = []
    for (let i = 0; i < neurons; i++) {
      const numLinks = Math.floor(Math.random() * 3) + 1
      for (let j = 0; j < numLinks; j++) {
        const target = Math.floor(Math.random() * neurons)
        if (target !== i) {
          links.push({
            source: `node${i}`,
            target: `node${target}`,
            value: Math.random()
          })
        }
      }
    }

    setGraphData({ nodes, links })
  }, [neurons])

  useEffect(() => {
    generateGraph()
  }, [neurons, generateGraph])

  const startSimulation = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true)
      intervalRef.current = setInterval(() => {
        setActivity(prev => (prev + Math.random() * 10) % 100)
        generateGraph()
      }, 1000)
    }
  }, [isRunning, generateGraph])

  const stopSimulation = useCallback(() => {
    if (isRunning) {
      setIsRunning(false)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning])

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return {
    neurons,
    setNeurons,
    activity,
    isRunning,
    graphData,
    startSimulation,
    stopSimulation,
    generateGraph
  }
}