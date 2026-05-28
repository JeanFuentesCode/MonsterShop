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
  { id: 1, name: 'Motor Industrial 400W', sku: 'MTR-X400', stock: 2, price: 1250.50, status: 'critical' },
  { id: 2, name: 'Filtro Aire XL', sku: 'FLT-XL-24', stock: 45, price: 112.90, status: 'stable' },
  { id: 3, name: 'Aceite Sintético V5', sku: 'OIL-V5-SY', stock: 12, price: 450.00, status: 'low' },
  { id: 4, name: 'Bujía Iridium P1', sku: 'SPK-IRID', stock: 120, price: 28.50, status: 'stable' },
  { id: 5, name: 'Cinturón Transmisión', sku: 'BLT-TR-L4', stock: 0, price: 320.00, status: 'out' },
];

export default function StockPage() {
  const [items] = useState(initialStock);

  return (
    <AppShell>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Inventario</h1>
            <p className="text-slate-400 text-sm mt-1">Gestión de activos y suministros industriales.</p>
          </div>
          <Button className="rounded-xl h-11 px-6 font-bold uppercase tracking-wider gap-2">
            <Plus className="w-4 h-4" /> Añadir Activo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard label="SKUs Activos" value="1,242" icon={Package} />
          <MetricCard label="Alertas" value="08" icon={AlertCircle} color="text-amber-500" />
          <MetricCard label="En Falta" value="02" icon={AlertCircle} color="text-red-500" />
        </div>

        <Card className="border-white/5 bg-slate-900/40 overflow-hidden">
          <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
              <Input placeholder="Buscar por SKU o nombre..." className="pl-10 bg-slate-900 border-white/10" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="h-9 border-white/10 text-xs font-semibold gap-2">
                <Download className="w-3.5 h-3.5" /> Exportar
              </Button>
              <Button variant="outline" size="sm" className="h-9 border-white/10 text-xs font-semibold gap-2">
                <Filter className="w-3.5 h-3.5" /> Filtrar
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-white/5">
                <TableRow className="border-white/5">
                  <TableHead className="text-[10px] font-bold uppercase text-slate-500 pl-6">Producto</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase text-slate-500">SKU</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase text-slate-500 text-center">Stock</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase text-slate-500 text-right">Precio</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase text-slate-500 text-center">Estatus</TableHead>
                  <TableHead className="pr-6"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id} className="border-white/5 hover:bg-white/5">
                    <TableCell className="font-semibold text-slate-200 pl-6 py-4">{item.name}</TableCell>
                    <TableCell className="font-mono text-xs text-slate-500">{item.sku}</TableCell>
                    <TableCell className="text-center font-bold">{item.stock}</TableCell>
                    <TableCell className="text-right font-semibold">${item.price.toFixed(2)}</TableCell>
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
    <Card className="border-white/5 bg-slate-900/40 p-5 flex items-center justify-between">
      <div>
        <p className="text-[10px] font-bold uppercase text-slate-500 tracking-wider">{label}</p>
        <p className="text-2xl font-bold text-white mt-0.5">{value}</p>
      </div>
      <div className={cn("p-2.5 rounded-lg bg-white/5", color)}>
        <Icon className="w-5 h-5" />
      </div>
    </Card>
  );
}

function StockBadge({ status }: { status: string }) {
  const configs = {
    stable: { label: 'Estable', color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' },
    low: { label: 'Bajo', color: 'bg-amber-500/10 text-amber-500 border-amber-500/20' },
    critical: { label: 'Crítico', color: 'bg-red-500/10 text-red-500 border-red-500/20' },
    out: { label: 'Agotado', color: 'bg-slate-500/10 text-slate-400 border-slate-500/20' },
  }[status as 'stable' | 'low' | 'critical' | 'out'];

  return (
    <Badge className={cn("border px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider", configs.color)}>
      {configs.label}
    </Badge>
  );
}
