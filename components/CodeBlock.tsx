
import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'python', title }) => {
  return (
    <div className="rounded-lg overflow-hidden bg-slate-900 my-4 shadow-lg border border-slate-800">
      {title && (
        <div className="bg-slate-800 px-4 py-2 text-xs font-mono text-slate-400 border-b border-slate-700 flex justify-between items-center">
          <span>{title}</span>
          <span className="uppercase text-[10px] tracking-wider">{language}</span>
        </div>
      )}
      <pre className="p-4 text-emerald-400 font-mono text-sm overflow-x-auto">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
