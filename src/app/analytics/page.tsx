'use client';

import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line
} from 'recharts';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingCart, 
  Target,
  Activity,
  Zap,
  Cpu
} from 'lucide-react';
import { cn } from '@/lib/utils';

const dataVentas = [
  { name: 'L1', sales: 4000 },
  { name: 'L2', sales: 3000 },
  { name: 'L3', sales: 5000 },
  { name: 'L4', sales: 2780 },
  { name: 'L5', sales: 6890 },
  { name: 'L6', sales: 4390 },
  { name: 'L7', sales: 7490 },
];

const dataStatus = [
  { name: 'VERIFICADOS', value: 65, color: 'hsl(var(--primary))' },
  { name: 'EN COLA', value: 25, color: '#f59e0b' },
  { name: 'RECHAZADOS', value: 10, color: '#ef4444' },
];

export default function AnalyticsPage() {
  return (
    <AppShell>
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
              Repor<span className="text-primary">tes</span>
            </h1>
            <p className="text-muted-foreground mt-3 font-bold uppercase tracking-[0.4em] text-xs">Inteligencia de Datos Industrial</p>
          </div>
          <div className="flex items-center gap-4 p-4 glass rounded-[2rem]">
            <Cpu className="text-primary w-8 h-8 animate-spin-slow" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Motor de Análisis</p>
              <p className="text-sm font-black italic">OPTIMIZADO v2.4</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnalyticCard title="Liquidez Neta" value="$452.3k" icon={DollarSign} color="text-primary" />
          <AnalyticCard title="ROI Estimado" value="+24.2%" icon={TrendingUp} color="text-blue-400" />
          <AnalyticCard title="Meta Carga" value="92%" icon={Target} color="text-purple-400" />
          <AnalyticCard title="Ops Active" value="124" icon={ShoppingCart} color="text-emerald-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-none glass rounded-[3rem] p-10">
            <CardHeader className="px-0 pt-0 pb-10">
              <CardTitle className="text-2xl font-black italic uppercase tracking-tighter flex items-center gap-4">
                <Activity className="w-7 h-7 text-primary" />
                Flujo de Carga Semanal
              </CardTitle>
            </CardHeader>
            <div className="h-[400px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataVentas}>
                  <CartesianGrid strokeDasharray="5 5" vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', color: '#fff' }}
                    itemStyle={{ color: 'hsl(var(--primary))', fontWeight: 'bold' }}
                  />
                  <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[12, 12, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="border-none glass rounded-[3rem] p-10 flex flex-col">
            <CardHeader className="px-0 pt-0 pb-10">
              <CardTitle className="text-2xl font-black italic uppercase tracking-tighter flex items-center gap-4">
                <Zap className="w-7 h-7 text-primary" />
                Distribución de Estatus
              </CardTitle>
            </CardHeader>
            <div className="flex-1 min-h-[300px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dataStatus}
                    innerRadius={110}
                    outerRadius={140}
                    paddingAngle={10}
                    dataKey="value"
                  >
                    {dataStatus.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <p className="text-4xl font-black italic">100%</p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Total Ops</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10">
              {dataStatus.map((s) => (
                <div key={s.name} className="text-center p-4 rounded-[1.5rem] bg-white/[0.03] border border-white/5">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2">{s.name}</p>
                  <p className="text-2xl font-black italic" style={{ color: s.color }}>{s.value}%</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

function AnalyticCard({ title, value, icon: Icon, color }: any) {
  return (
    <div className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-primary/40 transition-all group shadow-2xl flex items-center justify-between">
      <div>
        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-2">{title}</p>
        <p className="text-4xl font-black italic tracking-tighter">{value}</p>
      </div>
      <div className={cn("p-6 rounded-[1.5rem] bg-white/5 transition-transform group-hover:scale-110", color)}>
        <Icon className="w-8 h-8" />
      </div>
    </div>
  );
}