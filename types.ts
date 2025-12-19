
export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface NavTab {
  id: string;
  label: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
