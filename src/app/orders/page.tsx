"use client"

import React, { useState } from 'react';
import { AppShell } from "@/components/layout/app-shell";
import { useComandaStore, OrderStatus } from "@/lib/store";
import { Plus, Hash, CheckCircle2, Clock, XCircle, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function OrdersPage() {
  const { orders, products, addOrder, updateOrderStatus, isLoaded } = useComandaStore();
  const [isOpen, setIsOpen] = useState(false);
  const [newOrder, setNewOrder] = useState({
    customer: '',
    reference: '',
    productId: '',
    qty: 1,
    dueDate: new Date().toISOString().split('T')[0]
  });

  if (!isLoaded) return null;

  const handleAdd = () => {
    const product = products.find(p => p.id === newOrder.productId);
    if (!product || !newOrder.customer) return;

    addOrder({
      id: `MS-${Date.now().toString().slice(-4)}`,
      customerName: newOrder.customer,
      reference: newOrder.reference || 'S/REF',
      items: [{ productId: product.id, quantity: newOrder.qty, priceAtSale: product.price }],
      totalAmount: product.price * newOrder.qty,
      status: 'pending',
      createdAt: new Date().toISOString(),
      dueDate: newOrder.dueDate
    });
    setIsOpen(false);
  };

  const OrderList = ({ statusFilter }: { statusFilter: OrderStatus }) => {
    const filtered = orders.filter(o => o.status === statusFilter);
    
    if (filtered.length === 0) return (
      <div className="py-20 text-center opacity-30">
        <p className="text-xs font-black uppercase tracking-widest">Sin registros en esta categoría</p>
      </div>
    );

    return (
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map(order => (
          <Card key={order.id} className="bg-card border-border rounded-2xl overflow-hidden shadow-sm group">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-black text-primary/60 uppercase">ORD {order.id}</span>
                  <CardTitle className="text-lg font-black uppercase">{order.customerName}</CardTitle>
                </div>
                <StatusBadge status={order.status} />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground bg-muted/50 p-3 rounded-xl">
                <Hash className="w-3 h-3 text-primary" />
                <span>{order.reference}</span>
                <span className="ml-auto flex items-center gap-1">
                  <CalendarIcon className="w-3 h-3" />
                  Pagar antes de: {order.dueDate}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-[10px] font-bold text-muted-foreground">
                  Creado: {new Date(order.createdAt).toLocaleDateString()}
                </div>
                <div className="text-xl font-black text-primary">
                  ${order.totalAmount.toLocaleString()}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                {order.status === 'pending' && (
                  <>
                    <Button 
                      className="flex-1 h-10 text-xs font-black uppercase bg-primary text-primary-foreground rounded-xl"
                      onClick={() => updateOrderStatus(order.id, 'paid')}
                    >
                      PAGADO
                    </Button>
                    <Button 
                      variant="outline"
                      className="h-10 text-xs font-black uppercase border-destructive text-destructive hover:bg-destructive hover:text-white rounded-xl"
                      onClick={() => updateOrderStatus(order.id, 'canceled')}
                    >
                      CANCELAR
                    </Button>
                  </>
                )}
                {order.status === 'paid' && (
                  <p className="text-[10px] font-black uppercase text-primary/80 italic">
                    Completado el {new Date(order.paidAt!).toLocaleDateString()}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <AppShell>
      <div className="space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter">Gestión de Pedidos</h2>
            <p className="text-muted-foreground text-sm font-medium">Control industrial de flujo de pagos.</p>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary text-primary-foreground font-black uppercase h-12 px-8 rounded-2xl shadow-lg shadow-primary/20">
                <Plus className="w-4 h-4 mr-2" />
                Registrar Pedido
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md rounded-3xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-black uppercase">Nueva Orden</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-1">
                  <Label className="text-[10px] font-black uppercase text-muted-foreground">Cliente</Label>
                  <Input value={newOrder.customer} onChange={e => setNewOrder({...newOrder, customer: e.target.value})} className="rounded-xl h-11" />
                </div>
                <div className="space-y-1">
                  <Label className="text-[10px] font-black uppercase text-muted-foreground">Ref. Pago (Ej: Bancolombia #221)</Label>
                  <Input value={newOrder.reference} onChange={e => setNewOrder({...newOrder, reference: e.target.value})} className="rounded-xl h-11" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label className="text-[10px] font-black uppercase text-muted-foreground">Producto</Label>
                    <select 
                      className="w-full h-11 px-3 bg-muted rounded-xl text-sm border-none outline-none focus:ring-1 focus:ring-primary"
                      onChange={e => setNewOrder({...newOrder, productId: e.target.value})}
                    >
                      <option value="">Seleccionar...</option>
                      {products.map(p => (
                        <option key={p.id} value={p.id}>{p.name} (${p.price})</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[10px] font-black uppercase text-muted-foreground">Cantidad</Label>
                    <Input type="number" value={newOrder.qty} onChange={e => setNewOrder({...newOrder, qty: Number(e.target.value)})} className="rounded-xl h-11" />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label className="text-[10px] font-black uppercase text-muted-foreground">Fecha Límite de Pago</Label>
                  <Input type="date" value={newOrder.dueDate} onChange={e => setNewOrder({...newOrder, dueDate: e.target.value})} className="rounded-xl h-11" />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAdd} className="w-full bg-primary font-black h-12 rounded-2xl uppercase">CONFIRMAR PEDIDO</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </header>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="bg-muted p-1 rounded-2xl w-full max-w-md">
            <TabsTrigger value="pending" className="rounded-xl flex-1 font-black text-[10px] uppercase">Pendientes</TabsTrigger>
            <TabsTrigger value="paid" className="rounded-xl flex-1 font-black text-[10px] uppercase">Pagados</TabsTrigger>
            <TabsTrigger value="canceled" className="rounded-xl flex-1 font-black text-[10px] uppercase">Cancelados</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pending" className="mt-0 focus:outline-none">
            <OrderList statusFilter="pending" />
          </TabsContent>
          <TabsContent value="paid" className="mt-0 focus:outline-none">
            <OrderList statusFilter="paid" />
          </TabsContent>
          <TabsContent value="canceled" className="mt-0 focus:outline-none">
            <OrderList statusFilter="canceled" />
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
}

function StatusBadge({ status }: { status: OrderStatus }) {
  const styles = {
    pending: { label: 'PENDIENTE', icon: Clock, class: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20' },
    paid: { label: 'PAGADO', icon: CheckCircle2, class: 'bg-primary/10 text-primary border-primary/20' },
    canceled: { label: 'CANCELADO', icon: XCircle, class: 'bg-destructive/10 text-destructive border-destructive/20' },
  };
  const config = styles[status];
  const Icon = config.icon;
  return (
    <Badge className={cn("px-2 py-1 rounded-lg text-[9px] font-black gap-1 border", config.class)} variant="outline">
      <Icon className="w-3 h-3" />
      {config.label}
    </Badge>
  );
}