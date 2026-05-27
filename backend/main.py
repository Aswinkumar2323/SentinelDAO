from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import crewai.llms.cache as _crewai_cache
# Monkey-patch to prevent injection of cache_breakpoint for Groq/LiteLLM compatibility
_crewai_cache.mark_cache_breakpoint = lambda msg: msg

from services.proposal_service import analyze_proposal_workflow

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ProposalRequest(BaseModel):
    proposal: str


@app.get("/")
def home():
    return {
        "message": "GovGuardian AI Running"
    }


@app.post("/analyze")
def analyze_proposal(request: ProposalRequest):

    result = analyze_proposal_workflow(request.proposal)

    return result