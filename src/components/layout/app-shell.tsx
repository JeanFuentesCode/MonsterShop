"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  BarChart3,
  Monitor
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";

const NAV_ITEMS = [
  { name: 'Inicio', href: '/', icon: LayoutDashboard },
  { name: 'Stock', href: '/products', icon: Package },
  { name: 'Pedidos', href: '/orders', icon: ShoppingCart },
  { name: 'Reportes', href: '/analytics', icon: BarChart3 },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  // Simulación de transición de carga al cambiar de ruta
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-300">
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Monster with PC Animation */}
            <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
              <rect x="30" y="60" width="40" height="25" rx="2" fill="currentColor" opacity="0.2" />
              <rect x="35" y="65" width="30" height="15" rx="1" fill="currentColor" />
              <circle cx="50" cy="40" r="20" fill="currentColor" className="animate-bounce" />
              <path d="M40 35 Q40 30 45 30 M55 30 Q60 30 60 35" stroke="black" strokeWidth="2" fill="none" />
              <circle cx="43" cy="40" r="2" fill="black" />
              <circle cx="57" cy="40" r="2" fill="black" />
              <path d="M45 48 Q50 52 55 48" stroke="black" strokeWidth="1" fill="none" />
            </svg>
            <div className="absolute bottom-0 flex gap-1">
              <div className="w-1 h-1 bg-primary rounded-full animate-ping" />
              <div className="w-1 h-1 bg-primary rounded-full animate-ping delay-75" />
              <div className="w-1 h-1 bg-primary rounded-full animate-ping delay-150" />
            </div>
          </div>
          <p className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary animate-pulse">
            Invocando Datos...
          </p>
        </div>
      )}

      {/* Sidebar Desktop */}
      <aside className="hidden md:flex w-64 flex-col border-r border-white/5 bg-black sticky top-0 h-screen">
        <div className="p-8 flex items-center gap-3">
          <Logo className="w-8 h-8 text-primary" />
          <h1 className="text-lg font-black tracking-tighter uppercase">MonsterShop</h1>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group",
                pathname === item.href 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className={cn("w-5 h-5", pathname === item.href ? "text-primary" : "text-muted-foreground group-hover:text-white")} />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 pb-24 md:pb-0">
        {/* Desktop Header sin "Sistema Activo" */}
        <header className="hidden md:flex items-center justify-between px-12 py-6 border-b border-white/5" />

        {/* Mobile Top Bar */}
        <header className="md:hidden flex items-center justify-between p-6 bg-black sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <Logo className="w-6 h-6 text-primary" />
            <h1 className="text-sm font-black tracking-tighter uppercase">MonsterShop</h1>
          </div>
        </header>

        <main className={cn(
          "flex-1 p-6 md:p-12 max-w-5xl mx-auto w-full transition-all duration-500",
          isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        )}>
          {children}
        </main>

        {/* Bottom Nav Móvil */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-black/80 backdrop-blur-xl border-t border-white/10 z-50 flex items-center justify-around px-4">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 transition-all",
                pathname === item.href ? "text-primary scale-110" : "text-muted-foreground"
              )}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-[10px] font-bold uppercase tracking-tighter">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
