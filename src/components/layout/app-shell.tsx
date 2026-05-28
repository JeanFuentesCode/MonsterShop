"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  BarChart3,
  Sun,
  Moon
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { name: 'Inicio', href: '/', icon: LayoutDashboard },
  { name: 'Almacén', href: '/products', icon: Package },
  { name: 'Pedidos', href: '/orders', icon: ShoppingCart },
  { name: 'Análisis', href: '/analytics', icon: BarChart3 },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    setIsDark(theme === 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  useEffect(() => {
    setIsLoading(true);
    setLoadingProgress(0);
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 200);
          return 100;
        }
        return prev + 20;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [pathname]);

  return (
    <div className="flex min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center">
          <div className="w-full max-w-[200px] flex flex-col items-center gap-6">
            <Logo className="w-16 h-16 text-primary animate-pulse" />
            <div className="w-full space-y-2">
              <Progress value={loadingProgress} className="h-1 bg-muted" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-center text-primary/50">
                MonsterShop Syncing
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Desktop */}
      <aside className="hidden md:flex w-64 flex-col border-r border-border bg-card sticky top-0 h-screen">
        <div className="p-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8 text-primary" />
            <h1 className="text-lg font-black tracking-tighter uppercase">MonsterShop</h1>
          </div>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all group",
                pathname === item.href 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-border">
          <Button variant="ghost" className="w-full justify-start gap-3 rounded-xl" onClick={toggleTheme}>
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            Modo {isDark ? 'Claro' : 'Oscuro'}
          </Button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 pb-24 md:pb-0">
        <main className={cn(
          "flex-1 p-6 md:p-12 max-w-6xl mx-auto w-full transition-all duration-500",
          isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
        )}>
          {children}
        </main>

        {/* Mobile Bottom Nav */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-xl border-t border-border z-50 flex items-center justify-around px-4">
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
              <span className="text-[10px] font-black uppercase tracking-tighter">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}