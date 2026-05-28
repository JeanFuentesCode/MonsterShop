"use client"

import React, { useState } from 'react';
import { AppShell } from "@/components/layout/app-shell";
import { useComandaStore } from "@/lib/store";
import { Plus, Hash, ReceiptText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function OrdersPage() {
  const { orders, products, addOrder, updateOrderStatus, isLoaded } = useComandaStore();
  const [isOpen, setIsOpen] = useState(false);
  const [newOrder, setNewOrder] = useState({
    customer: '',
    reference: '',
    productId: '',
    qty: 1
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
    });
    setIsOpen(false);
  };

  return (
    <AppShell>
      <div className="space-y-8">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter">Pedidos</h2>
            <p className="text-muted-foreground text-sm font-medium">Gestión de flujo de caja y entregas.</p>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary text-black font-black uppercase tracking-widest text-xs h-12 px-8 rounded-xl">
                <Plus className="w-4 h-4 mr-2" />
                Nueva Venta
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black border-white/10 rounded-3xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-black uppercase">Registrar Pedido</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Cliente</Label>
                  <Input 
                    value={newOrder.customer} 
                    onChange={e => setNewOrder({...newOrder, customer: e.target.value})}
                    className="bg-white/5 border-white/10 h-12 px-4 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Referencia de Pago/Envío</Label>
                  <Input 
                    placeholder="Ej: Transf #9921"
                    value={newOrder.reference} 
                    onChange={e => setNewOrder({...newOrder, reference: e.target.value})}
                    className="bg-white/5 border-white/10 h-12 px-4 rounded-xl"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Producto</Label>
                    <select 
                      className="w-full h-12 px-3 bg-white/5 border border-white/10 rounded-xl text-sm outline-none focus:ring-1 focus:ring-primary"
                      onChange={e => setNewOrder({...newOrder, productId: e.target.value})}
                    >
                      <option value="" className="bg-black">Seleccionar...</option>
                      {products.map(p => (
                        <option key={p.id} value={p.id} className="bg-black">{p.name} (${p.price})</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Cantidad</Label>
                    <Input 
                      type="number" 
                      value={newOrder.qty}
                      onChange={e => setNewOrder({...newOrder, qty: Number(e.target.value)})}
                      className="bg-white/5 border-white/10 h-12 px-4 rounded-xl"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAdd} className="w-full bg-primary text-black font-black h-12 rounded-xl">CONFIRMAR VENTA</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {orders.map(order => (
            <Card key={order.id} className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden group hover:border-white/10 transition-all">
              <CardHeader className="pb-4 bg-white/[0.02]">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-black text-primary/50 uppercase tracking-tighter">{order.id}</span>
                    <CardTitle className="text-lg font-black uppercase">{order.customerName}</CardTitle>
                  </div>
                  <Badge className={cn(
                    "rounded-md text-[9px] font-black uppercase px-2 py-1",
                    order.status === 'paid' ? 'bg-primary text-black' : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                  )}>
                    {order.status === 'paid' ? 'COBRADO' : 'PENDIENTE'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-center gap-3 text-[10px] font-black text-muted-foreground bg-white/5 p-3 rounded-xl border border-white/5">
                  <Hash className="w-3 h-3 text-primary" />
                  <span className="uppercase tracking-widest">{order.reference}</span>
                </div>
                
                <div className="flex justify-between items-end">
                  <div className="text-[10px] font-bold text-muted-foreground">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </div>
                  <div className="text-2xl font-black text-primary tabular-nums">
                    ${order.totalAmount.toLocaleString()}
                  </div>
                </div>

                {order.status === 'pending' && (
                  <Button 
                    className="w-full h-12 text-xs font-black uppercase tracking-widest bg-white/5 hover:bg-primary hover:text-black border border-white/5 transition-all rounded-xl"
                    onClick={() => updateOrderStatus(order.id, 'paid')}
                  >
                    Marcar como Pagado
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
          {orders.length === 0 && (
            <div className="col-span-full py-32 text-center border border-dashed border-white/10 rounded-3xl">
              <ReceiptText className="w-12 h-12 mx-auto mb-4 opacity-10" />
              <p className="text-xs font-black uppercase tracking-widest opacity-30">Sin historial de ventas</p>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
