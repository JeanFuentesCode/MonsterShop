"use client"

import React, { useState } from 'react';
import { AppShell } from "@/components/layout/app-shell";
import { useComandaStore, Product } from "@/lib/store";
import { 
  Plus, 
  Search, 
  Trash2, 
  Edit, 
  Tag, 
  Filter,
  Package
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { AICatalogAssistant } from "@/components/products/ai-catalog-assistant";
import { Textarea } from "@/components/ui/textarea";

export default function ProductsPage() {
  const { products, categories, addProduct, updateProduct, deleteProduct, isLoaded } = useComandaStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [isNewOpen, setIsNewOpen] = useState(false);
  
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    minStock: 5,
    category: '',
  });

  if (!isLoaded) return null;

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSave = () => {
    if (!formData.name || !formData.category) return;
    
    const newProduct: Product = {
      ...formData as Product,
      id: Math.random().toString(36).substr(2, 9),
      tags: [],
    };
    
    addProduct(newProduct);
    setIsNewOpen(false);
    setFormData({ name: '', description: '', price: 0, stock: 0, minStock: 5, category: '' });
  };

  const handleAISuggestion = (name: string, description: string) => {
    setFormData({ ...formData, name, description });
  };

  return (
    <AppShell>
      <div className="space-y-10 max-w-7xl mx-auto pb-20">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10">
          <div className="space-y-2">
            <h2 className="text-5xl font-black tracking-tighter text-white">CATÁLOGO <span className="text-gold">MODULAR</span></h2>
            <p className="text-muted-foreground text-lg">Ingeniería de inventario y gestión de activos.</p>
          </div>
          <Dialog open={isNewOpen} onOpenChange={setIsNewOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary text-black font-bold rounded-2xl shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-primary/50 gap-2 h-14 px-8 transition-all">
                <Plus className="w-5 h-5" />
                Nueva Unidad
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl bg-black border-white/10 text-white rounded-[2rem]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold tracking-tight">Expandir Inventario</DialogTitle>
              </DialogHeader>
              
              <div className="grid gap-6 py-4">
                <AICatalogAssistant onSuggest={handleAISuggestion} />

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Nombre Técnico</Label>
                    <Input 
                      className="bg-white/5 border-white/10 rounded-xl h-12"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Identificador del producto..."
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Clasificación</Label>
                    <Select onValueChange={(v) => setFormData({ ...formData, category: v })}>
                      <SelectTrigger className="bg-white/5 border-white/10 rounded-xl h-12">
                        <SelectValue placeholder="Seleccionar..." />
                      </SelectTrigger>
                      <SelectContent className="bg-black border-white/10">
                        {categories.map(c => (
                          <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Especificaciones</Label>
                  <Textarea 
                    className="bg-white/5 border-white/10 rounded-xl"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Descripción técnica y beneficios..."
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Valor Unitario ($)</Label>
                    <Input 
                      type="number" 
                      className="bg-white/5 border-white/10 rounded-xl h-12"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Stock Real</Label>
                    <Input 
                      type="number" 
                      className="bg-white/5 border-white/10 rounded-xl h-12"
                      value={formData.stock}
                      onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Alerta Mínima</Label>
                    <Input 
                      type="number" 
                      className="bg-white/5 border-white/10 rounded-xl h-12"
                      value={formData.minStock}
                      onChange={(e) => setFormData({ ...formData, minStock: Number(e.target.value) })}
                    />
                  </div>
                </div>
              </div>

              <DialogFooter className="gap-4">
                <Button variant="ghost" onClick={() => setIsNewOpen(false)} className="rounded-xl">Cancelar</Button>
                <Button onClick={handleSave} className="bg-primary text-black font-bold rounded-xl px-8">Confirmar Ingreso</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Table Section */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-3xl shadow-2xl">
          <div className="p-8 border-b border-white/5 flex flex-wrap items-center gap-6 justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                className="pl-12 bg-white/5 border-white/10 rounded-2xl h-12 text-sm focus:ring-primary/50" 
                placeholder="Filtrar por nombre o SKU..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 h-12 px-6 gap-2">
                <Filter className="w-4 h-4" />
                Filtros
              </Button>
              <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 h-12 px-6 gap-2">
                <Tag className="w-4 h-4" />
                Categorías
              </Button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-white/[0.01]">
                <TableRow className="border-white/5 hover:bg-transparent">
                  <TableHead className="py-6 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Entidad</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Categoría</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Unidades</TableHead>
                  <TableHead className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Valor Mercado</TableHead>
                  <TableHead className="text-right px-8 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Operaciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((p) => (
                  <TableRow key={p.id} className="border-white/5 hover:bg-white/[0.02] transition-colors group">
                    <TableCell className="py-6 px-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                          <Package className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-white group-hover:text-gold transition-colors text-base">
                            {p.name}
                            {p.stock <= p.minStock && (
                              <Badge className="ml-3 bg-destructive/20 text-destructive text-[9px] font-black tracking-widest uppercase py-0.5 border-none">
                                Riesgo Stock
                              </Badge>
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground font-medium mt-1 max-w-xs truncate">{p.description}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="rounded-lg border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest px-3">
                        {categories.find(c => c.id === p.category)?.name || 'General'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                         <div className={cn(
                           "w-2 h-2 rounded-full ring-4 shadow-lg",
                           p.stock === 0 ? "bg-destructive ring-destructive/10" : p.stock <= p.minStock ? "bg-primary ring-primary/10" : "bg-green-500 ring-green-500/10"
                         )} />
                         <span className="font-mono font-bold text-sm">{p.stock} <span className="text-muted-foreground text-[10px]">U.</span></span>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono font-black text-white text-base">
                      ${p.price.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right px-8">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="rounded-xl hover:bg-white/5 text-muted-foreground hover:text-white"><Edit className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" onClick={() => deleteProduct(p.id)} className="rounded-xl hover:bg-destructive/10 text-muted-foreground hover:text-destructive">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {filteredProducts.length === 0 && (
              <div className="py-32 text-center">
                <Package className="w-16 h-16 text-white/5 mx-auto mb-6" />
                <p className="text-muted-foreground font-bold text-lg">Criterio de búsqueda sin resultados.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');