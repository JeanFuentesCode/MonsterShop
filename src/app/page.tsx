'use client';

import { AppShell } from '@/components/app-shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  Package, 
  AlertTriangle, 
  Users,
  ArrowUpRight,
  Clock,
  Activity,
  Box,
  ShieldAlert
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Dashboard() {
  return (
    <AppShell>
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
              Control <span className="text-primary">Master</span>
            </h1>
            <p className="text-muted-foreground mt-3 font-bold uppercase tracking-[0.4em] text-xs flex items-center gap-2">
              <Activity className="w-3 h-3 text-primary animate-pulse" />
              Estatus del Sistema: Operativo 100%
            </p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-4 rounded-3xl glass text-center min-w-[120px]">
              <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Uptime</p>
              <p className="text-xl font-black italic">99.9%</p>
            </div>
            <div className="px-6 py-4 rounded-3xl glass text-center min-w-[120px]">
              <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Nivel Red</p>
              <p className="text-xl font-black italic">L4</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Flujo Mensual" value="$42.9k" change="+14.2%" icon={TrendingUp} color="text-primary" />
          <StatCard title="Unidades Stock" value="1,842" change="Estable" icon={Box} color="text-blue-400" />
          <StatCard title="Riesgos" value="02" change="-80%" icon={ShieldAlert} color="text-red-500" />
          <StatCard title="Terminales" value="12" change="Active" icon={Users} color="text-purple-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 border-none glass overflow-hidden rounded-[2.5rem]">
            <CardHeader className="p-8 border-b border-white/5 bg-white/[0.02]">
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl font-black italic uppercase tracking-tighter flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Alertas de Operación
                </CardTitle>
                <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {[
                { item: 'Inyector Hidráulico X2', status: 'CRÍTICO', stock: 2, color: 'text-red-500' },
                { item: 'Sintético Ultra V9', status: 'BAJO STOCK', stock: 12, color: 'text-yellow-500' },
                { item: 'Panel Control L3', status: 'BAJO STOCK', stock: 5, color: 'text-yellow-500' },
              ].map((alert, i) => (
                <div key={i} className="group flex items-center justify-between p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-primary/40 transition-all cursor-default">
                  <div className="flex items-center gap-6">
                    <div className={cn("w-2 h-12 rounded-full", i === 0 ? "bg-red-500" : "bg-yellow-500")} />
                    <div>
                      <p className="font-black text-xl uppercase tracking-tighter italic group-hover:text-primary transition-colors">{alert.item}</p>
                      <p className={cn("text-[10px] font-black tracking-[0.3em] uppercase mt-1", alert.color)}>{alert.status}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black italic">{alert.stock}</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Unid.</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-none bg-primary text-black rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(34,197,94,0.2)]">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2">Ingresos Hoy</p>
              <p className="text-5xl font-black italic tracking-tighter">$2,840.00</p>
              <div className="mt-8 flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase">Transacciones</p>
                  <p className="text-2xl font-black italic">24</p>
                </div>
                <ArrowUpRight className="w-10 h-10" />
              </div>
            </Card>

            <Card className="border-none glass rounded-[2.5rem] p-8">
              <CardTitle className="text-sm font-black uppercase tracking-widest mb-6">Métricas de Carga</CardTitle>
              <div className="space-y-6">
                <MetricBar label="Logística" value={85} />
                <MetricBar label="Personal" value={42} />
                <MetricBar label="Inventario" value={68} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function StatCard({ title, value, change, icon: Icon, color }: any) {
  return (
    <Card className="border-none glass rounded-[2.5rem] p-8 hover:scale-[1.02] transition-all cursor-default group">
      <div className="flex justify-between items-start">
        <div className="space-y-4">
          <div className={cn("p-3 rounded-2xl bg-white/5 w-fit group-hover:bg-primary/20 transition-colors", color)}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{title}</p>
            <p className="text-4xl font-black italic tracking-tighter mt-1">{value}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase bg-white/5 px-2 py-1 rounded-lg text-primary">{change}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

function MetricBar({ label, value }: { label: string, value: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <div className="h-full bg-primary" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}