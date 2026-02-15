import React from 'react';
import SequenceLadderGallery from './components/EmailLadderTile';
import { ArrowRight, Layout, Settings, ShieldCheck, Zap } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-100 selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] aspect-square bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square bg-sky-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Navigation */}
      <nav className="border-b border-white/5 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="font-black text-xl tracking-tighter text-white">QUANTUM<span className="text-indigo-400">SYNC</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-white transition-colors">Solutions</a>
            <a href="#" className="hover:text-white transition-colors">Analytics</a>
          </div>
          <div className="flex items-center gap-4">
             <button className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-white/10 transition-all">
                Sign In
             </button>
             <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20">
                Get Started
             </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] px-8 py-12 lg:py-24 gap-16">
        
        {/* Left: Content */}
        <div className="flex-1 max-w-2xl z-10 space-y-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-black uppercase tracking-[0.2em]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Enterprise Grade Intelligence</span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
            Funnel <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400">
              Visualized.
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 leading-relaxed font-medium">
            Turn abstract data into actionable insight. Our ladder analytics identifies conversion friction with sub-millisecond precision.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="group flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-2xl font-black text-lg hover:bg-indigo-50 transition-all shadow-2xl shadow-white/5">
              Deploy Instantly
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-2xl font-black text-lg text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all bg-white/5 hover:bg-white/10">
              Interactive Demo
            </button>
          </div>
          
          <div className="pt-12 grid grid-cols-2 gap-12 border-t border-white/10 max-w-md">
            <div>
              <div className="text-4xl font-black text-white mb-2 tracking-tighter">99.99%</div>
              <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Accuracy Rating</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2 tracking-tighter">1.2M+</div>
              <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Events / Second</div>
            </div>
          </div>
        </div>

        {/* Right: Component Preview */}
        <div className="flex-none z-10 w-full lg:w-auto flex justify-center">
             <div className="w-full max-w-[540px] scale-[0.9] sm:scale-100 transition-all duration-700 hover:scale-[1.02]">
                <SequenceLadderGallery />
             </div>
        </div>

      </main>
    </div>
  );
}
