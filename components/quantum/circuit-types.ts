export type GateType = 'H' | 'X' | 'Y' | 'Z' | 'CNOT'

export interface QuantumGate {
  type: GateType
  position: number
  control?: number // For controlled operations like CNOT
}

export interface CircuitState {
  gates: QuantumGate[]
  qubits: number
}