from crewai import Agent, LLM
from dotenv import load_dotenv
import os

load_dotenv()

llm = LLM(
    model="groq/llama-3.3-70b-versatile",
    api_key=os.getenv("GROQ_API_KEY")
)

risk_agent = Agent(
    role="Treasury Risk Analyst",
    goal="Detect treasury risks and suspicious governance activities.",
    backstory="""
    You are an AI treasury security expert specializing
    in detecting suspicious DAO proposals, treasury drain attacks,
    abnormal fund transfers, and governance exploits.
    """,
    verbose=True,
    allow_delegation=False,
    llm=llm
)