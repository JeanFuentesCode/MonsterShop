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
      <div className="space-y-6 md:space-y-10">
        <header className="px-1">
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase mb-1">Status Operativo</h2>
          <p className="text-muted-foreground text-xs md:text-sm font-medium">Panel de control técnico MonsterShop.</p>
        </header>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard 
            label="Cobrado Total" 
            value={`$${totalPaid.toLocaleString()}`} 
            icon={TrendingUp} 
            color="text-primary"
          />
          <StatCard 
            label="Pedidos Pendientes" 
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

        <div className="grid gap-6 md:grid-cols-2">
          <section className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Alertas de Almacén</h3>
              <Link href="/products" className="text-[10px] text-primary hover:underline flex items-center gap-1 font-black">TODO EL STOCK <ArrowRight className="w-3 h-3"/></Link>
            </div>
            <div className="space-y-2">
              {criticalStock.slice(0, 4).map(p => (
                <div key={p.id} className="flex justify-between items-center bg-card border border-border p-4 rounded-2xl group hover:border-primary/30 transition-all shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-muted flex items-center justify-center shrink-0">
                      <Package className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="text-xs md:text-sm font-bold uppercase truncate max-w-[120px] md:max-w-none">{p.name}</span>
                  </div>
                  <span className={cn("text-[10px] md:text-xs font-black tabular-nums px-2 py-1 rounded-lg shrink-0", p.stock <= p.minStock ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary")}>
                    {p.stock} U.
                  </span>
                </div>
              ))}
              {criticalStock.length === 0 && <p className="text-muted-foreground italic text-[10px] text-center py-8 opacity-40">Inventario estable.</p>}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Próximos Cobros</h3>
              <Link href="/orders" className="text-[10px] text-primary hover:underline flex items-center gap-1 font-black">VER TODOS <ArrowRight className="w-3 h-3"/></Link>
            </div>
            <div className="space-y-2">
              {pendingOrders.slice(0, 4).map(o => (
                <div key={o.id} className="flex justify-between items-center bg-card border border-border p-4 rounded-2xl group hover:border-primary/30 transition-all shadow-sm">
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm font-bold uppercase truncate">{o.customerName}</p>
                    <p className="text-[8px] md:text-[9px] text-muted-foreground font-black uppercase">Vence: {o.dueDate}</p>
                  </div>
                  <span className="text-xs md:text-sm font-black text-yellow-500 shrink-0 ml-2">
                    ${o.totalAmount.toLocaleString()}
                  </span>
                </div>
              ))}
              {pendingOrders.length === 0 && <p className="text-muted-foreground italic text-[10px] text-center py-8 opacity-40">No hay cobros pendientes.</p>}
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}

function StatCard({ label, value, icon: Icon, color }: any) {
  return (
    <Card className="bg-card border-border p-5 md:p-6 relative overflow-hidden group rounded-3xl shadow-sm">
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1 md:mb-2">{label}</p>
          <p className="text-2xl md:text-3xl font-black">{value}</p>
        </div>
        <div className={cn("p-3 md:p-4 rounded-2xl bg-muted transition-all group-hover:scale-110", color)}>
          <Icon className="w-5 h-5 md:w-6 h-6" />
        </div>
      </div>
    </Card>
  );
}