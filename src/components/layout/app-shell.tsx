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
  PieChart
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
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r bg-card">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <ClipboardList className="w-8 h-8 text-secondary" />
            ComandaFlow
          </h1>
        </div>
        <nav className="flex-1 px-4 space-y-2 py-4">
          {NAV_ITEMS.map((item) => (
            <Link key={item.name} href={item.href}>
              <span className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                pathname === item.href 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "hover:bg-accent hover:text-accent-foreground text-muted-foreground"
              )}>
                <item.icon className="w-5 h-5" />
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Settings className="w-5 h-5" />
            Configuración
          </Button>
        </div>
      </aside>

      {/* Mobile Drawer */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-card transform transition-transform duration-200 ease-in-out md:hidden",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">ComandaFlow</h1>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </Button>
        </div>
        <nav className="px-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
              <span className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                pathname === item.href 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "hover:bg-accent hover:text-accent-foreground text-muted-foreground"
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
        <header className="h-16 border-b bg-card flex items-center justify-between px-4 md:px-8">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </Button>
          <div className="flex-1 px-4">
             <span className="font-semibold text-muted-foreground capitalize">
               {pathname === '/' ? 'Dashboard' : pathname.replace('/', '')}
             </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-xs">
              AD
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}