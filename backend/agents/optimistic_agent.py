from crewai import Agent, LLM
from dotenv import load_dotenv
import os

load_dotenv()

llm = LLM(
    model="groq/llama-3.3-70b-versatile",
    api_key=os.getenv("GROQ_API_KEY")
)

optimistic_agent = Agent(
    role="Growth Governance Advisor",
    goal="Evaluate DAO growth opportunities and strategic investments.",
    backstory="""
    You are an optimistic governance strategist focused
    on DAO ecosystem growth, partnerships,
    and innovation opportunities.
    """,
    verbose=True,
    allow_delegation=False,
    llm=llm
)