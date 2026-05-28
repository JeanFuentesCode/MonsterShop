"use client"

import { AppShell } from "@/components/layout/app-shell";
import { useComandaStore } from "@/lib/store";
import { 
  TrendingUp, 
  Users, 
  CreditCard, 
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Calendar,
  Filter
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const { products, orders, isLoaded } = useComandaStore();

  if (!isLoaded) return null;

  const totalSales = orders.reduce((acc, o) => acc + o.totalAmount, 0);
  const paidSales = orders.filter(o => o.status === 'paid').reduce((acc, o) => acc + o.totalAmount, 0);
  const pendingDebts = totalSales - paidSales;
  const lowStockItems = products.filter(p => p.stock <= p.minStock);

  return (
    <AppShell>
      <div className="space-y-10 max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight">Dashboard General</h2>
            <p className="text-muted-foreground mt-2 text-lg">Monitorea el crecimiento y stock de tu negocio en tiempo real.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-xl border-border/50 gap-2 h-11 px-6">
              <Calendar className="w-4 h-4" />
              Ultimos 30 días
            </Button>
            <Button className="rounded-xl bg-primary text-white shadow-glow gap-2 h-11 px-6">
              Descargar PDF
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Ventas Totales" 
            value={`$${totalSales.toLocaleString()}`} 
            icon={TrendingUp} 
            trend="+12.5%" 
            trendUp={true} 
            description="vs. mes anterior"
          />
          <StatCard 
            title="Deudas Pendientes" 
            value={`$${pendingDebts.toLocaleString()}`} 
            icon={CreditCard} 
            trend="-3.2%" 
            trendUp={false} 
            description="Cuentas por cobrar"
            isDestructive={pendingDebts > 0}
          />
          <StatCard 
            title="Pedidos Activos" 
            value={orders.filter(o => o.status !== 'paid').length} 
            icon={Activity} 
            description="En proceso de entrega"
          />
          <StatCard 
            title="Stock Crítico" 
            value={lowStockItems.length} 
            icon={AlertTriangle} 
            description="Productos por reponer"
            isWarning={lowStockItems.length > 0}
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-7">
          <Card className="lg:col-span-4 border-border/50 bg-card/20 backdrop-blur-sm shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between p-8 pb-4">
              <div>
                <CardTitle className="text-xl font-bold">Rendimiento Mensual</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">Comparativa de ingresos y gastos.</p>
              </div>
              <Button variant="ghost" size="icon" className="rounded-xl"><Filter className="w-4 h-4"/></Button>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center p-8">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto ring-8 ring-primary/5">
                  <TrendingUp className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-bold">Analíticas en tiempo real</p>
                  <p className="text-muted-foreground max-w-xs mx-auto">Tus gráficos se están procesando basados en los últimos pedidos registrados.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3 border-border/50 bg-card/20 backdrop-blur-sm shadow-xl rounded-3xl">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-xl font-bold">Estado del Inventario</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">Productos con mayor rotación.</p>
            </CardHeader>
            <CardContent className="p-8 pt-4 space-y-8">
              {products.slice(0, 5).map(p => (
                <div key={p.id} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="font-bold text-sm block">{p.name}</span>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{categories.find(c => c.id === p.category)?.name}</span>
                    </div>
                    <span className="text-sm font-mono text-primary font-bold">{p.stock} un.</span>
                  </div>
                  <div className="relative h-2.5 w-full bg-accent/30 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "absolute top-0 left-0 h-full transition-all duration-1000",
                        p.stock <= p.minStock ? "bg-destructive" : "bg-primary"
                      )} 
                      style={{ width: `${Math.min(100, (p.stock / (p.minStock * 5)) * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
              {products.length === 0 && (
                 <div className="py-10 text-center text-muted-foreground italic">No hay productos registrados</div>
              )}
              <Button variant="outline" className="w-full rounded-2xl border-border/50 h-12 text-sm">Ver Catálogo Completo</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

function StatCard({ title, value, icon: Icon, trend, trendUp, description, isDestructive, isWarning }: any) {
  return (
    <Card className={cn(
      "border-border/50 bg-card/30 backdrop-blur-sm shadow-lg rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:bg-card/40",
      isDestructive && "border-destructive/20",
      isWarning && "border-primary/20"
    )}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 p-6">
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{title}</span>
        <div className={cn(
          "p-2.5 rounded-xl",
          isDestructive ? "bg-destructive/10 text-destructive" : 
          isWarning ? "bg-primary/10 text-primary" : "bg-accent text-accent-foreground"
        )}>
          <Icon className="h-5 w-5" />
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="text-3xl font-extrabold tracking-tighter mb-1">{value}</div>
        <div className="flex items-center gap-2">
          {trend && (
            <span className={cn(
              "text-xs font-bold flex items-center px-1.5 py-0.5 rounded-md",
              trendUp ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
            )}>
              {trendUp ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
              {trend}
            </span>
          )}
          <span className="text-xs text-muted-foreground font-medium">{description}</span>
        </div>
      </CardContent>
    </Card>
  );
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');