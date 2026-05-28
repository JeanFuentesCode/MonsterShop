"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  ClipboardList, 
  Settings, 
  Menu, 
  X,
  PieChart,
  LogOut,
  Bell,
  Search as SearchIcon
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const NAV_ITEMS = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Catálogo', href: '/products', icon: Package },
  { name: 'Pedidos', href: '/orders', icon: ClipboardList },
  { name: 'Análisis', href: '/analytics', icon: PieChart },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden font-body">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-border/50 bg-card/30 backdrop-blur-xl">
        <div className="p-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-200">
              <ClipboardList className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
              ComandaFlow
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 py-4">
          <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-2">Main Menu</p>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <span className={cn(
                  "group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive 
                    ? "bg-primary text-white shadow-glow" 
                    : "hover:bg-accent/50 text-muted-foreground hover:text-foreground"
                )}>
                  <item.icon className={cn("w-5 h-5 transition-colors", isActive ? "text-white" : "text-muted-foreground group-hover:text-primary")} />
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border/50 space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/50">
            <Settings className="w-5 h-5" />
            Configuración
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 rounded-xl text-destructive hover:bg-destructive/10">
            <LogOut className="w-5 h-5" />
            Salir
          </Button>
        </div>
      </aside>

      {/* Mobile Drawer */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-card border-r border-border/50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-8 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">ComandaFlow</span>
           </div>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full">
            <X className="w-5 h-5" />
          </Button>
        </div>
        <nav className="px-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
              <span className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium",
                pathname === item.href 
                  ? "bg-primary text-white shadow-glow" 
                  : "hover:bg-accent/50 text-muted-foreground"
              )}>
                <item.icon className="w-5 h-5" />
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-20 border-b border-border/50 bg-background/50 backdrop-blur-md flex items-center justify-between px-6 md:px-10 sticky top-0 z-40">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden rounded-xl border border-border/50"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div className="hidden md:flex flex-1 max-w-md relative group">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input 
              placeholder="Buscar reporte, pedido, producto..." 
              className="pl-10 h-10 bg-accent/30 border-none rounded-xl focus-visible:ring-1 focus-visible:ring-primary/50"
            />
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-xl relative text-muted-foreground hover:text-foreground">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background"></span>
            </Button>
            <div className="h-8 w-px bg-border/50 mx-2"></div>
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold leading-none">Admin Demo</p>
                <p className="text-xs text-muted-foreground mt-1">Super Admin</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-primary/60 p-[1px]">
                <div className="w-full h-full bg-background rounded-[11px] flex items-center justify-center font-bold text-sm text-primary">
                  AD
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6 md:p-10 lg:p-12 scrollbar-thin scrollbar-thumb-accent">
          {children}
        </main>
      </div>
    </div>
  );
}