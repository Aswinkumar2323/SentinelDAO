export interface AnalysisResponse {
  summary: string
  risk_score: number
  risk_level: string
  compliance_warnings: string[]
  recommendation: string
  confidence: number
  reasoning_feed: string[]
  debate: {
    conservative: string
    optimistic: string
  }
}
