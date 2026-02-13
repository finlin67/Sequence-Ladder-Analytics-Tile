import React from 'react';
import EmailLadderTile from './components/EmailLadderTile';
import { ArrowRight, Layout, Settings } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-indigo-500/30">
      
      {/* Navigation Bar (Mock) */}
      <nav className="border-b border-white/5 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white">S</div>
            <span className="font-semibold text-lg tracking-tight">SaaS Premium</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Analytics</a>
          </div>
          <div className="flex items-center gap-4">
             <button className="p-2 text-slate-400 hover:text-white transition-colors">
                <Settings className="w-5 h-5" />
             </button>
             <button className="bg-white text-slate-950 px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors">
                Dashboard
             </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-64px)] p-8 lg:p-20 gap-16 lg:gap-24 overflow-hidden relative">
        
        {/* Background Decorative Gradients */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

        {/* Left Column: Copy */}
        <div className="flex-1 max-w-xl z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <Layout className="w-3 h-3" />
            <span>New Analytics Engine</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Visualize your <br/> entire funnel.
          </h1>
          
          <p className="text-lg text-slate-400 leading-relaxed max-w-md">
            Stop guessing where your leads drop off. Our new sequence ladder provides real-time visibility into every stage of your customer journey.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="group flex items-center gap-2 bg-indigo-600 text-white px-6 py-3.5 rounded-full font-semibold hover:bg-indigo-500 transition-all shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)]">
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3.5 rounded-full font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all bg-white/5 hover:bg-white/10">
              View Documentation
            </button>
          </div>
          
          <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-sm text-slate-500 font-medium">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">&lt;50ms</div>
              <div className="text-sm text-slate-500 font-medium">Query Latency</div>
            </div>
          </div>
        </div>

        {/* Right Column: The Component */}
        <div className="flex-none z-10">
             {/* 
                This is the requested component integration.
                It is responsive but strictly maintains its intrinsic visual design.
             */}
             <div className="scale-[0.8] sm:scale-100 transition-transform duration-500">
                <EmailLadderTile />
             </div>
        </div>

      </main>
    </div>
  );
}