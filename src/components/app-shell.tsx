'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  LogOut,
  Menu,
  X,
  Moon,
  Sun,
  Zap,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Terminal', href: '/', icon: LayoutDashboard },
  { name: 'Inventario', href: '/stock', icon: Package },
  { name: 'Operaciones', href: '/orders', icon: ShoppingCart },
  { name: 'Reportes', href: '/analytics', icon: BarChart3 },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  if (pathname === '/login' || pathname === '/terms') {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden font-sans">
      {/* Sidebar Industrial */}
      <aside className="hidden md:flex flex-col w-72 bg-card/30 border-r border-border/40 backdrop-blur-xl">
        <div className="p-8 flex items-center gap-4">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <Zap className="text-black w-7 h-7 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter uppercase italic leading-none">MonsterShop</span>
            <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mt-1">Industrial OS</span>
          </div>
        </div>

        <nav className="flex-1 px-6 py-6 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <span className={cn(
                  "flex items-center justify-between px-4 py-4 rounded-2xl text-sm font-bold transition-all duration-300 group relative",
                  isActive 
                    ? "bg-primary text-black" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}>
                  <div className="flex items-center gap-4">
                    <item.icon className={cn("w-5 h-5 transition-transform", isActive ? "" : "group-hover:scale-110")} />
                    <span className="uppercase tracking-widest">{item.name}</span>
                  </div>
                  {isActive && <ChevronRight className="w-4 h-4" />}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-border/40 space-y-3">
          <Button variant="ghost" className="w-full justify-start gap-4 rounded-2xl h-12 hover:bg-primary/10 hover:text-primary transition-colors" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            <span className="uppercase text-xs font-black tracking-widest">Modo {theme === 'dark' ? 'Claro' : 'Oscuro'}</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-4 text-red-500 hover:text-red-400 hover:bg-red-500/10 rounded-2xl h-12" asChild>
            <Link href="/login">
              <LogOut className="w-5 h-5" />
              <span className="uppercase text-xs font-black tracking-widest">Desconectar</span>
            </Link>
          </Button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 bg-background relative">
        {/* Background Noise/Grid */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-6 glass sticky top-0 z-[100]">
          <div className="flex items-center gap-3">
            <Zap className="text-primary w-8 h-8 fill-current" />
            <span className="text-xl font-black italic uppercase tracking-tighter">Monster</span>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)} className="rounded-2xl bg-muted/50">
            <Menu className="w-6 h-6" />
          </Button>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-12 relative z-10">
          <div className="max-w-7xl mx-auto space-y-12">
            {children}
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex flex-col p-8 animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <Zap className="text-primary w-10 h-10 fill-current" />
                <span className="text-2xl font-black italic uppercase tracking-tighter">MonsterShop</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="rounded-full">
                <X className="w-8 h-8" />
              </Button>
            </div>
            <nav className="space-y-6">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <span className={cn(
                    "flex items-center gap-6 p-6 rounded-3xl text-2xl font-black uppercase tracking-[0.2em] transition-all",
                    pathname === item.href ? "bg-primary text-black" : "bg-muted/30 text-muted-foreground"
                  )}>
                    <item.icon className="w-8 h-8" />
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
            <div className="mt-auto space-y-4">
              <Button variant="outline" className="w-full py-8 rounded-3xl text-xl font-black uppercase tracking-widest gap-4" onClick={toggleTheme}>
                {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                Modo {theme === 'dark' ? 'Claro' : 'Oscuro'}
              </Button>
              <Button variant="destructive" className="w-full py-8 rounded-3xl text-xl font-black uppercase tracking-widest" asChild>
                <Link href="/login">Salir del Sistema</Link>
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}