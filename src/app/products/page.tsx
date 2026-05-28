
"use client"

import React, { useState } from 'react';
import { AppShell } from "@/components/layout/app-shell";
import { useComandaStore, Product } from "@/lib/store";
import { Plus, Search, Trash2, Package, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export default function ProductsPage() {
  const { products, addProduct, deleteProduct, isLoaded } = useComandaStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    price: 0,
    stock: 0,
    minStock: 5,
  });

  if (!isLoaded) return null;

  const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSave = () => {
    if (!formData.name) return;
    addProduct({
      ...formData as Product,
      id: Date.now().toString(),
      category: '1',
      description: '',
    });
    setIsOpen(false);
    setFormData({ name: '', price: 0, stock: 0, minStock: 5 });
  };

  return (
    <AppShell>
      <div className="space-y-8">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter italic">Stock</h2>
            <p className="text-muted-foreground text-sm font-medium">Control técnico de inventario.</p>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary text-black font-black uppercase tracking-widest text-xs h-12 px-8 rounded-xl hover:scale-105 transition-transform">
                <Plus className="w-4 h-4 mr-2" />
                Añadir Item
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black border-white/10 rounded-3xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-black uppercase italic">Nuevo Producto</DialogTitle>
              </DialogHeader>
              <div className="grid gap-6 py-4">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Nombre del Producto</Label>
                  <Input 
                    placeholder="Ej: Camiseta Monster"
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="bg-white/5 border-white/10 h-12 px-4 rounded-xl focus:ring-primary"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Precio Unitario ($)</Label>
                    <Input 
                      type="number"
                      value={formData.price} 
                      onChange={e => setFormData({...formData, price: Number(e.target.value)})}
                      className="bg-white/5 border-white/10 h-12 px-4 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Stock Inicial</Label>
                    <Input 
                      type="number"
                      value={formData.stock} 
                      onChange={e => setFormData({...formData, stock: Number(e.target.value)})}
                      className="bg-white/5 border-white/10 h-12 px-4 rounded-xl"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleSave} className="w-full bg-primary text-black font-black h-12 rounded-xl">REGISTRAR EN ALMACÉN</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </header>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Buscar por nombre..." 
            className="pl-12 h-14 bg-white/5 border-white/5 rounded-2xl focus:border-primary/50 transition-colors"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
          <Table>
            <TableHeader className="bg-white/[0.03]">
              <TableRow className="border-white/5 hover:bg-transparent">
                <TableHead className="text-[10px] font-black uppercase tracking-widest py-6">Producto</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest">Existencias</TableHead>
                <TableHead className="text-[10px] font-black uppercase tracking-widest">Precio</TableHead>
                <TableHead className="text-right text-[10px] font-black uppercase tracking-widest">Acción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map(p => (
                <TableRow key={p.id} className="border-white/5 hover:bg-white/[0.02] transition-colors">
                  <TableCell className="py-6 font-bold text-sm">{p.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={cn("w-2 h-2 rounded-full", p.stock <= p.minStock ? "bg-destructive animate-pulse" : "bg-primary")} />
                      <span className={cn("font-black tabular-nums", p.stock <= p.minStock ? "text-destructive" : "text-white")}>
                        {p.stock}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-muted-foreground">${p.price.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => deleteProduct(p.id)} className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {filtered.length === 0 && (
            <div className="py-24 text-center text-muted-foreground bg-white/[0.01]">
              <Box className="w-12 h-12 mx-auto mb-4 opacity-10" />
              <p className="text-xs font-black uppercase tracking-widest opacity-50">Almacén Vacío</p>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
