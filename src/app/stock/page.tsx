'use client';

import React, { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  AlertCircle,
  TrendingDown,
  TrendingUp,
  Package2
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

const initialStock = [
  { id: 1, name: 'Motor Industrial 400W', sku: 'MOT-400-X', stock: 2, price: 125.50, status: 'low' },
  { id: 2, name: 'Filtro Aire XL', sku: 'FLT-XL-02', stock: 45, price: 12.90, status: 'ok' },
  { id: 3, name: 'Aceite Sintético V5', sku: 'OIL-SY-V5', stock: 12, price: 45.00, status: 'low' },
  { id: 4, name: 'Bujía Premium Iridium', sku: 'SPK-IR-01', stock: 120, price: 8.50, status: 'ok' },
  { id: 5, name: 'Cinturón Transmisión', sku: 'BLT-TR-44', stock: 0, price: 32.00, status: 'out' },
];

export default function StockPage() {
  const [items] = useState(initialStock);

  return (
    <AppShell>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black tracking-tight flex items-center gap-3">
              <span className="text-primary">/</span> INVENTARIO
            </h1>
            <p className="text-muted-foreground mt-1">Control de suministros y materias primas.</p>
          </div>
          <Button className="rounded-xl h-12 px-6 font-bold shadow-lg shadow-primary/20 gap-2">
            <Plus className="w-5 h-5" /> Añadir Producto
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CardMini label="Total SKU" value="142" icon={Package2} />
          <CardMini label="Bajo Stock" value="8" icon={TrendingDown} color="text-yellow-500" />
          <CardMini label="Sin Stock" value="2" icon={AlertCircle} color="text-red-500" />
        </div>

        <div className="bg-card rounded-[2rem] border border-border/50 shadow-xl overflow-hidden">
          <div className="p-6 border-b border-border/50 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Buscar por SKU o nombre..." className="pl-12 h-12 rounded-2xl bg-muted/20 border-border/50" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="h-12 rounded-xl font-bold">Exportar CSV</Button>
              <Button variant="outline" className="h-12 rounded-xl font-bold">Filtros Avanzados</Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow className="border-border/50">
                  <TableHead className="font-bold text-xs uppercase tracking-widest h-14 pl-8">Producto</TableHead>
                  <TableHead className="font-bold text-xs uppercase tracking-widest h-14">SKU</TableHead>
                  <TableHead className="font-bold text-xs uppercase tracking-widest h-14">Stock</TableHead>
                  <TableHead className="font-bold text-xs uppercase tracking-widest h-14 text-right">Precio</TableHead>
                  <TableHead className="font-bold text-xs uppercase tracking-widest h-14 text-center">Estado</TableHead>
                  <TableHead className="h-14 pr-8"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id} className="border-border/50 hover:bg-muted/20 transition-colors">
                    <TableCell className="font-bold pl-8 py-6">{item.name}</TableCell>
                    <TableCell className="text-muted-foreground font-mono text-xs">{item.sku}</TableCell>
                    <TableCell className="font-black text-lg">{item.stock}</TableCell>
                    <TableCell className="text-right font-bold">${item.price.toFixed(2)}</TableCell>
                    <TableCell className="text-center">
                      <StockBadge status={item.status} />
                    </TableCell>
                    <TableCell className="text-right pr-8">
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function CardMini({ label, value, icon: Icon, color = "text-primary" }: any) {
  return (
    <div className="bg-card/50 p-6 rounded-3xl border border-border/50 flex items-center justify-between">
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{label}</p>
        <p className="text-3xl font-black">{value}</p>
      </div>
      <div className={cn("p-4 rounded-2xl bg-muted", color)}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
  );
}

function StockBadge({ status }: { status: string }) {
  const configs = {
    ok: { label: 'Saludable', color: 'bg-primary/10 text-primary border-primary/20' },
    low: { label: 'Bajo Stock', color: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' },
    out: { label: 'Agotado', color: 'bg-red-500/10 text-red-500 border-red-500/20' },
  }[status as 'ok' | 'low' | 'out'];

  return (
    <Badge className={cn("border px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter", configs.color)}>
      {configs.label}
    </Badge>
  );
}
