'use client';

import React from 'react';
import { Bot, Monitor, Cpu } from 'lucide-react';

export function LoadingRobot() {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background/80 backdrop-blur-xl transition-all duration-500">
      <div className="relative flex flex-col items-center">
        {/* Robot Body */}
        <div className="animate-robot flex flex-col items-center relative">
          <div className="p-6 bg-primary/10 rounded-full border border-primary/20 shadow-[0_0_40px_rgba(34,197,94,0.1)]">
            <Bot className="w-16 h-16 text-primary" />
          </div>
          
          {/* Working Screen */}
          <div className="absolute -bottom-4 -right-8 p-3 bg-card border border-white/10 rounded-lg shadow-2xl scale-75 md:scale-100">
            <Monitor className="w-8 h-8 text-primary/60" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Cpu className="w-4 h-4 text-primary animate-pulse" />
            </div>
          </div>
        </div>

        {/* Text & Typing Indicator */}
        <div className="mt-12 text-center space-y-2">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-primary">Sincronizando Sistema</p>
          <div className="flex justify-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}