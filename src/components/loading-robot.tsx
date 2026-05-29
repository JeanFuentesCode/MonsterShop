'use client';

import React from 'react';

export function LoadingRobot() {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black transition-all duration-700">
      <style>{`
        @keyframes robotJump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-40px); }
        }
        @keyframes pcBounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .robot-jump {
          animation: robotJump 0.8s ease-in-out infinite;
        }
        .pc-bounce {
          animation: pcBounce 0.8s ease-in-out infinite;
        }
      `}</style>
      
      <div className="relative flex flex-col items-center">
        {/* Robot Jumping */}
        <div className="robot-jump text-6xl mb-4">😊🤖</div>
        
        {/* Computer */}
        <div className="pc-bounce">
          <div className="w-32 h-24 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg border-4 border-gray-600 flex items-center justify-center relative shadow-lg">
            {/* Monitor screen */}
            <div className="w-28 h-20 bg-green-900 rounded border-2 border-green-700 flex items-center justify-center relative overflow-hidden">
              <div className="text-2xl animate-pulse">⚡</div>
              {/* Scanning lines effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent animate-pulse"></div>
            </div>
            {/* Monitor stand */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-700 rounded"></div>
          </div>
        </div>

        {/* Text & Status */}
        <div className="mt-16 text-center space-y-4">
          <div className="space-y-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-400">Cargando</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Preparando tu negocio</p>
          </div>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}