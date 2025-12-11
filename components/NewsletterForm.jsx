'use client';

import { useState } from 'react';
import { Mail, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  
  // 🛡️ SECURITY STATE: This is the "Trap" variable
  const [botCheck, setBotCheck] = useState(''); 

  // 🎯 YOUR REAL KIT URL
  const FORM_ACTION_URL = "https://app.kit.com/forms/8864506/subscriptions"; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🛡️ SECURITY CHECK (Layer 2)
    // If the invisible "botCheck" field has ANY text, it is a bot.
    // We stop the function immediately.
    if (botCheck !== '') {
      console.log("Bot detected. Blocking submission.");
      return; 
    }

    setStatus('loading');

    try {
      const formData = new FormData();
      formData.append("email_address", email);

      const response = await fetch(FORM_ACTION_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="relative overflow-hidden bg-slate-900/50 border border-indigo-500/20 p-8 rounded-3xl my-16 text-center backdrop-blur-sm">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
          <Mail className="w-6 h-6" />
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">OpokuML</span> Community
        </h3>
        
        <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
          Get practical engineering insights on building end-to-end ML pipelines, containerizing models, and mastering the MLOps lifecycle.
        </p>

        {status === 'success' ? (
          <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl flex items-center justify-center gap-2 animate-fade-in">
            <CheckCircle className="w-5 h-5" />
            <span>Success! Please check your email to confirm.</span>
          </div>
        ) : (
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
            
            {/* 🛡️ HONEYPOT FIELD (The Trap) */}
            {/* This input is invisible to humans. If a bot fills it, we know it's spam. */}
            <input 
              type="text" 
              name="website_url" 
              value={botCheck}
              onChange={(e) => setBotCheck(e.target.value)}
              style={{ display: 'none' }} 
              tabIndex="-1"
              autoComplete="off"
            />

            <input 
              name="email_address" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              className="flex-1 px-5 py-3 rounded-full bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
              required
              disabled={status === 'loading'}
            />
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold rounded-full transition-all shadow-lg shadow-indigo-500/25 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
            >
              {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Subscribe for Updates'}
            </button>
          </form>
        )}
        
        {status === 'error' && (
           <div className="mt-4 text-rose-400 text-sm flex items-center justify-center gap-2">
             <AlertCircle className="w-4 h-4" />
             <span>Something went wrong. Please try again later.</span>
           </div>
        )}
        
        <p className="mt-4 text-xs text-slate-600">
          Receive a notification whenever a new article is published.
        </p>
      </div>
    </div>
  );
}