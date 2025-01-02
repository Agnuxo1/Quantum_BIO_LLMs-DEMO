'use client'

import { Loader2 } from 'lucide-react'

interface ModelOutputProps {
  isProcessing: boolean
  result?: string
}

export function ModelOutput({ isProcessing, result }: ModelOutputProps) {
  return (
    <div className="border rounded-lg p-4 bg-muted/50 h-[200px] overflow-auto">
      {isProcessing ? (
        <div className="h-full flex items-center justify-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Processing...
          </div>
        </div>
      ) : result ? (
        <div className="font-mono text-sm">
          {result}
        </div>
      ) : (
        <div className="h-full flex items-center justify-center text-sm text-muted-foreground">
          Process a sequence to see results
        </div>
      )}
    </div>
  )
}