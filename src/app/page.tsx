"use client"

import { AppShell } from "@/components/layout/app-shell";
import { useComandaStore } from "@/lib/store";
import { 
  CreditCard, 
  AlertCircle,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from 'next/link';
import { cn } from "@/lib/utils";

export default function Dashboard() {
  const { products, orders, categories, isLoaded } = useComandaStore();

  if (!isLoaded) return null;

  const totalRevenue = orders.reduce((acc, o) => acc + (o.status === 'paid' ? o.totalAmount : 0), 0);
  const pendingOrders = orders.filter(o => o.status === 'pending').length;
  const lowStockCount = products.filter(p => p.stock <= p.minStock).length;

  return (
    <AppShell>
      <div className="space-y-10">
        <header>
          <h2 className="text-4xl font-black tracking-tighter uppercase mb-1">Resumen Operativo</h2>
          <p className="text-muted-foreground text-sm font-medium">Control en tiempo real de MonsterShop.</p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard 
            label="Cobrado" 
            value={`$${totalRevenue.toLocaleString()}`} 
            icon={TrendingUp} 
            color="text-primary"
          />
          <StatCard 
            label="Pendientes" 
            value={pendingOrders.toString()} 
            icon={CreditCard} 
            color="text-yellow-500"
          />
          <StatCard 
            label="Stock Crítico" 
            value={lowStockCount.toString()} 
            icon={AlertCircle} 
            color={lowStockCount > 0 ? "text-destructive" : "text-primary"}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground">Alertas de Stock</h3>
              <Link href="/products" className="text-[10px] text-primary hover:underline flex items-center gap-1 font-bold">VER TODO <ArrowRight className="w-2 h-2"/></Link>
            </div>
            <div className="space-y-2">
              {products.slice(0, 4).map(p => (
                <div key={p.id} className="flex justify-between items-center bg-white/[0.03] border border-white/5 p-4 rounded-xl">
                  <div>
                    <span className="text-sm font-bold block">{p.name}</span>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{categories.find(c => c.id === p.category)?.name}</span>
                  </div>
                  <span className={cn("text-sm font-mono font-bold", p.stock <= p.minStock ? "text-destructive" : "text-primary")}>
                    {p.stock} U.
                  </span>
                </div>
              ))}
              {products.length === 0 && <p className="text-muted-foreground italic text-xs text-center py-8">No hay productos registrados.</p>}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground">Últimos Pedidos</h3>
              <Link href="/orders" className="text-[10px] text-primary hover:underline flex items-center gap-1 font-bold">VER TODO <ArrowRight className="w-2 h-2"/></Link>
            </div>
            <div className="space-y-2">
              {orders.slice(0, 4).map(o => (
                <div key={o.id} className="flex justify-between items-center bg-white/[0.03] border border-white/5 p-4 rounded-xl">
                  <div>
                    <p className="text-sm font-bold">{o.customerName}</p>
                    <p className="text-[9px] text-muted-foreground uppercase font-black">{o.reference || 'Sin Ref'}</p>
                  </div>
                  <span className={cn("font-bold", o.status === 'paid' ? "text-primary" : "text-yellow-500")}>
                    ${o.totalAmount.toLocaleString()}
                  </span>
                </div>
              ))}
              {orders.length === 0 && <p className="text-muted-foreground italic text-xs text-center py-8">No hay pedidos recientes.</p>}
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}

function StatCard({ label, value, icon: Icon, color }: any) {
  return (
    <Card className="bg-white/[0.02] border-white/5 p-6 relative overflow-hidden group">
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</p>
          <p className="text-3xl font-black">{value}</p>
        </div>
        <div className={cn("p-3 rounded-xl bg-white/5 transition-transform group-hover:scale-110", color)}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </Card>
  );
}
