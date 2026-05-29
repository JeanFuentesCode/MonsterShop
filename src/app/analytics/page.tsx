'use client';

import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Card } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart,
  Line
} from 'recharts';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingCart, 
  Users
} from 'lucide-react';

const dataVentas = [
  { name: 'Lun', ventas: 150 },
  { name: 'Mar', ventas: 200 },
  { name: 'Mié', ventas: 180 },
  { name: 'Jue', ventas: 220 },
  { name: 'Vie', ventas: 290 },
  { name: 'Sab', ventas: 250 },
  { name: 'Dom', ventas: 120 },
];

const dataIngresos = [
  { name: 'Sem 1', ingresos: 850 },
  { name: 'Sem 2', ingresos: 1200 },
  { name: 'Sem 3', ingresos: 950 },
  { name: 'Sem 4', ingresos: 1450 },
];

export default function AnalyticsPage() {
  return (
    <AppShell>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight uppercase">
              Repor<span className="text-primary">tes</span>
            </h1>
            <p className="text-muted-foreground mt-2 font-medium uppercase tracking-widest text-xs">Análisis de ventas y ganancias</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnalyticCard title="Total Ventas" value="$2,890" icon={DollarSign} color="text-primary" />
          <AnalyticCard title="Órdenes" value="24" icon={ShoppingCart} color="text-blue-500" />
          <AnalyticCard title="Crecimiento" value="+18%" icon={TrendingUp} color="text-green-500" />
          <AnalyticCard title="Clientes" value="15" icon={Users} color="text-purple-500" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-border bg-card p-6">
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Ventas por Día
            </h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataVentas}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: 'hsl(var(--primary))' }}
                  />
                  <Bar dataKey="ventas" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="border-border bg-card p-6">
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-primary" />
              Ingresos Semanales
            </h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dataIngresos}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                  <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: 'hsl(var(--primary))' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="ingresos" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-border bg-card p-6">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Promedio Pedidos</p>
            <p className="text-3xl font-bold mt-2">$96.33</p>
            <p className="text-xs text-green-500 mt-2">+5.2% vs semana anterior</p>
          </Card>
          <Card className="border-border bg-card p-6">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Tasa Conversión</p>
            <p className="text-3xl font-bold mt-2">64%</p>
            <p className="text-xs text-green-500 mt-2">Clientes satisfechos</p>
          </Card>
          <Card className="border-border bg-card p-6">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Stock Bajo</p>
            <p className="text-3xl font-bold mt-2">2</p>
            <p className="text-xs text-amber-500 mt-2">Productos a reponer</p>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

function AnalyticCard({ title, value, icon: Icon, color }: any) {
  return (
    <Card className="border-border bg-card p-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className={`p-2.5 rounded-lg bg-accent ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </Card>
  );
}