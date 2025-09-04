# AI Blog Generator

A simple full-stack application where users can input a prompt, and the system generates a ~1000 word blog using Cohere's free AI API.

---

## Tech Stack
- Frontend: React -Vite + TailwindCSS
- Backend: Node.js + Express
- LLM: Cohere API (free tier)



---

## Setup to run on your system

### 1. Clone project and install backend and frontend packages
```bash
git clone https://github.com/Melaonn/AI-Blog.git
cd AI-Blog


cd backend
cp .env.example .env   # copy example env and get ur api from cohere webpage
npm install
npm start


cd ../frontend
cp .env.example .env   # copy example env
npm install
npm run dev


