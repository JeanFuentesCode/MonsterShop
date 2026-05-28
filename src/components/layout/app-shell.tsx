"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  ClipboardList, 
  Settings, 
  PieChart,
  LogOut,
  Bell,
  Search as SearchIcon,
  User
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Catálogo', href: '/products', icon: Package },
  { name: 'Pedidos', href: '/orders', icon: ClipboardList },
  { name: 'Análisis', href: '/analytics', icon: PieChart },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-black text-foreground overflow-hidden font-body">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        
        {/* Top Professional Header */}
        <header className="h-20 border-b border-white/5 bg-black/80 backdrop-blur-md flex items-center justify-between px-6 md:px-12 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-200 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <ClipboardList className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-gold">
              COMANDAfow
            </span>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-10 relative group">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              placeholder="Búsqueda inteligente..." 
              className="w-full pl-10 h-10 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm transition-all"
            />
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full relative text-muted-foreground hover:text-white hover:bg-white/5">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-black"></span>
            </Button>
            <div className="h-6 w-px bg-white/10 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold leading-none">Admin Pro</p>
                <p className="text-[10px] uppercase tracking-tighter text-primary/80 font-bold mt-1">Super User</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
                <User className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-auto pb-32 p-6 md:p-12 lg:px-24">
          {children}
        </main>

        {/* Floating Bottom Navigation (Innovative Dock) */}
        <nav className="floating-nav">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <div className={cn(
                  "flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all duration-300 gap-1",
                  isActive ? "bg-white/10 text-primary" : "text-muted-foreground hover:text-white"
                )}>
                  <div className={cn(
                    "gold-icon-container",
                    !isActive && "border-white/5 bg-transparent after:hidden"
                  )}>
                    <item.icon className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      isActive ? "text-primary scale-110" : "text-muted-foreground"
                    )} />
                  </div>
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-widest transition-opacity duration-300",
                    isActive ? "opacity-100" : "opacity-0"
                  )}>
                    {item.name}
                  </span>
                </div>
              </Link>
            );
          })}
          <div className="w-px h-8 bg-white/10 mx-2" />
          <Button variant="ghost" size="icon" className="rounded-xl text-destructive hover:bg-destructive/10">
            <LogOut className="w-5 h-5" />
          </Button>
        </nav>
      </div>
    </div>
  );
}