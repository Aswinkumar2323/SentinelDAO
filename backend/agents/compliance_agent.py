from crewai import Agent, LLM
from dotenv import load_dotenv
import os

load_dotenv()

llm = LLM(
    model="groq/llama-3.3-70b-versatile",
    api_key=os.getenv("GROQ_API_KEY")
)

compliance_agent = Agent(
    role="DAO Compliance Officer",
    goal="Identify legal, regulatory, and compliance concerns in DAO proposals.",
    backstory="""
    You are an AI compliance officer trained in detecting
    suspicious governance language, regulatory concerns,
    sanction risks, and unusual financial behavior.
    """,
    verbose=True,
    allow_delegation=False,
    llm=llm
)