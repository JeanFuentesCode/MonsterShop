'use client';

import { AppShell } from '@/components/app-shell';
import { Card } from '@/components/ui/card';
import { 
  TrendingUp, 
  Box, 
  ShieldAlert, 
  Users,
  ArrowUpRight,
  Activity
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Dashboard() {
  return (
    <AppShell>
      <div className="space-y-10">
        <header>
          <h1 className="text-3xl font-black tracking-tight uppercase italic">
            Dashboard <span className="text-primary">Principal</span>
          </h1>
          <p className="text-muted-foreground text-sm font-medium mt-1">
            Resumen de operaciones y métricas de rendimiento actuales.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Ventas del Mes" value="$42,940" change="+12.5%" icon={TrendingUp} />
          <StatCard title="Stock Actual" value="1,842" change="Normal" icon={Box} />
          <StatCard title="Incidencias" value="02" change="-20%" icon={ShieldAlert} trend="down" />
          <StatCard title="Staff Online" value="12" change="Activo" icon={Users} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 border-border bg-card/50 p-6 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-black uppercase italic text-sm flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary" /> Alertas de Inventario
              </h3>
              <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Ver Todo</button>
            </div>
            <div className="space-y-3">
              {[
                { item: 'Motor Industrial X2', status: 'Crítico', stock: 2, color: 'bg-red-500' },
                { item: 'Aceite Sintético V9', status: 'Bajo', stock: 12, color: 'bg-amber-500' },
                { item: 'Filtro Aire XL', status: 'Estable', stock: 45, color: 'bg-primary' },
              ].map((alert, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-background border border-border group hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={cn("w-1.5 h-1.5 rounded-full", alert.color)} />
                    <span className="font-bold text-sm uppercase">{alert.item}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-black italic">{alert.stock}</span>
                    <span className="text-[10px] text-muted-foreground ml-2 font-bold uppercase tracking-widest">Unidades</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-primary text-primary-foreground p-8 rounded-[2rem] flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
            <div className="relative z-10">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">Total Ingresos Hoy</p>
              <h2 className="text-4xl font-black italic tracking-tighter">$2,840.00</h2>
            </div>
            <div className="mt-8 flex justify-between items-end relative z-10">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Procesados</p>
                <p className="text-xl font-black">24 Órdenes</p>
              </div>
              <div className="p-3 bg-white/20 rounded-xl">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

function StatCard({ title, value, change, icon: Icon, trend = "up" }: any) {
  return (
    <Card className="p-6 border-border bg-card/30 hover:bg-card/60 transition-colors">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{title}</p>
          <p className="text-2xl font-black tracking-tight">{value}</p>
        </div>
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <Icon className="w-4 h-4" />
        </div>
      </div>
      <div className="mt-4">
        <span className={cn(
          "text-[10px] font-black px-2 py-0.5 rounded-md uppercase",
          trend === "up" ? "bg-primary/20 text-primary" : "bg-red-500/10 text-red-500"
        )}>
          {change}
        </span>
      </div>
    </Card>
  );
}