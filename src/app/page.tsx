'use client';

import { AppShell } from '@/components/app-shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  Package, 
  AlertTriangle, 
  Users,
  ArrowUpRight,
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Dashboard() {
  return (
    <AppShell>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-black tracking-tight flex items-center gap-3">
            <span className="text-primary">/</span> DASHBOARD
          </h1>
          <p className="text-muted-foreground mt-1 uppercase tracking-widest text-[10px] font-bold">Visión general del rendimiento industrial.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Ventas del Mes" value="$12,450" change="+12%" icon={TrendingUp} color="text-emerald-500" />
          <StatCard title="Stock Total" value="842" change="Normal" icon={Package} color="text-blue-500" />
          <StatCard title="Alertas Críticas" value="3" change="-2" icon={AlertTriangle} color="text-red-500" />
          <StatCard title="Clientes Activos" value="124" change="+5" icon={Users} color="text-purple-500" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 border-none shadow-xl bg-card/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Alertas de Stock
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { item: 'Motor Industrial 400W', status: 'Crítico', stock: 2, color: 'bg-red-500' },
                  { item: 'Aceite Sintético V5', status: 'Bajo', stock: 15, color: 'bg-yellow-500' },
                  { item: 'Filtro de Aire XL', status: 'Bajo', stock: 8, color: 'bg-yellow-500' },
                ].map((alert, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-all">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${alert.color} animate-pulse`} />
                      <div>
                        <p className="font-bold text-sm md:text-base">{alert.item}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{alert.status}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-black">{alert.stock}</p>
                      <p className="text-[10px] text-muted-foreground uppercase">unidades</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl bg-primary/10 border-t-4 border-primary">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Resumen Diario</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 rounded-2xl bg-background/50 border border-primary/20">
                <p className="text-sm text-muted-foreground mb-1 italic">Ventas de hoy</p>
                <p className="text-3xl font-black text-primary">$1,240.00</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm items-center">
                  <span className="text-muted-foreground">Pedidos nuevos</span>
                  <span className="font-bold bg-muted px-2 py-1 rounded-md">8</span>
                </div>
                <div className="flex justify-between text-sm items-center">
                  <span className="text-muted-foreground">Productos agotados</span>
                  <span className="font-bold text-red-500">2</span>
                </div>
                <div className="flex justify-between text-sm items-center">
                  <span className="text-muted-foreground">Pendientes envío</span>
                  <span className="font-bold text-blue-500">14</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

function StatCard({ title, value, change, icon: Icon, color }: any) {
  return (
    <Card className="border-none shadow-lg bg-card/40 hover:bg-card/60 transition-all hover:scale-[1.02] cursor-default group overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{title}</p>
            <p className="text-3xl font-black tabular-nums">{value}</p>
            <div className="flex items-center gap-1 text-[10px] font-bold">
              <ArrowUpRight className="w-3 h-3 text-primary" />
              <span className="text-primary">{change}</span>
            </div>
          </div>
          <div className={cn("p-4 rounded-2xl bg-muted group-hover:bg-primary/20 transition-colors", color)}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}