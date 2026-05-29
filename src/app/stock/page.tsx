'use client';

import React, { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  Package,
  AlertCircle,
  Filter,
  Download
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const initialStock = [
  { id: 1, name: 'Camiseta Básica Blanca', sku: 'CAM-001', stock: 45, price: 15.99, status: 'stable' },
  { id: 2, name: 'Pantalón Negro L', sku: 'PAN-002', stock: 3, price: 34.99, status: 'low' },
  { id: 3, name: 'Zapatos Deportivos', sku: 'ZAP-003', stock: 0, price: 79.99, status: 'out' },
  { id: 4, name: 'Gafas de Sol', sku: 'GAF-004', stock: 28, price: 45.50, status: 'stable' },
  { id: 5, name: 'Cinturón Marrón', sku: 'CIN-005', stock: 1, price: 22.00, status: 'critical' },
];

export default function StockPage() {
  const [items] = useState(initialStock);

  return (
    <AppShell>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Inventario</h1>
            <p className="text-muted-foreground text-sm mt-2">Gestión de activos y suministros.</p>
          </div>
          <Button className="rounded-lg h-11 px-6 font-semibold uppercase tracking-widest text-sm gap-2">
            <Plus className="w-4 h-4" /> Añadir Activo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard label="SKUs Activos" value="1,242" icon={Package} />
          <MetricCard label="Alertas" value="08" icon={AlertCircle} color="text-amber-500" />
          <MetricCard label="En Falta" value="02" icon={AlertCircle} color="text-red-500" />
        </div>

        <Card className="border-border bg-card overflow-hidden">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Buscar producto..." className="pl-10 bg-accent border-border text-sm" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="h-9 border-border text-xs font-medium gap-2">
                <Download className="w-3.5 h-3.5" /> Exportar
              </Button>
              <Button variant="outline" size="sm" className="h-9 border-border text-xs font-medium gap-2">
                <Filter className="w-3.5 h-3.5" /> Filtrar
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-accent">
                <TableRow className="border-border">
                  <TableHead className="text-xs font-semibold uppercase text-muted-foreground pl-6">Producto</TableHead>
                  <TableHead className="text-xs font-semibold uppercase text-muted-foreground">SKU</TableHead>
                  <TableHead className="text-xs font-semibold uppercase text-muted-foreground text-center">Stock</TableHead>
                  <TableHead className="text-xs font-semibold uppercase text-muted-foreground text-right">Precio</TableHead>
                  <TableHead className="text-xs font-semibold uppercase text-muted-foreground text-center">Estado</TableHead>
                  <TableHead className="pr-6"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id} className="border-border hover:bg-accent/50">
                    <TableCell className="font-medium text-foreground pl-6 py-3">{item.name}</TableCell>
                    <TableCell className="font-mono text-xs text-muted-foreground">{item.sku}</TableCell>
                    <TableCell className="text-center font-medium">{item.stock}</TableCell>
                    <TableCell className="text-right font-medium">${item.price.toFixed(2)}</TableCell>
                    <TableCell className="text-center">
                      <StockBadge status={item.status} />
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <Button variant="ghost" size="icon" className="w-8 h-8">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}

function MetricCard({ label, value, icon: Icon, color = "text-primary" }: any) {
  return (
    <Card className="border-border bg-card p-4 flex items-center justify-between">
      <div>
        <p className="text-xs font-semibold uppercase text-muted-foreground tracking-widest">{label}</p>
        <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
      </div>
      <div className={cn("p-2.5 rounded-lg bg-accent", color)}>
        <Icon className="w-5 h-5" />
      </div>
    </Card>
  );
}

function StockBadge({ status }: { status: string }) {
  const configs = {
    stable: { label: 'Estable', color: 'bg-green-500/10 text-green-500 border-green-500/20' },
    low: { label: 'Bajo', color: 'bg-amber-500/10 text-amber-500 border-amber-500/20' },
    critical: { label: 'Crítico', color: 'bg-red-500/10 text-red-500 border-red-500/20' },
    out: { label: 'Agotado', color: 'bg-gray-500/10 text-gray-400 border-gray-500/20' },
  }[status as 'stable' | 'low' | 'critical' | 'out'];

  return (
    <Badge className={cn("border px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-widest", configs.color)}>
      {configs.label}
    </Badge>
  );
}
