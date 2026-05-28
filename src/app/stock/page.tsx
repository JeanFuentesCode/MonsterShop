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
  Package2,
  Filter,
  Download,
  Barcode
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
  { id: 1, name: 'Motor Industrial 400W', sku: 'MTR-X400-ALPHA', stock: 2, price: 1250.50, status: 'critical' },
  { id: 2, name: 'Filtro Aire XL Industrial', sku: 'FLT-XL-2024', stock: 45, price: 112.90, status: 'stable' },
  { id: 3, name: 'Aceite Sintético V5-PRO', sku: 'OIL-V5-SYNTH', stock: 12, price: 450.00, status: 'low' },
  { id: 4, name: 'Bujía Iridium Premium', sku: 'SPK-IRID-P1', stock: 120, price: 28.50, status: 'stable' },
  { id: 5, name: 'Cinturón Transmisión L4', sku: 'BLT-TR-L4-01', stock: 0, price: 320.00, status: 'out' },
];

export default function StockPage() {
  const [items] = useState(initialStock);

  return (
    <AppShell>
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
              Inven<span className="text-primary">tario</span>
            </h1>
            <p className="text-muted-foreground mt-3 font-bold uppercase tracking-[0.4em] text-xs">Gestión de Activos y Suministros</p>
          </div>
          <Button className="rounded-[1.5rem] h-16 px-10 font-black text-lg shadow-[0_15px_30px_rgba(34,197,94,0.2)] uppercase tracking-widest gap-4 hover:scale-[1.02] transition-all">
            <Plus className="w-6 h-6" /> Añadir Activo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardMini label="SKUs Activos" value="1,242" icon={Barcode} />
          <CardMini label="Alertas Críticas" value="08" icon={TrendingDown} color="text-yellow-500" />
          <CardMini label="Déficit Total" value="02" icon={AlertCircle} color="text-red-500" />
        </div>

        <Card className="border-none glass rounded-[3rem] overflow-hidden">
          <div className="p-8 border-b border-white/5 flex flex-col md:flex-row gap-6 items-center justify-between bg-white/[0.01]">
            <div className="relative w-full md:w-[450px] group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-primary transition-colors" />
              <Input placeholder="Buscar por SKU, Nombre o Categoría..." className="pl-16 h-16 rounded-[1.5rem] bg-white/[0.03] border-white/5 text-lg font-bold" />
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <Button variant="outline" className="flex-1 md:flex-none h-16 rounded-2xl gap-3 font-black uppercase tracking-widest border-white/5 hover:bg-white/5">
                <Download className="w-5 h-5" /> CSV
              </Button>
              <Button variant="outline" className="flex-1 md:flex-none h-16 rounded-2xl gap-3 font-black uppercase tracking-widest border-white/5 hover:bg-white/5">
                <Filter className="w-5 h-5" /> Filtros
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-white/[0.02]">
                <TableRow className="border-white/5 h-20">
                  <TableHead className="font-black text-xs uppercase tracking-[0.2em] pl-10 text-muted-foreground">Producto / Descripción</TableHead>
                  <TableHead className="font-black text-xs uppercase tracking-[0.2em] text-muted-foreground">SKU Identificador</TableHead>
                  <TableHead className="font-black text-xs uppercase tracking-[0.2em] text-muted-foreground">Cantidad</TableHead>
                  <TableHead className="font-black text-xs uppercase tracking-[0.2em] text-right text-muted-foreground">Valuación ($)</TableHead>
                  <TableHead className="font-black text-xs uppercase tracking-[0.2em] text-center text-muted-foreground">Estado Red</TableHead>
                  <TableHead className="pr-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id} className="border-white/5 hover:bg-white/[0.03] transition-all group">
                    <TableCell className="font-black text-xl italic uppercase tracking-tighter pl-10 py-8 group-hover:text-primary transition-colors">
                      {item.name}
                    </TableCell>
                    <TableCell className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
                      {item.sku}
                    </TableCell>
                    <TableCell>
                      <span className="text-3xl font-black italic">{item.stock}</span>
                      <span className="text-[10px] text-muted-foreground font-bold ml-2 uppercase">Unid.</span>
                    </TableCell>
                    <TableCell className="text-right font-black text-xl italic">
                      ${item.price.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-center">
                      <StockBadge status={item.status} />
                    </TableCell>
                    <TableCell className="text-right pr-10">
                      <Button variant="ghost" size="icon" className="rounded-2xl w-12 h-12 bg-white/5 hover:bg-primary hover:text-black transition-all">
                        <MoreHorizontal className="w-5 h-5" />
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

function CardMini({ label, value, icon: Icon, color = "text-primary" }: any) {
  return (
    <div className="glass p-8 rounded-[2.5rem] border-white/5 flex items-center justify-between group hover:border-primary/30 transition-all">
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-2">{label}</p>
        <p className="text-4xl font-black italic tracking-tighter">{value}</p>
      </div>
      <div className={cn("p-5 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform", color)}>
        <Icon className="w-8 h-8" />
      </div>
    </div>
  );
}

function StockBadge({ status }: { status: string }) {
  const configs = {
    stable: { label: 'SALUDABLE', color: 'bg-primary/10 text-primary border-primary/20' },
    low: { label: 'BAJO STOCK', color: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' },
    critical: { label: 'CRÍTICO', color: 'bg-red-500/10 text-red-500 border-red-500/20' },
    out: { label: 'AGOTADO', color: 'bg-red-500/20 text-red-500 border-red-500/40' },
  }[status as 'stable' | 'low' | 'critical' | 'out'];

  return (
    <Badge className={cn("border px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em]", configs.color)}>
      {configs.label}
    </Badge>
  );
}