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
  { id: 'ORD-2024-X1', client: 'Taller Mecánico Alpha', amount: 4500.00, date: '2024-05-20', status: 'pending', quantity: 5 },
  { id: 'ORD-2024-X2', client: 'Ferretería Central S.A.', amount: 12000.00, date: '2024-05-15', status: 'paid', quantity: 12 },
  { id: 'ORD-2024-X3', client: 'Industrias Pesadas L4', amount: 8900.50, date: '2024-05-22', status: 'canceled', quantity: 2 },
  { id: 'ORD-2024-X4', client: 'Constructor J.P. & Sons', amount: 21000.00, date: '2024-05-25', status: 'pending', quantity: 25 },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [activeTab, setActiveTab] = useState('all');

  const filteredOrders = activeTab === 'all' 
    ? orders 
    : orders.filter(o => o.status === activeTab);

  return (
    <AppShell>
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
              Opera<span className="text-primary">ciones</span>
            </h1>
            <p className="text-muted-foreground mt-3 font-bold uppercase tracking-[0.4em] text-xs">Facturación y Logística de Salida</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-[1.5rem] h-16 px-10 font-black text-lg shadow-[0_15px_30px_rgba(34,197,94,0.2)] uppercase tracking-widest gap-4">
                <Plus className="w-6 h-6" /> Nueva Orden
              </Button>
            </DialogTrigger>
            <DialogContent className="glass border-white/10 max-w-lg rounded-[3rem] p-10">
              <DialogHeader>
                <DialogTitle className="text-3xl font-black italic tracking-tighter uppercase text-primary">Sistema de Registro</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 py-8">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground ml-2">Entidad del Cliente</Label>
                  <Input placeholder="Ej. Corporación X" className="h-14 rounded-2xl bg-white/5 border-white/5 text-lg" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground ml-2">Compromiso Pago</Label>
                    <Input type="date" className="h-14 rounded-2xl bg-white/5 border-white/5" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground ml-2">Unidades</Label>
                    <Input type="number" placeholder="0" className="h-14 rounded-2xl bg-white/5 border-white/5 text-lg" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-black tracking-widest text-muted-foreground ml-2">Valuación Total ($)</Label>
                  <Input type="number" step="0.01" placeholder="0.00" className="h-14 rounded-2xl bg-white/5 border-white/5 text-xl font-black italic" />
                </div>
              </div>
              <DialogFooter>
                <Button className="w-full h-16 rounded-2xl font-black text-xl uppercase tracking-widest">Ejecutar Orden</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative flex-1 w-full group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-primary transition-colors" />
              <Input placeholder="Buscar por ID de Orden, Cliente o RFC..." className="pl-16 h-16 rounded-[1.5rem] bg-card border-white/5 text-lg font-bold" />
            </div>
            <Button variant="outline" className="h-16 rounded-[1.5rem] gap-3 border-white/5 px-8 font-black uppercase tracking-widest bg-white/[0.02] hover:bg-white/5">
              <Filter className="w-5 h-5" /> Config. Vista
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="bg-white/[0.03] p-2 h-20 rounded-[2rem] border border-white/5 grid grid-cols-4 w-full md:max-w-3xl">
              <TabsTrigger value="all" className="rounded-[1.5rem] data-[state=active]:bg-primary data-[state=active]:text-black font-black uppercase tracking-widest text-xs">Todos</TabsTrigger>
              <TabsTrigger value="pending" className="rounded-[1.5rem] data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-500 font-black uppercase tracking-widest text-xs">Pendientes</TabsTrigger>
              <TabsTrigger value="paid" className="rounded-[1.5rem] data-[state=active]:bg-primary/20 data-[state=active]:text-primary font-black uppercase tracking-widest text-xs">Pagados</TabsTrigger>
              <TabsTrigger value="canceled" className="rounded-[1.5rem] data-[state=active]:bg-red-500/20 data-[state=active]:text-red-500 font-black uppercase tracking-widest text-xs">Cancelados</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
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
    paid: { color: 'text-primary bg-primary/10', icon: CheckCircle2, label: 'VERIFICADO' },
    pending: { color: 'text-yellow-500 bg-yellow-500/10', icon: Clock, label: 'EN COLA' },
    canceled: { color: 'text-red-500 bg-red-500/10', icon: XCircle, label: 'RECHAZADO' },
  }[order.status as 'paid' | 'pending' | 'canceled'];

  const StatusIcon = statusStyles.icon;

  return (
    <Card className="border-none glass hover:border-primary/30 transition-all rounded-[2.5rem] overflow-hidden group p-8 space-y-8">
      <div className="flex justify-between items-center">
        <Badge className={`${statusStyles.color} border-none px-4 py-2 rounded-xl font-black uppercase text-[10px] tracking-[0.2em]`}>
          <StatusIcon className="w-3 h-3 mr-2" /> {statusStyles.label}
        </Badge>
        <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs">
          <Hash className="w-3 h-3" />
          <span className="font-bold tracking-widest uppercase">{order.id}</span>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-[10px] text-primary font-black uppercase tracking-[0.4em]">Entidad de Destino</p>
        <h3 className="text-3xl font-black italic truncate group-hover:text-primary transition-colors tracking-tighter uppercase">
          {order.client}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-8 py-6 border-y border-white/5">
        <div className="space-y-2">
          <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest flex items-center gap-2">
            <Calendar className="w-3 h-3 text-primary" /> Fecha de Pago
          </p>
          <p className="text-xl font-black italic">{order.date}</p>
        </div>
        <div className="space-y-2 text-right">
          <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest flex items-center justify-end gap-2">
            <Activity className="w-3 h-3 text-primary" /> Volumen
          </p>
          <p className="text-xl font-black italic">{order.quantity} Unidades</p>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div>
          <p className="text-[10px] text-primary font-black uppercase tracking-[0.3em] mb-1">Valuación de Orden</p>
          <p className="text-4xl font-black italic text-foreground tracking-tighter">${order.amount.toLocaleString()}</p>
        </div>
        <div className="flex gap-2">
           <Button variant="ghost" size="icon" className="rounded-2xl w-14 h-14 bg-white/5">
            <MoreVertical className="w-6 h-6" />
          </Button>
          {order.status === 'pending' && (
            <Button className="rounded-2xl h-14 px-8 font-black uppercase tracking-widest gap-3 hover:scale-[1.05] transition-all">
              <CreditCard className="w-5 h-5" /> COBRAR
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}