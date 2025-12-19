
import React, { useState } from 'react';
import { NavTab } from './types';
import { 
  PYTHON_FOLDER_STRUCTURE, 
  REQUIREMENTS_TXT, 
  INTERVIEW_QUESTIONS,
  SYSTEM_PROMPT_PREVIEW 
} from './constants';
import ChatDemo from './components/ChatDemo';
import CodeBlock from './components/CodeBlock';

const TABS: NavTab[] = [
  { id: 'demo', label: 'Live Demo', icon: 'fa-comments' },
  { id: 'overview', label: 'Overview', icon: 'fa-lightbulb' },
  { id: 'tech', label: 'Tech & Setup', icon: 'fa-code' },
  { id: 'logic', label: 'Implementation', icon: 'fa-gears' },
  // { id: 'interview', label: 'Interview Prep', icon: 'fa-briefcase' },
  
];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8 animate-fadeIn">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-compass text-emerald-600"></i> Project Vision
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The <strong>AI Mental Coach</strong> is a generative AI application designed to provide accessible, 
                immediate, and non-judgmental wellness support. It solves the gap between passive mood trackers 
                and expensive professional therapy for everyday stresses.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                  <h3 className="font-bold text-emerald-800 mb-2 underline decoration-emerald-200">The Problem</h3>
                  <p className="text-sm text-emerald-700">High barriers (cost/stigma) to mental wellness support for students and early-career professionals.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-blue-800 mb-2 underline decoration-blue-200">Target Users</h3>
                  <p className="text-sm text-blue-700">College students facing exam stress, freshers navigating corporate life, and busy professionals.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                  <h3 className="font-bold text-purple-800 mb-2 underline decoration-purple-200">The Difference</h3>
                  <p className="text-sm text-purple-700">Unlike generic chatbots, this uses behavioral coaching frameworks and strict ethical safety guardrails.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-star text-emerald-600"></i> Core Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="flex items-center gap-2 p-2 bg-white rounded shadow-sm">
                  <i className="fas fa-check-circle text-emerald-500"></i> Daily Mood Check-in & Logging
                </li>
                <li className="flex items-center gap-2 p-2 bg-white rounded shadow-sm">
                  <i className="fas fa-check-circle text-emerald-500"></i> Empathetic Stress Support
                </li>
                <li className="flex items-center gap-2 p-2 bg-white rounded shadow-sm">
                  <i className="fas fa-check-circle text-emerald-500"></i> Motivational Nudges & Affirmations
                </li>
                <li className="flex items-center gap-2 p-2 bg-white rounded shadow-sm">
                  <i className="fas fa-check-circle text-emerald-500"></i> Reflective Journaling Prompts
                </li>
                <li className="flex items-center gap-2 p-2 bg-white rounded shadow-sm">
                  <i className="fas fa-check-circle text-emerald-500"></i> Smart Daily Goal Planning
                </li>
                <li className="flex items-center gap-2 p-2 bg-white rounded shadow-sm">
                  <i className="fas fa-check-circle text-emerald-500"></i> Ethics-First Crisis Detection
                </li>
              </ul>
            </section>
          </div>
        );

      case 'tech':
        return (
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">Tech Stack & Structure</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-slate-700 mb-2">Selected Tools</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg">
                      <span className="font-medium">Language</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Python 3.9+</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg">
                      <span className="font-medium">AI Engine</span>
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs">Google Gemini SDK</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg">
                      <span className="font-medium">Env Management</span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">python-dotenv</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-semibold text-slate-700 mb-2">Installation</h3>
                    <CodeBlock title="Terminal" language="bash" code="python -m venv venv\nsource venv/bin/activate\npip install -r requirements.txt" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700 mb-2">Clean Project Structure</h3>
                  <CodeBlock title="Directory Tree" language="text" code={PYTHON_FOLDER_STRUCTURE} />
                </div>
              </div>
            </section>
          </div>
        );

      case 'logic':
        return (
          <div className="space-y-8 pb-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Implementation </h2>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-6">
                <h3 className="text-lg font-bold text-emerald-700 mb-3">1. The Prompting Engine</h3>
                <p className="text-slate-600 text-sm mb-4">
                  The 'Soul' of the project. We use a structured system prompt to define exactly how the AI behaves.
                </p>
                <CodeBlock title="prompts.py" code={SYSTEM_PROMPT_PREVIEW} />
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-blue-700 mb-3">2. Safety Layering</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Handling medical disclaimers is a non-negotiable requirement for wellness apps.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-red-100 bg-red-50 p-4 rounded-xl">
                    <h4 className="font-bold text-red-800 text-sm mb-1">Pre-processing</h4>
                    <p className="text-xs text-red-700">Check for keywords like 'suicide', 'die', 'hurt' before calling the AI.</p>
                  </div>
                  <div className="border border-green-100 bg-green-50 p-4 rounded-xl">
                    <h4 className="font-bold text-green-800 text-sm mb-1">Output Filtering</h4>
                    <p className="text-xs text-green-700">Inject a constant footer disclaimer to every AI response for legal safety.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-slate-900 text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-rocket text-yellow-400"></i> Step-by-Step Run
              </h3>
              <ol className="space-y-4 text-sm text-slate-300 list-decimal pl-5">
                <li>Create <code>.env</code> file and add <code>API_KEY=your_gemini_key</code>.</li>
                <li>Write the <code>AILogic</code> class to wrap the SDK calls.</li>
                <li>Create a <code>main.py</code> loop that captures <code>input()</code> and prints responses.</li>
                <li>Add a 'Mood Tracker' module that saves user inputs to a local JSON for trend analysis.</li>
              </ol>
            </section>
          </div>
        );

      case 'interview':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <i className="fas fa-graduation-cap text-emerald-600"></i> Ace the Interview
            </h2>
            <p className="text-slate-600 mb-6 italic">Explain this project with confidence by mastering these key architectural and ethical discussions.</p>
            <div className="space-y-4">
              {INTERVIEW_QUESTIONS.map((q, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors">
                  <h3 className="font-bold text-slate-800 mb-2 flex gap-3">
                    <span className="text-emerald-500">Q:</span> {q.question}
                  </h3>
                  <p className="text-slate-600 text-sm pl-7 border-l-2 border-slate-100 leading-relaxed">
                    <span className="font-semibold text-slate-500 uppercase text-[10px] block mb-1">Recommended Answer:</span>
                    {q.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'demo':
        return (
          <div className="max-w-4xl mx-auto animate-slideUp">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-extrabold mb-2 text-slate-800">Experience the Persona</h2>
              <p className="text-slate-500">Try out the "AI Mental Coach" system prompt in real-time. Experience the tone and safety boundaries first-hand.</p>
            </div>
            <ChatDemo />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar / Navigation */}
      <div className="flex flex-col md:flex-row min-h-screen">
        <aside className="w-full md:w-64 bg-slate-900 text-white p-6 sticky top-0 h-auto md:h-screen">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <i className="fas fa-brain text-xl"></i>
            </div>
            <h1 className="text-xl font-bold tracking-tight">MentalCoach<span className="text-emerald-400">AI</span></h1>
          </div>
          
          <nav className="space-y-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <i className={`fas ${tab.icon} w-5 text-center`}></i>
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-10 border-t border-slate-800 hidden md:block">
            <div className="bg-slate-800/50 p-4 rounded-xl text-xs text-slate-400">
              <p className="mb-2">Project Level: <strong>Junior - Mid</strong></p>
              <p>Focus: <strong>AI Ethics & Logic</strong></p>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-12 max-w-6xl mx-auto overflow-y-auto">
          {/* Header */}
          <header className="mb-12 border-b border-slate-200 pb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1 block">Full-Stack </span>
                <h1 className="text-4xl font-black text-slate-900">AI Mental Coach </h1>
              </div>
              <div className="flex items-center gap-2">
                {/* <a href="https://github.com" target="_blank" className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm hover:bg-slate-800 transition-colors">
                  <i className="fab fa-github"></i> Source Code
                </a> */}
              </div>
            </div>
          </header>

          {/* Render Tab Content */}
          <div className="min-h-[60vh]">
            {renderContent()}
          </div>

          {/* Footer */}
          <footer className="mt-20 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
            <p>© 2024 AI Mental Coach Project Blueprint. Built for learning and interview excellence.</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;
