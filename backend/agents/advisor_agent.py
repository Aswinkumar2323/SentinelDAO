from crewai import Agent, LLM
from dotenv import load_dotenv
import os

load_dotenv()

llm = LLM(
    model="groq/llama-3.3-70b-versatile",
    api_key=os.getenv("GROQ_API_KEY")
)

advisor_agent = Agent(
    role="Governance Voting Advisor",
    goal="Provide final voting recommendations for DAO proposals.",
    backstory="""
    You are a senior DAO governance advisor who evaluates
    governance proposals and provides approve/reject recommendations
    with strong reasoning.
    """,
    verbose=True,
    allow_delegation=False,
    llm=llm
)