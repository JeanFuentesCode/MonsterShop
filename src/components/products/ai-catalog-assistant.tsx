"use client"

import React, { useState } from 'react';
import { Sparkles, Loader2, Wand2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { generateProductDescription } from "@/ai/flows/generate-product-description";
import { useToast } from "@/hooks/use-toast";

interface AICatalogAssistantProps {
  onSuggest: (name: string, description: string) => void;
}

export function AICatalogAssistant({ onSuggest }: AICatalogAssistantProps) {
  const [productType, setProductType] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleAddIngredient = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentIngredient.trim()) {
      e.preventDefault();
      setIngredients([...ingredients, currentIngredient.trim()]);
      setCurrentIngredient('');
    }
  };

  const handleGenerate = async () => {
    if (!productType) {
      toast({
        title: "Campo requerido",
        description: "Por favor indica qué tipo de producto es.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generateProductDescription({
        productType,
        ingredients,
        tags: ['premium', 'comandaflow']
      });
      onSuggest(result.productName, result.productDescription);
      toast({
        title: "¡Generado con éxito!",
        description: "Se han aplicado sugerencias creativas."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo conectar con la IA en este momento.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-primary/5 rounded-xl border border-primary/20 p-6 space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-lg text-primary">Asistente de Catálogo IA</h3>
      </div>
      
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label>¿Qué es el producto? (ej. Torta de cumpleaños)</Label>
          <Input 
            placeholder="Escribe el tipo de producto..." 
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            className="bg-card"
          />
        </div>

        <div className="space-y-2">
          <Label>Ingredientes clave (Presiona Enter)</Label>
          <Input 
            placeholder="Chocolate, Vainilla..." 
            value={currentIngredient}
            onChange={(e) => setCurrentIngredient(e.target.value)}
            onKeyDown={handleAddIngredient}
            className="bg-card"
          />
          <div className="flex flex-wrap gap-2 pt-1">
            {ingredients.map((ing, i) => (
              <Badge 
                key={i} 
                variant="secondary"
                className="cursor-pointer hover:bg-destructive hover:text-white"
                onClick={() => setIngredients(ingredients.filter((_, idx) => idx !== i))}
              >
                {ing} ×
              </Badge>
            ))}
          </div>
        </div>

        <Button 
          onClick={handleGenerate} 
          disabled={isGenerating}
          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm"
        >
          {isGenerating ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Wand2 className="w-4 h-4 mr-2" />
          )}
          {isGenerating ? "Invocando IA..." : "Sugerir Nombre y Descripción"}
        </Button>
      </div>
    </div>
  );
}