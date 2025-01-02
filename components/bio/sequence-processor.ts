export class SequenceProcessor {
  static validateSequence(sequence: string, type: 'dna' | 'rna'): boolean {
    const dnaPattern = /^[ATCG]+$/i
    const rnaPattern = /^[AUCG]+$/i
    return type === 'dna' ? dnaPattern.test(sequence) : rnaPattern.test(sequence)
  }

  static getSequenceType(sequence: string): 'dna' | 'rna' | null {
    if (this.validateSequence(sequence, 'dna')) return 'dna'
    if (this.validateSequence(sequence, 'rna')) return 'rna'
    return null
  }

  static processSequence(sequence: string): string {
    const type = this.getSequenceType(sequence)
    if (!type) return ''
    
    // Simple complementary sequence generation
    const complementMap: Record<string, string> = {
      'A': type === 'dna' ? 'T' : 'U',
      'T': 'A',
      'U': 'A',
      'C': 'G',
      'G': 'C'
    }
    
    return sequence
      .toUpperCase()
      .split('')
      .map(base => complementMap[base] || base)
      .join('')
  }
}