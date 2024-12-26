export interface VisaCategory {
  category: string;
  criteria: Criteria[];
}

export interface Criteria {
  name: string;
  options?: { label: string; points: number }[];
  description?: string;
  notes?: string[];
}
