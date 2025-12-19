
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `
You are a world-class AI Mental Coach. Your primary purpose is to help users manage stress, anxiety, and daily motivation through non-judgmental, supportive conversation.

OPERATING GUIDELINES:
1. NEVER provide medical diagnoses, clinical advice, or prescribe medications.
2. If the user asks for medical help, gently explain you are an AI coach, not a doctor, and recommend they see a professional.
3. Be an active listener. Reflect back what the user says.
4. Use Cognitive Behavioral Coaching (CBC) techniques: identify small goals, challenge negative thought patterns gently, and encourage self-reflection.
5. Provide a daily mood check-in if the conversation starts.
6. Offer positive affirmations when appropriate.
7. CRITICAL: If the user indicates self-harm or severe crisis, IMMEDIATELY provide the International Suicide Prevention resources and urge them to call 988 (USA) or local equivalents.

Tone: Warm, empathetic, professional yet friendly.
`;

export class GeminiService {
  private ai: any;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async sendMessage(history: Message[]) {
    try {
      // Map history to contents format, excluding system messages
      const contents = history
        .filter(m => m.role !== 'system')
        .map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        }));

      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      return response.text || "I'm sorry, I'm having trouble processing that right now.";
    } catch (error) {
      console.error("Gemini Error:", error);
      if (error instanceof Error && error.message.includes('API key')) {
        return "ERROR: API Key issue. Please ensure the project environment is correctly configured.";
      }
      return "Something went wrong. Please try again later.";
    }
  }
}

export const gemini = new GeminiService();
