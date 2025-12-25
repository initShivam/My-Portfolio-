import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILLS, EXPERIENCE, PROJECTS, EDUCATION } from './constants';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: `Hi! I'm an AI assistant for ${PERSONAL_INFO.name}. Ask me anything about his skills, projects, or experience.` }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API Key not found");
      }

      const ai = new GoogleGenAI({ apiKey });

      // Construct context from portfolio data
      const context = JSON.stringify({
        personalInfo: PERSONAL_INFO,
        skills: SKILLS,
        experience: EXPERIENCE,
        projects: PROJECTS,
        education: EDUCATION
      });

      const systemInstruction = `You are a friendly and professional AI portfolio assistant for ${PERSONAL_INFO.name}. 
      Your goal is to answer questions about ${PERSONAL_INFO.name}'s professional background, skills, and projects based strictly on the provided context.
      
      Context Data:
      ${context}

      Guidelines:
      - Answer in the first person (as if you are representing ${PERSONAL_INFO.name}) or as a helpful assistant.
      - Keep responses concise, engaging, and relevant.
      - If the user asks for contact info, provide the email from the context.
      - If you don't know the answer based on the context, politely say you don't have that information.
      - Do not make up facts.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const text = response.text;
      
      if (text) {
        setMessages(prev => [...prev, { role: 'model', text }]);
      } else {
        throw new Error("No response generated");
      }
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "I apologize, but I'm having a little trouble thinking right now. Please try asking me again in a moment, or check the Contact section to reach out directly!" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-96 h-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary-600 to-indigo-600 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-yellow-300" />
                <span className="font-semibold">Ask AI Assistant</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900/50">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'user' 
                      ? 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300' 
                      : 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                  }`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm max-w-[80%] ${
                    msg.role === 'user'
                      ? 'bg-primary-600 text-white rounded-tr-none'
                      : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-tl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                   <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about my skills..."
                  className="flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 p-4 bg-gradient-to-r from-primary-600 to-indigo-600 text-white rounded-full shadow-lg shadow-primary-500/30 z-50 hover:shadow-xl transition-all"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </>
  );
};

export default ChatBot;