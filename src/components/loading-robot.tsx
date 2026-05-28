'use client';

import React from 'react';
import { Bot, Monitor, Cpu } from 'lucide-react';

export function LoadingRobot() {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background/95 backdrop-blur-sm transition-all duration-700">
      <div className="relative flex flex-col items-center">
        {/* Robot Body */}
        <div className="animate-robot flex flex-col items-center relative">
          <div className="p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10 shadow-[0_0_50px_rgba(34,197,94,0.05)]">
            <Bot className="w-20 h-20 text-primary" />
          </div>
          
          {/* Working Screen */}
          <div className="absolute -bottom-2 -right-6 p-4 bg-card border border-border rounded-xl shadow-2xl scale-90">
            <Monitor className="w-10 h-10 text-primary/40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Cpu className="w-5 h-5 text-primary animate-pulse" />
            </div>
          </div>
        </div>

        {/* Text & Status */}
        <div className="mt-16 text-center space-y-4">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Sincronizando</p>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Base de Datos L4-Core</p>
          </div>
          <div className="flex justify-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-primary/20 animate-pulse [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 rounded-full bg-primary/20 animate-pulse [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 rounded-full bg-primary/20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
