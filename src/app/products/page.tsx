"use client"

import React, { useState } from 'react';
import { AppShell } from "@/components/layout/app-shell";
import { useComandaStore, Product } from "@/lib/store";
import { Plus, Search, Trash2, Package } from "lucide-react";
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
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Inventario</h2>
            <p className="text-sm text-muted-foreground">Control total de existencias.</p>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-black font-bold">
                <Plus className="w-4 h-4 mr-2" />
                Nuevo
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black border-white/10">
              <DialogHeader>
                <DialogTitle>Registrar Producto</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label>Nombre</Label>
                  <Input 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="bg-white/5 border-white/10"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Precio ($)</Label>
                    <Input 
                      type="number"
                      value={formData.price} 
                      onChange={e => setFormData({...formData, price: Number(e.target.value)})}
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Stock Inicial</Label>
                    <Input 
                      type="number"
                      value={formData.stock} 
                      onChange={e => setFormData({...formData, stock: Number(e.target.value)})}
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleSave} className="w-full bg-primary text-black font-bold">Guardar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Buscar producto..." 
            className="pl-10 bg-white/5 border-white/10"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="border border-white/10 rounded-xl overflow-hidden">
          <Table>
            <TableHeader className="bg-white/[0.02]">
              <TableRow className="border-white/10">
                <TableHead>Nombre</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Precio</TableHead>
                <TableHead className="text-right">Acción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map(p => (
                <TableRow key={p.id} className="border-white/10 hover:bg-white/[0.01]">
                  <TableCell className="font-medium">{p.name}</TableCell>
                  <TableCell>
                    <span className={p.stock <= p.minStock ? "text-destructive font-bold" : ""}>
                      {p.stock}
                    </span>
                  </TableCell>
                  <TableCell>${p.price.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => deleteProduct(p.id)} className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {filtered.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              <Package className="w-8 h-8 mx-auto mb-2 opacity-20" />
              Sin resultados
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}