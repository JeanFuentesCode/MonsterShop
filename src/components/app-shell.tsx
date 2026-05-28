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
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LoadingRobot } from '@/components/loading-robot';

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Inventario', href: '/stock', icon: Package },
  { name: 'Órdenes', href: '/orders', icon: ShoppingCart },
  { name: 'Analíticas', href: '/analytics', icon: BarChart3 },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // Animación de robot extendida para simular sincronización pesada
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    setIsDark(theme === 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  if (pathname === '/login' || pathname === '/terms') {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden font-sans">
      {isLoading && <LoadingRobot />}

      {/* Sidebar Enterprise */}
      <aside className="hidden md:flex flex-col w-64 bg-card border-r border-border transition-all duration-300">
        <div className="p-8 h-24 flex items-center">
          <Link href="/" className="group">
            <h1 className="font-black text-2xl tracking-tighter uppercase italic">
              Monster<span className="text-primary">Shop</span>
            </h1>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <span className={cn(
                  "group flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-200",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}>
                  <div className="flex items-center gap-3">
                    <item.icon className={cn("w-5 h-5 hover-levitate", isActive ? "text-primary-foreground" : "text-primary/60 group-hover:text-primary")} />
                    <span>{item.name}</span>
                  </div>
                  {isActive && <ChevronRight className="w-4 h-4 opacity-50" />}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border space-y-2">
          <Button 
            variant="ghost" 
            onClick={toggleTheme}
            className="w-full justify-start gap-3 h-11 rounded-xl text-muted-foreground hover:text-foreground"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            <span className="text-[10px] font-black uppercase tracking-widest">{isDark ? 'Modo Claro' : 'Modo Oscuro'}</span>
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-xl h-11" asChild>
            <Link href="/login">
              <LogOut className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Cerrar Sesión</span>
            </Link>
          </Button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 bg-background relative">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between px-6 h-20 bg-card border-b border-border">
          <span className="font-black uppercase tracking-tighter italic text-xl">Monster<span className="text-primary">Shop</span></span>
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </Button>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[150] bg-background p-6 flex flex-col animate-in fade-in slide-in-from-top duration-300">
            <div className="flex justify-between items-center mb-10">
              <span className="text-2xl font-black uppercase italic tracking-tighter">Monster<span className="text-primary">Shop</span></span>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-8 h-8" />
              </Button>
            </div>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <span className={cn(
                    "flex items-center gap-4 p-5 rounded-2xl text-lg font-black uppercase tracking-widest transition-all",
                    pathname === item.href ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground"
                  )}>
                    <item.icon className="w-6 h-6" />
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
            <div className="mt-auto space-y-3">
              <Button variant="outline" onClick={toggleTheme} className="w-full py-7 rounded-2xl font-black uppercase tracking-widest">
                {isDark ? <Sun className="mr-2" /> : <Moon className="mr-2" />} Tema
              </Button>
              <Button variant="destructive" className="w-full py-7 rounded-2xl font-black uppercase tracking-widest" asChild>
                <Link href="/login">Cerrar Sesión</Link>
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
