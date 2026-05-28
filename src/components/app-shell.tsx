'use client';

import React, { useState } from 'react';
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
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Inventario', href: '/stock', icon: Package },
  { name: 'Órdenes', href: '/orders', icon: ShoppingCart },
  { name: 'Analíticas', href: '/analytics', icon: BarChart3 },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (pathname === '/login' || pathname === '/terms') {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden font-sans">
      {/* Sidebar Profesional */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-900 border-r border-white/5">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
            <Zap className="text-primary w-6 h-6 fill-current" />
          </div>
          <div>
            <p className="font-bold text-lg text-white leading-none">MonsterShop</p>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Enterprise</p>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <span className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all group",
                  isActive 
                    ? "bg-primary text-slate-950" 
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                )}>
                  <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </div>
                  {isActive && <ChevronRight className="w-3 h-3" />}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <Button variant="ghost" className="w-full justify-start gap-3 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl h-11" asChild>
            <Link href="/login">
              <LogOut className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Desconectar</span>
            </Link>
          </Button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 bg-slate-950 relative overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 bg-slate-900 border-b border-white/5">
          <div className="flex items-center gap-2">
            <Zap className="text-primary w-6 h-6 fill-current" />
            <span className="font-bold text-white">MonsterShop</span>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-5 h-5" />
          </Button>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[100] bg-slate-950 p-6 flex flex-col animate-in fade-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-2">
                <Zap className="text-primary w-8 h-8 fill-current" />
                <span className="text-xl font-bold text-white">MonsterShop</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </Button>
            </div>
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <span className={cn(
                    "flex items-center gap-4 p-5 rounded-2xl text-lg font-bold transition-all",
                    pathname === item.href ? "bg-primary text-slate-950" : "bg-white/5 text-slate-400"
                  )}>
                    <item.icon className="w-6 h-6" />
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
            <div className="mt-auto">
              <Button variant="destructive" className="w-full py-6 rounded-2xl font-bold uppercase tracking-wider" asChild>
                <Link href="/login">Salir del Sistema</Link>
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
