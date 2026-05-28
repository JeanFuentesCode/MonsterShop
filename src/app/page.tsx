"use client"

import { AppShell } from "@/components/layout/app-shell";
import { useComandaStore } from "@/lib/store";
import { 
  Package, 
  CreditCard, 
  AlertCircle,
  TrendingUp
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  const { products, orders, isLoaded } = useComandaStore();

  if (!isLoaded) return null;

  const totalRevenue = orders.reduce((acc, o) => acc + (o.status === 'paid' ? o.totalAmount : 0), 0);
  const pendingOrders = orders.filter(o => o.status === 'pending').length;
  const lowStockCount = products.filter(p => p.stock <= p.minStock).length;

  return (
    <AppShell>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Panel de Control</h2>
          <p className="text-muted-foreground">Resumen operativo de MonsterShop.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SummaryCard 
            label="Ventas Cobradas" 
            value={`$${totalRevenue.toLocaleString()}`} 
            icon={TrendingUp} 
            color="text-primary"
          />
          <SummaryCard 
            label="Pedidos Pendientes" 
            value={pendingOrders.toString()} 
            icon={CreditCard} 
            color="text-yellow-500"
          />
          <SummaryCard 
            label="Alertas Stock" 
            value={lowStockCount.toString()} 
            icon={AlertCircle} 
            color={lowStockCount > 0 ? "text-destructive" : "text-primary"}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-white/[0.02] border-white/10 p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Package className="w-4 h-4" />
              Estado de Inventario
            </h3>
            <div className="space-y-4">
              {products.slice(0, 5).map(p => (
                <div key={p.id} className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{p.name}</span>
                  <span className={p.stock <= p.minStock ? "text-destructive font-bold" : "text-white"}>
                    {p.stock} U.
                  </span>
                </div>
              ))}
              {products.length === 0 && <p className="text-muted-foreground italic text-xs">Sin productos registrados.</p>}
            </div>
          </Card>

          <Card className="bg-white/[0.02] border-white/10 p-6">
            <h3 className="font-semibold mb-4">Últimos Pedidos</h3>
            <div className="space-y-4">
              {orders.slice(0, 5).map(o => (
                <div key={o.id} className="flex justify-between items-center text-sm">
                  <div>
                    <p className="font-medium">{o.customerName}</p>
                    <p className="text-[10px] text-muted-foreground uppercase">{o.reference}</p>
                  </div>
                  <span className={o.status === 'paid' ? "text-primary" : "text-yellow-500"}>
                    ${o.totalAmount.toLocaleString()}
                  </span>
                </div>
              ))}
              {orders.length === 0 && <p className="text-muted-foreground italic text-xs">Sin pedidos recientes.</p>}
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

function SummaryCard({ label, value, icon: Icon, color }: any) {
  return (
    <Card className="bg-white/[0.02] border-white/10 p-6 overflow-hidden relative">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{label}</p>
          <p className="text-3xl font-black">{value}</p>
        </div>
        <Icon className={cn("w-8 h-8 opacity-20", color)} />
      </div>
    </Card>
  );
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');