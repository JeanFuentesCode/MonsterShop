"use client"

import { AppShell } from "@/components/layout/app-shell";
import { useComandaStore } from "@/lib/store";
import { 
  CreditCard, 
  AlertCircle,
  TrendingUp,
  ArrowRight,
  Package
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from 'next/link';
import { cn } from "@/lib/utils";

export default function Dashboard() {
  const { products, orders, isLoaded } = useComandaStore();

  if (!isLoaded) return null;

  const totalPaid = orders.filter(o => o.status === 'paid').reduce((acc, o) => acc + o.totalAmount, 0);
  const pendingOrders = orders.filter(o => o.status === 'pending');
  const criticalStock = products.filter(p => p.stock <= p.minStock);

  return (
    <AppShell>
      <div className="space-y-10">
        <header>
          <h2 className="text-4xl font-black tracking-tighter uppercase mb-1">Status Operativo</h2>
          <p className="text-muted-foreground text-sm font-medium">Panel de control técnico MonsterShop.</p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard 
            label="Cobrado Total" 
            value={`$${totalPaid.toLocaleString()}`} 
            icon={TrendingUp} 
            color="text-primary"
          />
          <StatCard 
            label="Por Cobrar" 
            value={pendingOrders.length.toString()} 
            icon={CreditCard} 
            color="text-yellow-500"
          />
          <StatCard 
            label="Alerta Almacén" 
            value={criticalStock.length.toString()} 
            icon={AlertCircle} 
            color={criticalStock.length > 0 ? "text-destructive" : "text-primary"}
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Alertas de Almacén</h3>
              <Link href="/products" className="text-[10px] text-primary hover:underline flex items-center gap-1 font-black">STOCK COMPLETO <ArrowRight className="w-3 h-3"/></Link>
            </div>
            <div className="space-y-2">
              {criticalStock.slice(0, 5).map(p => (
                <div key={p.id} className="flex justify-between items-center bg-card/40 border border-border p-4 rounded-2xl group hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-muted flex items-center justify-center">
                      <Package className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-bold uppercase">{p.name}</span>
                  </div>
                  <span className={cn("text-xs font-black tabular-nums px-2 py-1 rounded-lg", p.stock <= p.minStock ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary")}>
                    {p.stock} U.
                  </span>
                </div>
              ))}
              {criticalStock.length === 0 && <p className="text-muted-foreground italic text-xs text-center py-10 opacity-40">Todo el inventario está operando correctamente.</p>}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Pedidos Próximos</h3>
              <Link href="/orders" className="text-[10px] text-primary hover:underline flex items-center gap-1 font-black">FLUJO DE CAJA <ArrowRight className="w-3 h-3"/></Link>
            </div>
            <div className="space-y-2">
              {pendingOrders.slice(0, 5).map(o => (
                <div key={o.id} className="flex justify-between items-center bg-card/40 border border-border p-4 rounded-2xl group hover:border-primary/30 transition-all">
                  <div>
                    <p className="text-sm font-bold uppercase">{o.customerName}</p>
                    <p className="text-[9px] text-muted-foreground font-black uppercase">Vence: {o.dueDate}</p>
                  </div>
                  <span className="text-sm font-black text-yellow-500">
                    ${o.totalAmount.toLocaleString()}
                  </span>
                </div>
              ))}
              {pendingOrders.length === 0 && <p className="text-muted-foreground italic text-xs text-center py-10 opacity-40">No hay cobros pendientes por realizar.</p>}
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}

function StatCard({ label, value, icon: Icon, color }: any) {
  return (
    <Card className="bg-card/40 border-border p-6 relative overflow-hidden group rounded-3xl">
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</p>
          <p className="text-3xl font-black">{value}</p>
        </div>
        <div className={cn("p-4 rounded-2xl bg-muted transition-all group-hover:scale-110", color)}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </Card>
  );
}