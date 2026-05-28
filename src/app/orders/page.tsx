'use client';

import React, { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  CheckCircle2, 
  Clock, 
  XCircle,
  Calendar,
  User,
  Hash
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter 
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

const initialOrders = [
  { id: 'ORD-001', client: 'Taller Mecánico Alpha', amount: 450.00, date: '2024-03-20', status: 'pending', quantity: 5 },
  { id: 'ORD-002', client: 'Ferretería Central', amount: 1200.00, date: '2024-03-15', status: 'paid', quantity: 12 },
  { id: 'ORD-003', client: 'Industrias Pesadas', amount: 890.50, date: '2024-03-22', status: 'canceled', quantity: 2 },
  { id: 'ORD-004', client: 'Constructor J.P.', amount: 2100.00, date: '2024-03-25', status: 'pending', quantity: 25 },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [activeTab, setActiveTab] = useState('all');

  const filteredOrders = activeTab === 'all' 
    ? orders 
    : orders.filter(o => o.status === activeTab);

  return (
    <AppShell>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black tracking-tight flex items-center gap-3">
              <span className="text-primary">/</span> PEDIDOS
            </h1>
            <p className="text-muted-foreground mt-1">Gestión de cobros y facturación industrial.</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-xl h-12 px-6 font-bold shadow-lg shadow-primary/20 gap-2">
                <Plus className="w-5 h-5" /> Nuevo Pedido
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card border-border/50 max-w-md rounded-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-black italic tracking-tight uppercase">Registrar Pedido</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="space-y-2">
                  <Label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Nombre del Cliente</Label>
                  <Input placeholder="Ej. Juan Pérez" className="rounded-xl bg-muted/50" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Fecha a Pagar</Label>
                    <Input type="date" className="rounded-xl bg-muted/50" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Cantidad</Label>
                    <Input type="number" placeholder="0" className="rounded-xl bg-muted/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs uppercase font-bold tracking-widest text-muted-foreground">Monto Total ($)</Label>
                  <Input type="number" step="0.01" placeholder="0.00" className="rounded-xl bg-muted/50" />
                </div>
              </div>
              <DialogFooter>
                <Button className="w-full h-12 rounded-xl font-bold text-lg uppercase tracking-tighter">Guardar Pedido</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Buscar cliente o ID de pedido..." className="pl-12 h-12 rounded-2xl bg-card border-border/50" />
            </div>
            <Button variant="outline" className="h-12 rounded-2xl gap-2 border-border/50 px-6 font-bold">
              <Filter className="w-4 h-4" /> Filtros
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="bg-muted/50 p-1 h-14 rounded-2xl border border-border/20 grid grid-cols-4 w-full md:max-w-xl">
              <TabsTrigger value="all" className="rounded-xl data-[state=active]:bg-background data-[state=active]:shadow-sm font-bold">Todos</TabsTrigger>
              <TabsTrigger value="pending" className="rounded-xl data-[state=active]:bg-yellow-500/10 data-[state=active]:text-yellow-500 font-bold">Pendientes</TabsTrigger>
              <TabsTrigger value="paid" className="rounded-xl data-[state=active]:bg-primary/10 data-[state=active]:text-primary font-bold">Pagados</TabsTrigger>
              <TabsTrigger value="canceled" className="rounded-xl data-[state=active]:bg-red-500/10 data-[state=active]:text-red-500 font-bold">Cancelados</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredOrders.map((order) => (
                  <OrderCard key={order.id} order={order} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AppShell>
  );
}

function OrderCard({ order }: { order: any }) {
  const statusStyles = {
    paid: { color: 'text-primary bg-primary/10', icon: CheckCircle2, label: 'Pagado' },
    pending: { color: 'text-yellow-500 bg-yellow-500/10', icon: Clock, label: 'Pendiente' },
    canceled: { color: 'text-red-500 bg-red-500/10', icon: XCircle, label: 'Cancelado' },
  }[order.status as 'paid' | 'pending' | 'canceled'];

  const StatusIcon = statusStyles.icon;

  return (
    <Card className="border-none bg-card/50 hover:bg-card transition-all shadow-lg rounded-3xl overflow-hidden group">
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <Badge className={`${statusStyles.color} border-none px-3 py-1 rounded-full font-bold uppercase text-[10px] tracking-widest`}>
            <StatusIcon className="w-3 h-3 mr-1" /> {statusStyles.label}
          </Badge>
          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Hash className="w-3 h-3" />
            <span className="text-[10px] font-bold tracking-widest uppercase">{order.id}</span>
          </div>
          <h3 className="text-xl font-black truncate group-hover:text-primary transition-colors">{order.client}</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 py-2 border-y border-border/20">
          <div className="space-y-1">
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest flex items-center gap-1">
              <Calendar className="w-3 h-3" /> Fecha Pago
            </p>
            <p className="text-sm font-bold">{order.date}</p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Cantidad</p>
            <p className="text-sm font-bold">{order.quantity} pzas</p>
          </div>
        </div>

        <div className="flex items-end justify-between pt-2">
          <div>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Total</p>
            <p className="text-2xl font-black text-foreground">${order.amount.toFixed(2)}</p>
          </div>
          {order.status === 'pending' && (
            <Button size="sm" className="rounded-xl font-bold bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              Marcar Pagado
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
