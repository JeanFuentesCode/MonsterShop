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
  Zap,
  Cpu
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Dashboard() {
  return (
    <AppShell>
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">
              Resumen <span className="text-primary">Operativo</span>
            </h1>
            <p className="text-muted-foreground mt-3 font-bold uppercase tracking-[0.4em] text-xs">Monitoreo de Planta Industrial L4</p>
          </div>
          <div className="flex items-center gap-4 p-4 glass rounded-3xl">
            <Cpu className="text-primary w-8 h-8 animate-pulse" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Estado de Núcleo</p>
              <p className="text-sm font-black text-primary uppercase">Optimizado al 100%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Liquidez Mensual" value="$42,940" change="+14.2%" icon={TrendingUp} />
          <StatCard title="Activos en Stock" value="1,842" change="Estable" icon={Box} />
          <StatCard title="Fallas Técnicas" value="02" change="-80%" icon={ShieldAlert} trend="down" />
          <StatCard title="Personal Activo" value="12" change="Online" icon={Users} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 border-white/5 bg-card/40 backdrop-blur-sm rounded-[2.5rem] overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between border-b border-white/5 p-8">
              <CardTitle className="text-xl font-black uppercase italic tracking-tighter flex items-center gap-3">
                <Activity className="w-6 h-6 text-primary" />
                Monitor de Suministros
              </CardTitle>
              <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Ver bitácora completa</button>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {[
                { item: 'Inyector Hidráulico X2', status: 'CRÍTICO', stock: 2, color: 'text-red-500' },
                { item: 'Aceite Sintético V9', status: 'BAJO STOCK', stock: 12, color: 'text-amber-500' },
                { item: 'Panel Control L3', status: 'ESTABLE', stock: 54, color: 'text-primary' },
              ].map((alert, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-3xl bg-white/[0.02] border border-white/5 group hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-6">
                    <div className={cn("w-2 h-12 rounded-full", alert.status === 'CRÍTICO' ? "bg-red-500" : alert.status === 'BAJO STOCK' ? "bg-amber-500" : "bg-primary")} />
                    <div>
                      <p className="font-black text-lg tracking-tight uppercase">{alert.item}</p>
                      <p className={cn("text-[10px] font-black uppercase tracking-widest mt-1", alert.color)}>{alert.status}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black italic">{alert.stock}</p>
                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Unidades</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-none bg-primary text-white p-10 rounded-[2.5rem] shadow-2xl shadow-primary/20 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-80">Rendimiento Hoy</p>
              <p className="text-5xl font-black tracking-tighter italic">$2,840.00</p>
              <div className="mt-12 flex justify-between items-end relative z-10">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Ops. Finalizadas</p>
                  <p className="text-2xl font-black">24</p>
                </div>
                <div className="w-14 h-14 bg-black/10 rounded-2xl flex items-center justify-center">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
              </div>
            </Card>

            <Card className="border-white/5 bg-card/40 p-10 rounded-[2.5rem]">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mb-8">Estado de Infraestructura</h3>
              <div className="space-y-6">
                <Metric label="Logística de Salida" value={85} />
                <Metric label="Capacidad de Producción" value={42} />
                <Metric label="Gestión de Almacén" value={68} />
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
    <Card className="border-white/5 bg-card/40 p-8 rounded-[2rem] hover:bg-card/60 transition-all duration-300 group">
      <div className="flex flex-col gap-6">
        <div className="p-4 rounded-2xl bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-white transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">{title}</p>
          <p className="text-3xl font-black tracking-tight">{value}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={cn(
            "text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-widest",
            trend === "up" ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
          )}>
            {change}
          </span>
        </div>
      </div>
    </Card>
  );
}

function Metric({ label, value }: { label: string, value: number }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
        <span>{label}</span>
        <span className={cn(value > 80 ? "text-primary" : "text-foreground")}>{value}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <div className={cn("h-full transition-all duration-1000", value < 50 ? "bg-amber-500" : "bg-primary")} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}