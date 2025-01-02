'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { WordGraph } from './components/word-graph'
import { ColorVisualizer } from './components/color-visualizer'
import { DocumentInput } from './components/document-input'
import { useRAGMemory } from './hooks/use-rag-memory'

export default function QuantumRAGDemo() {
  const {
    nodes,
    addDocument,
    retrieveResponse,
    colorResponse
  } = useRAGMemory()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Quantum RAG Memory System</CardTitle>
          <CardDescription>
            Explore the quantum-enhanced retrieval-augmented generation memory
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <DocumentInput onSubmit={addDocument} />
              <WordGraph nodes={nodes} />
            </div>
            <ColorVisualizer
              response={colorResponse}
              onQuery={retrieveResponse}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}