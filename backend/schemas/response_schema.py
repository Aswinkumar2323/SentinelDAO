from pydantic import BaseModel
from typing import List, Dict


class AnalysisResponse(BaseModel):
    summary: str
    risk_score: int
    risk_level: str
    compliance_warnings: List[str]
    recommendation: str
    confidence: int
    reasoning_feed: List[str]
    debate: Dict[str, str]