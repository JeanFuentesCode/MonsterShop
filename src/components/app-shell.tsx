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
  Zap,
  Moon,
  Sun,
  ChevronRight,
  Settings
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

  // Manejar cambio de pestaña con animación
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Manejar Modo Claro/Oscuro
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

      {/* Sidebar Industrial */}
      <aside className="hidden md:flex flex-col w-72 bg-card border-r border-white/5 transition-all duration-300">
        <div className="p-8 flex items-center gap-4 group">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-all">
            <Zap className="text-primary w-7 h-7 fill-primary/20" />
          </div>
          <div>
            <p className="font-black text-xl tracking-tighter uppercase italic">Monster<span className="text-primary">Shop</span></p>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mt-1">Industrial Core v4.0</p>
          </div>
        </div>

        <nav className="flex-1 px-6 py-8 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <span className={cn(
                  "flex items-center justify-between px-4 py-4 rounded-2xl text-sm font-bold transition-all duration-200",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/10" 
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                )}>
                  <div className="flex items-center gap-4">
                    <item.icon className={cn("w-5 h-5", isActive ? "text-white" : "text-primary/60")} />
                    <span>{item.name}</span>
                  </div>
                  {isActive && <ChevronRight className="w-4 h-4" />}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/5 space-y-4">
          <Button 
            variant="ghost" 
            onClick={toggleTheme}
            className="w-full justify-start gap-4 h-12 rounded-2xl text-muted-foreground hover:text-foreground"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            <span className="text-xs font-black uppercase tracking-widest">{isDark ? 'Modo Claro' : 'Modo Oscuro'}</span>
          </Button>

          <Button variant="ghost" className="w-full justify-start gap-4 text-muted-foreground hover:text-destructive hover:bg-destructive/5 rounded-2xl h-12" asChild>
            <Link href="/login">
              <LogOut className="w-5 h-5" />
              <span className="text-xs font-black uppercase tracking-widest">Cerrar Sesión</span>
            </Link>
          </Button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 bg-background relative">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-6 bg-card border-b border-white/5">
          <div className="flex items-center gap-3">
            <Zap className="text-primary w-6 h-6" />
            <span className="font-black uppercase tracking-tighter italic">MonsterShop</span>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </Button>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-12">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[150] bg-background p-8 flex flex-col animate-in fade-in slide-in-from-top duration-300">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <Zap className="text-primary w-8 h-8" />
                <span className="text-2xl font-black uppercase italic tracking-tighter">MonsterShop</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-8 h-8" />
              </Button>
            </div>
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <span className={cn(
                    "flex items-center gap-5 p-6 rounded-3xl text-xl font-black uppercase tracking-widest transition-all",
                    pathname === item.href ? "bg-primary text-white" : "bg-card text-muted-foreground"
                  )}>
                    <item.icon className="w-7 h-7" />
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
            <div className="mt-auto space-y-4">
              <Button variant="outline" onClick={toggleTheme} className="w-full py-8 rounded-3xl font-black uppercase tracking-widest">
                {isDark ? <Sun className="mr-2" /> : <Moon className="mr-2" />} Cambiar Tema
              </Button>
              <Button variant="destructive" className="w-full py-8 rounded-3xl font-black uppercase tracking-widest" asChild>
                <Link href="/login">Salir del Sistema</Link>
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}