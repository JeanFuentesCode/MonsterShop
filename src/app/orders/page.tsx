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
  Hash,
  Activity,
  CreditCard
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
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
  { id: 'PED-001', client: 'Juan García', amount: 120.50, date: '2024-05-20', status: 'pending', quantity: 3 },
  { id: 'PED-002', client: 'María López', amount: 245.99, date: '2024-05-15', status: 'paid', quantity: 5 },
  { id: 'PED-003', client: 'Carlos Mendez', amount: 89.50, date: '2024-05-22', status: 'canceled', quantity: 2 },
  { id: 'PED-004', client: 'Sofia Rojas', amount: 350.75, date: '2024-05-25', status: 'pending', quantity: 7 },
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight uppercase">
              Opera<span className="text-primary">ciones</span>
            </h1>
            <p className="text-muted-foreground mt-2 font-medium uppercase tracking-widest text-xs">Facturación y Logística</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-lg h-12 px-8 font-semibold text-sm uppercase tracking-widest gap-2">
                <Plus className="w-4 h-4" /> Nueva Orden
              </Button>
            </DialogTrigger>
            <DialogContent className="border-border max-w-lg rounded-lg p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold uppercase text-primary">Nueva Orden</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-6">
                <div className="space-y-2">
                  <Label className="text-xs uppercase font-semibold tracking-widest text-muted-foreground">Cliente</Label>
                  <Input placeholder="Nombre de la empresa" className="h-10 rounded-lg bg-accent border-border text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs uppercase font-semibold tracking-widest text-muted-foreground">Fecha</Label>
                    <Input type="date" className="h-10 rounded-lg bg-accent border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs uppercase font-semibold tracking-widest text-muted-foreground">Unidades</Label>
                    <Input type="number" placeholder="0" className="h-10 rounded-lg bg-accent border-border text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs uppercase font-semibold tracking-widest text-muted-foreground">Total ($)</Label>
                  <Input type="number" step="0.01" placeholder="0.00" className="h-10 rounded-lg bg-accent border-border text-sm font-semibold" />
                </div>
              </div>
              <DialogFooter>
                <Button className="w-full h-11 rounded-lg font-semibold text-sm uppercase tracking-widest">Crear Orden</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Buscar orden..." className="pl-12 h-11 rounded-lg bg-accent border-border text-sm" />
            </div>
            <Button variant="outline" className="h-11 rounded-lg gap-2 border-border px-6 font-semibold text-sm uppercase tracking-widest">
              <Filter className="w-4 h-4" /> Filtrar
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="bg-accent p-1 h-12 rounded-lg border border-border grid grid-cols-4 w-full">
              <TabsTrigger value="all" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold uppercase text-xs">Todos</TabsTrigger>
              <TabsTrigger value="pending" className="rounded-md data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-500 font-semibold uppercase text-xs">Pendientes</TabsTrigger>
              <TabsTrigger value="paid" className="rounded-md data-[state=active]:bg-green-500/20 data-[state=active]:text-green-500 font-semibold uppercase text-xs">Pagados</TabsTrigger>
              <TabsTrigger value="canceled" className="rounded-md data-[state=active]:bg-red-500/20 data-[state=active]:text-red-500 font-semibold uppercase text-xs">Cancelados</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    paid: { color: 'text-green-500 bg-green-500/10', icon: CheckCircle2, label: 'Pagado' },
    pending: { color: 'text-amber-500 bg-amber-500/10', icon: Clock, label: 'Pendiente' },
    canceled: { color: 'text-red-500 bg-red-500/10', icon: XCircle, label: 'Cancelado' },
  }[order.status as 'paid' | 'pending' | 'canceled'];

  const StatusIcon = statusStyles.icon;

  return (
    <Card className="border-border bg-card hover:border-primary/50 transition-all rounded-lg overflow-hidden p-6 space-y-4">
      <div className="flex justify-between items-start">
        <Badge className={`${statusStyles.color} border-none px-3 py-1 rounded-md font-semibold uppercase text-xs tracking-widest`}>
          <StatusIcon className="w-3 h-3 mr-2 inline" /> {statusStyles.label}
        </Badge>
        <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs">
          <Hash className="w-3 h-3" />
          <span className="font-medium tracking-widest">{order.id}</span>
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-xs text-primary font-semibold uppercase tracking-widest">Cliente</p>
        <h3 className="text-lg font-semibold truncate text-foreground">
          {order.client}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4 py-4 border-y border-border">
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest flex items-center gap-1">
            <Calendar className="w-3 h-3" /> Fecha
          </p>
          <p className="text-sm font-medium">{order.date}</p>
        </div>
        <div className="space-y-1 text-right">
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest flex items-center justify-end gap-1">
            <Activity className="w-3 h-3" /> Unidades
          </p>
          <p className="text-sm font-medium">{order.quantity}</p>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">Total</p>
          <p className="text-2xl font-bold text-foreground">${order.amount.toLocaleString()}</p>
        </div>
        <div className="flex gap-2">
           <Button variant="ghost" size="icon" className="rounded-lg w-10 h-10">
            <MoreVertical className="w-4 h-4" />
          </Button>
          {order.status === 'pending' && (
            <Button className="rounded-lg h-10 px-6 font-semibold uppercase tracking-widest text-sm gap-2">
              <CreditCard className="w-4 h-4" /> Cobrar
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}