# 🛡️ SentinelDAO

**SentinelDAO** is an advanced AI-powered security auditing node designed to analyze, audit, and simulate governance proposals for Decentralized Autonomous Organizations (DAOs). By pairing a high-fidelity Next.js user interface with a multi-agent Python backend running CrewAI, SentinelDAO automatically detects treasury risks, compliance warnings, and simulates multi-perspective debates before proposals are executed.

---

## ✨ Features

- **🌐 Live Security Node Dashboard**: A premium dark-mode dashboard showcasing node status, latency diagnostics, and real-time scanning feedback.
- **🤖 Multi-Agent Consensus Engine**: Employs **CrewAI** to orchestrate six distinct AI agents:
  - **Summarizer**: Condenses long, complex proposal payloads into clear, actionable summaries.
  - **Risk Analyst**: Rates treasury and security risks on a 0-100 scale.
  - **Compliance Inspector**: Flags potential re-entrancy attacks, flash loan threats, and regulatory concerns.
  - **Conservative Agent**: Provides defense-focused objections and worst-case scenario forecasts.
  - **Optimistic Agent**: Details potential growth, benefits, and positive project outcomes.
  - **Governance Advisor**: Delivers the final veto/approve verdict with a confidence rating.
- **⚖️ Simulated Debates**: Evaluates the tension between conservative stability and optimistic growth, helping DAO voters see all sides.
- **⚡ Real-Time Diagnostics**: Visual feedback steps matching the inner reasoning flow of the security agents.

---

## 🏗️ Architecture

```
gov-guardian/
├── SentinelDAO/                # Next.js Frontend
│   ├── app/                    # Next.js App Router (Dashboard, Layouts)
│   ├── components/             # Reusable UI Components (Cards, Forms, Meters)
│   ├── lib/                    # API client configurations (Axios)
│   └── types/                  # TypeScript interface definitions
│
└── backend/                    # Python FastAPI Backend
    ├── agents/                 # CrewAI Agent definitions
    ├── services/               # Proposal analysis workflow orchestration
    └── main.py                 # FastAPI Web Server entrypoint
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18.x or later)
- **Python** (v3.10 or later)
- **Groq API Key** (or another CrewAI-compatible LLM provider key)

---

### 2. Backend Setup
1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a Python virtual environment:
   ```bash
   python -m venv .venv
   # Windows:
   .venv\Scripts\activate
   # macOS/Linux:
   source .venv/bin/activate
   ```
3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Create a `.env` file in the `backend/` directory and add your Groq API Key:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```
5. Start the FastAPI server using Uvicorn:
   ```bash
   uvicorn main:app --reload
   ```
   The backend will be running at `http://127.0.0.1:8000`.

---

### 3. Frontend Setup
1. Open a separate terminal and navigate to the frontend directory:
   ```bash
   cd SentinelDAO
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Run the Next.js development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/) (App Router, Tailwind CSS v4, TypeScript)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid state transitions and visual premium experience
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend
- **Framework**: [FastAPI](https://fastapi.tiangolo.com/) (Asynchronous python server)
- **AI Orchestration**: [CrewAI](https://www.crewai.com/)
- **LLM Provider**: [LangChain Groq](https://github.com/langchain-ai/langchain) for ultra-fast, high-throughput model reasoning
