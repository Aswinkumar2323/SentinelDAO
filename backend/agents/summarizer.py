from crewai import Agent, LLM
from dotenv import load_dotenv
import os

load_dotenv()

llm = LLM(
    model="groq/llama-3.3-70b-versatile",
    api_key=os.getenv("GROQ_API_KEY")
)

summarizer_agent = Agent(
    role="DAO Proposal Summarizer",
    goal="Summarize DAO governance proposals in simple language.",
    backstory="""
    You are an expert governance analyst who simplifies
    complex DAO proposals for ordinary community members.
    """,
    verbose=True,
    allow_delegation=False,
    llm=llm
)