"use client"

import { AppShell } from "@/components/layout/app-shell";
import { useComandaStore } from "@/lib/store";
import { 
  TrendingUp, 
  CreditCard, 
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Calendar,
  Filter,
  ChevronRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const { products, orders, categories, isLoaded } = useComandaStore();

  if (!isLoaded) return null;

  const totalSales = orders.reduce((acc, o) => acc + o.totalAmount, 0);
  const paidSales = orders.filter(o => o.status === 'paid').reduce((acc, o) => acc + o.totalAmount, 0);
  const pendingDebts = totalSales - paidSales;
  const lowStockItems = products.filter(p => p.stock <= p.minStock);

  return (
    <AppShell>
      <div className="space-y-12 max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/5 pb-10">
          <div className="space-y-2">
            <h2 className="text-5xl font-black tracking-tighter text-white">CENTRO DE <span className="text-gold">MANDO</span></h2>
            <p className="text-muted-foreground text-lg max-w-md">Estrategia y analítica de alto rendimiento para tu negocio.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 gap-2 h-12 px-6">
              <Calendar className="w-4 h-4" />
              Histórico
            </Button>
            <Button className="rounded-2xl bg-primary text-black font-bold shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-primary/50 gap-2 h-12 px-8 transition-all">
              Generar Reporte
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard 
            title="Facturación Total" 
            value={`$${totalSales.toLocaleString()}`} 
            icon={TrendingUp} 
            trend="+15.8%" 
            trendUp={true} 
            description="Crecimiento neto"
          />
          <StatCard 
            title="Capital en Calle" 
            value={`$${pendingDebts.toLocaleString()}`} 
            icon={CreditCard} 
            trend="-5.4%" 
            trendUp={false} 
            description="Cartera pendiente"
            isDestructive={pendingDebts > 0}
          />
          <StatCard 
            title="Eficiencia Operativa" 
            value={orders.filter(o => o.status !== 'paid').length} 
            icon={Activity} 
            description="Pedidos en cola"
          />
          <StatCard 
            title="Riesgo de Inventario" 
            value={lowStockItems.length} 
            icon={AlertTriangle} 
            description="Stock bajo mínimos"
            isWarning={lowStockItems.length > 0}
          />
        </div>

        {/* Main Analytics Layout */}
        <div className="grid gap-8 lg:grid-cols-12">
          <Card className="lg:col-span-8 border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent rounded-[2.5rem] overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between p-10 pb-4">
              <div>
                <CardTitle className="text-2xl font-bold tracking-tight">Análisis de Desempeño</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">Ingresos vs. Proyecciones mensuales.</p>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5"><Filter className="w-4 h-4 text-gold"/></Button>
            </CardHeader>
            <CardContent className="h-[450px] flex flex-col items-center justify-center p-10">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center mx-auto ring-1 ring-primary/30 shadow-[0_0_30px_rgba(255,215,0,0.1)]">
                  <TrendingUp className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Datos en Tiempo Real</h3>
                  <p className="text-muted-foreground max-w-sm mx-auto mt-2">Tu motor de inteligencia está procesando las transacciones actuales.</p>
                </div>
                <Button variant="outline" className="rounded-xl border-white/10 px-8">Ver Detalles</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-4 border-white/5 bg-gradient-to-bl from-white/[0.03] to-transparent rounded-[2.5rem]">
            <CardHeader className="p-10 pb-4">
              <CardTitle className="text-2xl font-bold tracking-tight">Stock Pro</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">Monitoreo de alta rotación.</p>
            </CardHeader>
            <CardContent className="p-10 pt-4 space-y-10">
              {products.slice(0, 5).map(p => (
                <div key={p.id} className="group cursor-pointer">
                  <div className="flex justify-between items-end mb-3">
                    <div>
                      <span className="font-bold text-base block group-hover:text-gold transition-colors">{p.name}</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                        {categories.find(c => c.id === p.category)?.name || 'Sin Categoría'}
                      </span>
                    </div>
                    <span className="text-sm font-mono text-primary font-black">{p.stock} U.</span>
                  </div>
                  <div className="relative h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
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
                 <div className="py-20 text-center text-muted-foreground italic border-2 border-dashed border-white/5 rounded-3xl">No hay registros</div>
              )}
              <Button className="w-full rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 h-14 text-sm font-bold gap-2">
                Catálogo Estratégico
                <ChevronRight className="w-4 h-4" />
              </Button>
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
      "border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent rounded-[2rem] transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative",
      isDestructive && "border-destructive/20 shadow-[0_0_20px_rgba(255,0,0,0.05)]",
      isWarning && "border-primary/20"
    )}>
      {/* Golden Highlight top edge */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <CardHeader className="flex flex-row items-center justify-between pb-2 p-8">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{title}</span>
        <div className={cn(
          "p-3 rounded-2xl transition-all duration-500",
          isDestructive ? "bg-destructive/10 text-destructive" : 
          isWarning ? "bg-primary/10 text-primary" : "bg-white/5 text-primary group-hover:bg-primary group-hover:text-black"
        )}>
          <Icon className="h-6 w-6" />
        </div>
      </CardHeader>
      <CardContent className="p-8 pt-0">
        <div className="text-4xl font-black tracking-tighter mb-2 text-white">{value}</div>
        <div className="flex items-center gap-2">
          {trend && (
            <span className={cn(
              "text-[10px] font-black flex items-center px-2 py-1 rounded-lg",
              trendUp ? "bg-primary/20 text-primary" : "bg-destructive/20 text-destructive"
            )}>
              {trendUp ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
              {trend}
            </span>
          )}
          <span className="text-[11px] text-muted-foreground font-bold uppercase tracking-wider">{description}</span>
        </div>
      </CardContent>
    </Card>
  );
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');