
"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  BarChart3,
  Plus
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

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex w-64 flex-col border-r border-white/5 bg-black sticky top-0 h-screen">
        <div className="p-8 flex items-center gap-3">
          <Logo className="w-8 h-8 text-primary" />
          <h1 className="text-lg font-black tracking-tighter uppercase italic">MonsterShop</h1>
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
        {/* Header simple parea desktop */}
        <header className="hidden md:flex items-center justify-between px-12 py-6 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Sistema Activo</span>
          </div>
        </header>

        {/* Mobile Top Bar */}
        <header className="md:hidden flex items-center justify-between p-6 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <Logo className="w-6 h-6 text-primary" />
            <h1 className="text-sm font-black tracking-tighter uppercase italic">MonsterShop</h1>
          </div>
        </header>

        <main className="flex-1 p-6 md:p-12 max-w-5xl mx-auto w-full">
          {children}
        </main>

        {/* Bottom Nav Móvil */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 bottom-nav-blur z-50 flex items-center justify-around px-4">
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
