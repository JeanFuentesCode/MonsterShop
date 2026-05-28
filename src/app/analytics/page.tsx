"use client"

import { AppShell } from "@/components/layout/app-shell";
import { useComandaStore } from "@/lib/store";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
} from 'recharts';
import { DollarSign, Package, TrendingUp, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AnalyticsPage() {
  const { products, orders, isLoaded } = useComandaStore();

  if (!isLoaded) return null;

  const totalRevenue = orders.filter(o => o.status === 'paid').reduce((acc, o) => acc + o.totalAmount, 0);
  const pendingRevenue = orders.filter(o => o.status === 'pending').reduce((acc, o) => acc + o.totalAmount, 0);
  const lowStock = products.filter(p => p.stock <= p.minStock).length;

  // Datos para gráfico de barras
  const salesData = [
    { name: 'Ene', total: totalRevenue * 0.1 },
    { name: 'Feb', total: totalRevenue * 0.2 },
    { name: 'Mar', total: totalRevenue * 0.4 },
    { name: 'Abr', total: totalRevenue * 0.3 },
  ];

  // Datos para Pie Chart
  const statusData = [
    { name: 'Pagado', value: orders.filter(o => o.status === 'paid').length },
    { name: 'Pendiente', value: orders.filter(o => o.status === 'pending').length },
    { name: 'Cancelado', value: orders.filter(o => o.status === 'canceled').length },
  ];

  const COLORS = ['#22c55e', '#eab308', '#ef4444'];

  return (
    <AppShell>
      <div className="space-y-6 md:space-y-8">
        <header className="px-1">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">Análisis Industrial</h2>
          <p className="text-muted-foreground text-xs md:text-sm font-medium">Métricas de rendimiento en tiempo real.</p>
        </header>

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <AnalyticCard label="Ingresos" value={`$${totalRevenue.toLocaleString()}`} icon={DollarSign} color="text-primary" />
          <AnalyticCard label="Pendientes" value={`$${pendingRevenue.toLocaleString()}`} icon={TrendingUp} color="text-yellow-500" />
          <AnalyticCard label="Productos" value={products.length.toString()} icon={Package} color="text-blue-500" />
          <AnalyticCard label="Críticos" value={lowStock.toString()} icon={AlertCircle} color="text-destructive" />
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <Card className="bg-card/50 rounded-3xl overflow-hidden border-border shadow-sm">
            <CardHeader className="p-5 pb-0">
              <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Flujo de Ventas</CardTitle>
            </CardHeader>
            <CardContent className="h-[250px] md:h-[300px] p-5">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--foreground))' }}
                    cursor={{ fill: 'hsl(var(--muted)/0.4)' }}
                  />
                  <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-card/50 rounded-3xl overflow-hidden border-border shadow-sm">
            <CardHeader className="p-5 pb-0">
              <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Estado de Órdenes</CardTitle>
            </CardHeader>
            <CardContent className="h-[250px] md:h-[300px] flex items-center justify-center p-5">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

function AnalyticCard({ label, value, icon: Icon, color }: any) {
  return (
    <Card className="bg-card/40 border-border rounded-3xl p-5 md:p-6 relative overflow-hidden group shadow-sm">
      <div className="flex items-center justify-between relative z-10">
        <div className="space-y-0.5 md:space-y-1">
          <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">{label}</p>
          <p className="text-xl md:text-2xl font-black">{value}</p>
        </div>
        <div className={cn("p-2.5 md:p-3 rounded-2xl bg-muted transition-transform group-hover:scale-110 shrink-0", color)}>
          <Icon className="w-4 h-4 md:w-5 h-5" />
        </div>
      </div>
    </Card>
  );
}