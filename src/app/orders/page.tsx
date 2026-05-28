"use client"

import React, { useState } from 'react';
import { AppShell } from "@/components/layout/app-shell";
import { useComandaStore, Order } from "@/lib/store";
import { Plus, CheckCircle2, Clock, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";

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
      id: `ORD-${Date.now().toString().slice(-4)}`,
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
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Pedidos</h2>
            <p className="text-sm text-muted-foreground">Gestión de ventas y cobros.</p>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-black font-bold">
                <Plus className="w-4 h-4 mr-2" />
                Registrar
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black border-white/10">
              <DialogHeader>
                <DialogTitle>Nuevo Pedido</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Cliente</Label>
                  <Input 
                    value={newOrder.customer} 
                    onChange={e => setNewOrder({...newOrder, customer: e.target.value})}
                    className="bg-white/5 border-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Referencia (Pago/Envío)</Label>
                  <Input 
                    placeholder="Ej: Transferencia #123"
                    value={newOrder.reference} 
                    onChange={e => setNewOrder({...newOrder, reference: e.target.value})}
                    className="bg-white/5 border-white/10"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Producto</Label>
                    <select 
                      className="w-full h-10 px-3 bg-white/5 border border-white/10 rounded-md text-sm"
                      onChange={e => setNewOrder({...newOrder, productId: e.target.value})}
                    >
                      <option value="">Seleccionar...</option>
                      {products.map(p => (
                        <option key={p.id} value={p.id}>{p.name} (${p.price})</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Cantidad</Label>
                    <Input 
                      type="number" 
                      value={newOrder.qty}
                      onChange={e => setNewOrder({...newOrder, qty: Number(e.target.value)})}
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleAdd} className="w-full bg-primary text-black font-bold">Crear Pedido</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {orders.map(order => (
            <Card key={order.id} className="bg-white/[0.02] border-white/10 group">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono text-muted-foreground">{order.id}</p>
                    <CardTitle className="text-base">{order.customerName}</CardTitle>
                  </div>
                  <Badge variant={order.status === 'paid' ? 'default' : 'outline'} className={order.status === 'paid' ? 'bg-primary text-black' : 'border-yellow-500 text-yellow-500'}>
                    {order.status === 'paid' ? 'Pagado' : 'Pendiente'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground bg-white/5 p-2 rounded">
                  <Hash className="w-3 h-3" />
                  <span className="uppercase">{order.reference}</span>
                </div>
                
                <div className="flex justify-between items-end">
                  <span className="text-xs text-muted-foreground">{new Date(order.createdAt).toLocaleDateString()}</span>
                  <span className="text-lg font-bold text-primary">${order.totalAmount.toLocaleString()}</span>
                </div>

                {order.status === 'pending' && (
                  <Button 
                    className="w-full h-8 text-xs bg-white/10 hover:bg-primary hover:text-black border-none transition-all"
                    onClick={() => updateOrderStatus(order.id, 'paid')}
                  >
                    Marcar como Pagado
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
          {orders.length === 0 && (
            <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-xl">
              <Clock className="w-8 h-8 mx-auto mb-2 opacity-20" />
              <p className="text-sm text-muted-foreground">No hay pedidos registrados.</p>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}