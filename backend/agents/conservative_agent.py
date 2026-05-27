from crewai import Agent, LLM
from dotenv import load_dotenv
import os

load_dotenv()

llm = LLM(
    model="groq/llama-3.3-70b-versatile",
    api_key=os.getenv("GROQ_API_KEY")
)

conservative_agent = Agent(
    role="Conservative Governance Protector",
    goal="Protect DAO treasury and governance security.",
    backstory="""
    You are a highly cautious governance security analyst.
    Your priority is preventing treasury exploits,
    governance attacks, and suspicious proposals.
    """,
    verbose=True,
    allow_delegation=False,
    llm=llm
)