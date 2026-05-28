"use client"

import { AppShell } from "@/components/layout/app-shell";
import { useComandaStore } from "@/lib/store";
import { 
  TrendingUp, 
  Users, 
  CreditCard, 
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  const { products, orders, isLoaded } = useComandaStore();

  if (!isLoaded) return null;

  const totalSales = orders.reduce((acc, o) => acc + o.totalAmount, 0);
  const paidSales = orders.filter(o => o.status === 'paid').reduce((acc, o) => acc + o.totalAmount, 0);
  const pendingDebts = totalSales - paidSales;
  const lowStockItems = products.filter(p => p.stock <= p.minStock);

  return (
    <AppShell>
      <div className="space-y-8 max-w-7xl mx-auto">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Bienvenido de nuevo</h2>
            <p className="text-muted-foreground">Aquí tienes un resumen de tu negocio hoy.</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ventas Totales</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalSales.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" /> +12.5% vs mes pasado
                </span>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Deudas Pendientes</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">${pendingDebts.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Representa el {((pendingDebts/totalSales || 0) * 100).toFixed(1)}% de las ventas
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pedidos Activos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{orders.filter(o => o.status !== 'paid').length}</div>
              <p className="text-xs text-muted-foreground">
                Pendientes de cobro o entrega
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alertas Stock</CardTitle>
              <AlertTriangle className={cn("h-4 w-4", lowStockItems.length > 0 ? "text-secondary" : "text-muted-foreground")} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{lowStockItems.length}</div>
              <p className="text-xs text-muted-foreground">
                Productos con nivel crítico
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Rendimiento Mensual</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg bg-accent/20">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-muted mx-auto mb-2" />
                <p className="text-muted-foreground font-medium">Gráfico de tendencias (Próximamente)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Estado de Inventario</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {products.slice(0, 5).map(p => (
                <div key={p.id} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{p.name}</span>
                    <span className="text-muted-foreground">{p.stock} unidades</span>
                  </div>
                  <Progress 
                    value={(p.stock / (p.minStock * 5)) * 100} 
                    className={cn(
                      "h-2",
                      p.stock <= p.minStock ? "bg-destructive/20" : ""
                    )}
                  />
                </div>
              ))}
              <p className="text-xs text-center text-muted-foreground pt-2">
                Mostrando productos más vendidos
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');