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
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Inventario', href: '/stock', icon: Package },
  { name: 'Pedidos', href: '/orders', icon: ShoppingCart },
  { name: 'Analíticas', href: '/analytics', icon: BarChart3 },
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
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-card border-r border-border/50">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Zap className="text-primary-foreground w-6 h-6 fill-current" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic">MonsterShop</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                pathname === item.href 
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" 
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}>
                <item.icon className={cn("w-5 h-5", pathname === item.href ? "" : "group-hover:scale-110 transition-transform")} />
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-border/50 space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-3 rounded-xl" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            Modo {theme === 'dark' ? 'Claro' : 'Oscuro'}
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10 rounded-xl" asChild>
            <Link href="/login">
              <LogOut className="w-5 h-5" />
              Cerrar Sesión
            </Link>
          </Button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header Mobile */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-border/50 bg-card/50 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <Zap className="text-primary w-6 h-6 fill-current" />
            <span className="text-lg font-black tracking-tighter italic uppercase">Monster</span>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="rounded-full">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[100] bg-background/95 backdrop-blur-lg flex flex-col p-8 pt-20">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4 rounded-full">
              <X />
            </Button>
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                  <span className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl text-xl font-bold border border-transparent",
                    pathname === item.href ? "bg-primary text-primary-foreground border-primary" : "bg-muted text-muted-foreground"
                  )}>
                    <item.icon className="w-6 h-6" />
                    {item.name}
                  </span>
                </Link>
              ))}
              <div className="pt-8 space-y-4">
                 <Button variant="outline" className="w-full py-6 rounded-2xl text-lg font-bold gap-3" onClick={toggleTheme}>
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  Modo {theme === 'dark' ? 'Claro' : 'Oscuro'}
                </Button>
                <Button variant="destructive" className="w-full py-6 rounded-2xl text-lg font-bold" asChild>
                  <Link href="/login">Cerrar Sesión</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </main>
    </div>
  );
}