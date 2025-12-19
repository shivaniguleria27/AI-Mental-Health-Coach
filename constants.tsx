
import React from 'react';
import { FaqItem } from './types';

export const PYTHON_FOLDER_STRUCTURE = `
ai_mental_coach/
├── .env                # API Key storage
├── .gitignore          # Ignore .env and venv
├── requirements.txt    # Library dependencies
├── config.py           # Configuration & Env loading
├── prompts.py          # System instructions & templates
├── ai_logic.py         # Gemini API interaction class
└── main.py             # Entry point / User interaction CLI
`;

export const REQUIREMENTS_TXT = `
google-generativeai
python-dotenv
`;

export const INTERVIEW_QUESTIONS: FaqItem[] = [
  {
    question: "Why did you build this project?",
    answer: "I wanted to explore how LLMs can be applied responsibly in high-stakes fields like mental health. The goal was to create a supportive tool that assists with daily stress while strictly maintaining ethical boundaries by avoiding medical diagnostic claims."
  },
  {
    question: "How does Generative AI work in this application?",
    answer: "It uses a Large Language Model (Gemini) with a carefully engineered system prompt. This 'persona' enforces empathy, active listening, and redirection to professionals when medical advice is sought. It processes user natural language and maps it to supportive wellness responses."
  },
  {
    question: "How did you handle ethical concerns?",
    answer: "I implemented three layers: 1) A clear upfront legal disclaimer. 2) System prompt instructions that explicitly forbid medical diagnosis. 3) Safety filtering built into the AI SDK to block harmful or self-harm content."
  },
  {
    question: "How would you prevent misuse of AI in mental health contexts?",
    answer: "Beyond disclaimers, I would implement 'Keyword Triggers' to detect self-harm or severe crises and immediately surface emergency hotline numbers, bypassing the AI entirely for those cases. Continuous monitoring and a human-in-the-loop for flagged conversations would be the next step."
  }
];

export const SYSTEM_PROMPT_PREVIEW = `
Role: You are an AI Mental Coach.
Tone: Supportive, empathetic, non-judgmental, calm.
Goal: Help with stress, daily planning, and motivation.
Safety: DO NOT provide medical diagnoses or prescribe treatment.
If a user mentions suicide or severe depression, provide emergency resources.
`;
