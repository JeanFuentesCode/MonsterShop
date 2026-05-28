'use client';

import { AppShell } from '@/components/app-shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  Box, 
  ShieldAlert, 
  Users,
  Activity,
  ArrowUpRight,
  Clock,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Dashboard() {
  return (
    <AppShell>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Panel de Control</h1>
          <p className="text-slate-400 text-sm mt-1">Estatus del Sistema: Operativo L4</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Ingresos Mensuales" value="$42,940" change="+14.2%" icon={TrendingUp} />
          <StatCard title="Stock Total" value="1,842" change="Estable" icon={Box} />
          <StatCard title="Alertas Críticas" value="02" change="-80%" icon={ShieldAlert} trend="down" />
          <StatCard title="Operadores" value="12" change="Activos" icon={Users} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 border-white/5 bg-slate-900/40 backdrop-blur-md">
            <CardHeader className="flex flex-row items-center justify-between border-b border-white/5 py-4">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Monitor de Operaciones
              </CardTitle>
              <button className="text-xs font-semibold text-primary hover:underline">Ver bitácora</button>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {[
                { item: 'Inyector Hidráulico X2', status: 'CRÍTICO', stock: 2, color: 'text-red-500' },
                { item: 'Sintético Ultra V9', status: 'BAJO STOCK', stock: 12, color: 'text-amber-500' },
                { item: 'Panel Control L3', status: 'BAJO STOCK', stock: 5, color: 'text-amber-500' },
              ].map((alert, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 group hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={cn("w-1.5 h-10 rounded-full", alert.status === 'CRÍTICO' ? "bg-red-500" : "bg-amber-500")} />
                    <div>
                      <p className="font-semibold text-sm text-slate-200">{alert.item}</p>
                      <p className={cn("text-[10px] font-bold uppercase tracking-wider mt-0.5", alert.color)}>{alert.status}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-white">{alert.stock}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">Uds.</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-none bg-primary text-slate-950 p-6 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-wider mb-1">Ingresos de Hoy</p>
              <p className="text-4xl font-bold tracking-tight">$2,840.00</p>
              <div className="mt-6 flex justify-between items-end">
                <div>
                  <p className="text-xs font-bold uppercase opacity-70">Transacciones</p>
                  <p className="text-xl font-bold">24</p>
                </div>
                <div className="w-10 h-10 bg-slate-950/10 rounded-lg flex items-center justify-center">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </Card>

            <Card className="border-white/5 bg-slate-900/40 p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Carga de Sistema</h3>
              <div className="space-y-4">
                <Metric label="Logística" value={85} />
                <Metric label="Producción" value={42} />
                <Metric label="Inventario" value={68} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function StatCard({ title, value, change, icon: Icon, trend = "up" }: any) {
  return (
    <Card className="border-white/5 bg-slate-900/40 p-6 hover:bg-slate-900/60 transition-all group">
      <div className="flex items-start justify-between">
        <div className="space-y-4">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{title}</p>
            <p className="text-2xl font-bold text-white mt-1">{value}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className={cn(
              "text-[10px] font-bold px-1.5 py-0.5 rounded",
              trend === "up" ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
            )}>
              {change}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

function Metric({ label, value }: { label: string, value: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-bold uppercase text-slate-400">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <div className={cn("h-full bg-primary", value < 50 ? "bg-amber-500" : "bg-primary")} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
