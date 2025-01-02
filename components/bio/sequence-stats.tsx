'use client'

interface SequenceStatsProps {
  sequence: string
}

export function SequenceStats({ sequence }: SequenceStatsProps) {
  if (!sequence) return null

  const stats = {
    length: sequence.length,
    gc: (sequence.match(/[GC]/gi)?.length || 0) / sequence.length * 100,
    bases: {
      A: (sequence.match(/A/gi)?.length || 0),
      T: (sequence.match(/T/gi)?.length || 0),
      U: (sequence.match(/U/gi)?.length || 0),
      C: (sequence.match(/C/gi)?.length || 0),
      G: (sequence.match(/G/gi)?.length || 0)
    }
  }

  return (
    <div className="space-y-2 text-sm">
      <div>Length: {stats.length} bases</div>
      <div>GC Content: {stats.gc.toFixed(1)}%</div>
      <div className="flex gap-4">
        {Object.entries(stats.bases)
          .filter(([_, count]) => count > 0)
          .map(([base, count]) => (
            <div key={base}>
              {base}: {count}
            </div>
          ))}
      </div>
    </div>
  )
}