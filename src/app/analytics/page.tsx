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
  LineChart, 
  Line,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingCart, 
  Target,
  ArrowUpRight,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

const dataVentas = [
  { name: 'Lun', sales: 4000 },
  { name: 'Mar', sales: 3000 },
  { name: 'Mie', sales: 2000 },
  { name: 'Jue', sales: 2780 },
  { name: 'Vie', sales: 1890 },
  { name: 'Sab', sales: 2390 },
  { name: 'Dom', sales: 3490 },
];

const dataStatus = [
  { name: 'Pagados', value: 45, color: '#10b981' },
  { name: 'Pendientes', value: 30, color: '#f59e0b' },
  { name: 'Cancelados', value: 5, color: '#ef4444' },
];

export default function AnalyticsPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-black tracking-tight flex items-center gap-3">
            <span className="text-primary">/</span> ANALÍTICAS
          </h1>
          <p className="text-muted-foreground mt-1">Reportes técnicos de flujo de caja y operación.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnalyticCard title="Ingresos Totales" value="$45,230.80" icon={DollarSign} color="text-primary" />
          <AnalyticCard title="Promedio Pedido" value="$542.10" icon={TrendingUp} color="text-blue-500" />
          <AnalyticCard title="Tasa Conversión" value="4.2%" icon={Target} color="text-purple-500" />
          <AnalyticCard title="Pedidos Activos" value="12" icon={ShoppingCart} color="text-emerald-500" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue Chart */}
          <Card className="border-none shadow-xl bg-card/50 backdrop-blur-sm p-6">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-xl font-black italic flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Flujo de Ventas Semanal
              </CardTitle>
            </CardHeader>
            <div className="h-[350px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataVentas}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                  <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '16px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Status Distribution */}
          <Card className="border-none shadow-xl bg-card/50 backdrop-blur-sm p-6 flex flex-col">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-xl font-black italic flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Estado de Órdenes
              </CardTitle>
            </CardHeader>
            <div className="h-[300px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dataStatus}
                    innerRadius={80}
                    outerRadius={100}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {dataStatus.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '16px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {dataStatus.map((s) => (
                <div key={s.name} className="text-center p-3 rounded-2xl bg-muted/30">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{s.name}</p>
                  <p className="text-xl font-black" style={{ color: s.color }}>{s.value}%</p>
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
    <div className="bg-card/50 p-6 rounded-[2rem] border border-border/50 hover:border-primary/50 transition-all group shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{title}</p>
          <p className="text-2xl font-black">{value}</p>
        </div>
        <div className={cn("p-3 rounded-2xl bg-muted transition-transform group-hover:scale-110", color)}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
