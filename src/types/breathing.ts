
export interface BreathingStep {
  phase: 'inhale' | 'exhale' | 'hold';
  duration: number;
  instruction: string;
}

export interface BreathingTechnique {
  id: string;
  name: string;
  description: string;
  steps: BreathingStep[];
  benefits: string;
}
