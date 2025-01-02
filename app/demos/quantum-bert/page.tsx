'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChatInterface } from './components/chat-interface'
import { NetworkVisualizer } from './components/network-visualizer'
import { useQuantumBert } from './hooks/use-quantum-bert'

export default function QuantumBertDemo() {
  const {
    messages,
    networkState,
    isProcessing,
    sendMessage,
    visualizeNetwork
  } = useQuantumBert()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Quantum BERT Integration</CardTitle>
          <CardDescription>
            Interactive quantum-enhanced BERT model with network visualization
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <ChatInterface
              messages={messages}
              onSendMessage={sendMessage}
              isProcessing={isProcessing}
            />
            <NetworkVisualizer
              networkState={networkState}
              onVisualize={visualizeNetwork}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}