"use client"

import React, { useState } from 'react';
import { AppShell } from "@/components/layout/app-shell";
import { useComandaStore, Order, OrderStatus } from "@/lib/store";
import { 
  Plus, 
  CheckCircle2, 
  Clock, 
  Banknote,
  MoreVertical,
  ChevronRight,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const STATUS_LABELS: Record<OrderStatus, { label: string, color: string, icon: any }> = {
  pending: { label: 'Pendiente', color: 'bg-muted text-muted-foreground', icon: Clock },
  delivered: { label: 'Entregado', color: 'bg-primary text-primary-foreground', icon: ChevronRight },
  paid: { label: 'Cobrado', color: 'bg-secondary text-secondary-foreground', icon: CheckCircle2 },
};

export default function OrdersPage() {
  const { orders, updateOrderStatus, isLoaded, addOrder, products } = useComandaStore();
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'delivered' | 'paid'>('all');

  if (!isLoaded) return null;

  const filteredOrders = orders.filter(o => activeTab === 'all' || o.status === activeTab);

  const handleNewOrder = () => {
    // Basic mock order for demonstration
    if (products.length === 0) return;
    const randomProduct = products[0];
    const newOrder: Order = {
      id: `ORD-${Date.now().toString().slice(-4)}`,
      customerName: `Cliente ${Math.floor(Math.random() * 100)}`,
      items: [{ productId: randomProduct.id, quantity: 1, priceAtSale: randomProduct.price }],
      totalAmount: randomProduct.price,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    addOrder(newOrder);
  };

  return (
    <AppShell>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Seguimiento de Pedidos</h2>
            <p className="text-muted-foreground">Gestiona entregas y cobros de ventas a crédito.</p>
          </div>
          <Button onClick={handleNewOrder} className="bg-primary text-primary-foreground gap-2">
            <Plus className="w-5 h-5" />
            Nuevo Pedido
          </Button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {(['all', 'pending', 'delivered', 'paid'] as const).map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab(tab)}
              className="capitalize min-w-[100px]"
            >
              {tab === 'all' ? 'Todos' : tab === 'pending' ? 'Pendientes' : tab === 'delivered' ? 'Entregados' : 'Cobrados'}
            </Button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredOrders.length === 0 && (
            <div className="col-span-full py-20 text-center border-2 border-dashed rounded-xl opacity-50">
              <Clock className="w-12 h-12 mx-auto mb-4 text-muted" />
              <p className="font-medium">No hay pedidos en esta categoría</p>
            </div>
          )}
          
          {filteredOrders.map((order) => (
            <Card key={order.id} className="relative overflow-hidden group">
              <div className={cn(
                "absolute top-0 right-0 w-1 h-full",
                STATUS_LABELS[order.status].color.split(' ')[0]
              )} />
              
              <CardHeader className="flex flex-row items-start justify-between pb-2">
                <div>
                  <div className="text-xs font-mono text-muted-foreground">#{order.id}</div>
                  <CardTitle className="text-lg pt-1">{order.customerName}</CardTitle>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon"><MoreVertical className="w-4 h-4" /></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => updateOrderStatus(order.id, 'delivered')}>
                      Marcar como Entregado
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => updateOrderStatus(order.id, 'paid')}>
                      Marcar como Cobrado
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Cancelar Pedido</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className={cn("gap-1 py-1 px-3 shadow-none", STATUS_LABELS[order.status].color)}>
                    {React.createElement(STATUS_LABELS[order.status].icon, { className: "w-3 h-3" })}
                    {STATUS_LABELS[order.status].label}
                  </Badge>
                  <div className="text-xl font-bold">${order.totalAmount.toLocaleString()}</div>
                </div>

                <div className="space-y-2 text-sm">
                  {order.items.map((item, idx) => {
                    const product = products.find(p => p.id === item.productId);
                    return (
                      <div key={idx} className="flex justify-between text-muted-foreground">
                        <span>{item.quantity}x {product?.name || 'Item'}</span>
                        <span>${(item.priceAtSale * item.quantity).toLocaleString()}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2 border-t flex items-center justify-between text-[11px] text-muted-foreground">
                  <div className="flex flex-col">
                    <span>Creado: {new Date(order.createdAt).toLocaleDateString()}</span>
                    {order.deliveredAt && <span>Entregado: {new Date(order.deliveredAt).toLocaleDateString()}</span>}
                  </div>
                  {order.status !== 'paid' && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-8 border-secondary text-secondary-foreground hover:bg-secondary/10"
                      onClick={() => updateOrderStatus(order.id, order.status === 'pending' ? 'delivered' : 'paid')}
                    >
                      {order.status === 'pending' ? 'Entregar' : 'Cobrar'}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');