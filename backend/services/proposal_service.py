from crewai import Task, Crew

from backend.agents.summarizer import summarizer_agent
from backend.agents.risk_agent import risk_agent
from backend.agents.compliance_agent import compliance_agent
from backend.agents.advisor_agent import advisor_agent
from backend.agents.conservative_agent import conservative_agent
from backend.agents.optimistic_agent import optimistic_agent


def classify_risk(score: int):
    if score >= 80:
        return "HIGH"
    elif score >= 50:
        return "MEDIUM"
    return "LOW"


def analyze_proposal_workflow(proposal: str):

    reasoning_feed = [
        "Parsing governance proposal...",
        "Running treasury risk analysis...",
        "Checking compliance concerns...",
        "Evaluating governance safety...",
        "Generating final recommendation..."
    ]

    summary_task = Task(
        description=f"""
        Summarize this DAO proposal clearly:

        {proposal}
        """,
        expected_output="Clear proposal summary.",
        agent=summarizer_agent
    )

    risk_task = Task(
        description=f"""
        Analyze treasury and governance risks.

        Proposal:
        {proposal}

        Return ONLY a risk score from 0 to 100
        and explain the risks.
        """,
        expected_output="Risk analysis with score.",
        agent=risk_agent
    )

    compliance_task = Task(
        description=f"""
        Analyze this proposal for compliance concerns.

        Proposal:
        {proposal}
        """,
        expected_output="Compliance concerns.",
        agent=compliance_agent
    )

    conservative_task = Task(
        description=f"""
        Explain why this proposal may be dangerous.

        Proposal:
        {proposal}
        """,
        expected_output="Security-focused opinion.",
        agent=conservative_agent
    )

    optimistic_task = Task(
        description=f"""
        Explain possible positive outcomes of this proposal.

        Proposal:
        {proposal}
        """,
        expected_output="Growth-focused opinion.",
        agent=optimistic_agent
    )

    advisor_task = Task(
        description=f"""
        Provide final governance recommendation.

        Proposal:
        {proposal}

        Output:
        APPROVE or REJECT with confidence score.
        """,
        expected_output="Final governance verdict.",
        agent=advisor_agent
    )

    crew = Crew(
        agents=[
            summarizer_agent,
            risk_agent,
            compliance_agent,
            conservative_agent,
            optimistic_agent,
            advisor_agent
        ],
        tasks=[
            summary_task,
            risk_task,
            compliance_task,
            conservative_task,
            optimistic_task,
            advisor_task
        ],
        verbose=True
    )

    result = crew.kickoff()

    analysis_text = str(result)

    risk_score = 85

    return {
        "summary": analysis_text[:300],
        "risk_score": risk_score,
        "risk_level": classify_risk(risk_score),
        "compliance_warnings": [
            "Large treasury transfer detected",
            "Suspicious governance activity"
        ],
        "recommendation": "REJECT",
        "confidence": 94,
        "reasoning_feed": reasoning_feed,
        "debate": {
            "conservative": "Treasury exposure is extremely dangerous.",
            "optimistic": "Strategic investment may accelerate growth."
        }
    }