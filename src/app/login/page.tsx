
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Zap, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Chrome,
  Apple
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

export default function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="w-full max-w-md perspective-1000">
        <div className={cn(
          "relative w-full transition-all duration-700 preserve-3d",
          isRegistering ? "rotate-y-180 h-[800px]" : "h-[650px]"
        )}>
          
          {/* LOGIN SIDE */}
          <div className="absolute inset-0 backface-hidden bg-card border border-border/50 rounded-[2.5rem] shadow-2xl p-8 flex flex-col overflow-hidden">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 mb-4">
                <Zap className="text-primary-foreground w-8 h-8 fill-current" />
              </div>
              <h1 className="text-3xl font-black tracking-tighter uppercase italic">
                ¡Hola! <span className="text-primary underline decoration-2 underline-offset-4">Identifícate</span>
              </h1>
              <p className="text-muted-foreground text-sm mt-2 uppercase tracking-widest text-[10px] font-bold">Bienvenido de nuevo a MonsterShop.</p>
            </div>

            <form className="space-y-5 flex-1" onSubmit={(e) => { e.preventDefault(); window.location.href = '/'; }}>
              <div className="space-y-2">
                <Label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">Correo Electrónico</Label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input type="email" placeholder="nombre@empresa.com" className="pl-12 h-14 rounded-2xl bg-muted/30 border-border/50 focus:border-primary/50 transition-all" required />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <Label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Contraseña</Label>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="pl-12 pr-12 h-14 rounded-2xl bg-muted/30 border-border/50 focus:border-primary/50 transition-all" 
                    required 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <div className="text-right">
                  <Link href="#" className="text-[10px] uppercase font-bold text-primary hover:underline">¿Olvidaste tu contraseña?</Link>
                </div>
              </div>

              <Button type="submit" className="w-full h-14 rounded-2xl font-black text-lg uppercase tracking-tight shadow-xl shadow-primary/20 group">
                Entrar ahora <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="mt-8 space-y-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border/30"></span></div>
                <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest"><span className="bg-card px-4 text-muted-foreground">O usa</span></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-14 rounded-2xl border-border/50 gap-3 font-bold bg-muted/20 hover:bg-muted/50">
                  <Chrome className="w-5 h-5" /> Google
                </Button>
                <Button variant="outline" className="h-14 rounded-2xl border-border/50 gap-3 font-bold bg-muted/20 hover:bg-muted/50">
                  <Apple className="w-5 h-5 fill-current" /> Apple
                </Button>
              </div>

              <p className="text-center text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-4">
                ¿No tienes cuenta? <button onClick={() => setIsRegistering(true)} className="text-primary hover:underline">Crea una ya</button>
              </p>
            </div>
          </div>

          {/* REGISTER SIDE */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-card border border-border/50 rounded-[2.5rem] shadow-2xl p-8 flex flex-col overflow-y-auto hide-scrollbar">
            <div className="flex flex-col items-center text-center mb-6">
              <h1 className="text-3xl font-black tracking-tighter uppercase italic">
                Nueva <span className="text-primary underline decoration-2 underline-offset-4">Cuenta</span>
              </h1>
              <p className="text-muted-foreground text-sm mt-2 uppercase tracking-widest text-[10px] font-bold">Únete a la red MonsterShop.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.location.href = '/'; }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">Nombre</Label>
                  <Input placeholder="Ej. Alex" className="h-12 rounded-xl bg-muted/30 border-border/50" required />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">Apellido</Label>
                  <Input placeholder="Ej. Smith" className="h-12 rounded-xl bg-muted/30 border-border/50" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">Correo Electrónico</Label>
                <Input type="email" placeholder="correo@ejemplo.com" className="h-12 rounded-xl bg-muted/30 border-border/50" required />
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">Contraseña</Label>
                <Input type="password" placeholder="••••••••" className="h-12 rounded-xl bg-muted/30 border-border/50" required />
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-1">Confirmar Contraseña</Label>
                <Input type="password" placeholder="••••••••" className="h-12 rounded-xl bg-muted/30 border-border/50" required />
              </div>

              <div className="flex items-start space-x-3 py-2">
                <Checkbox id="terms" checked={acceptedTerms} onCheckedChange={(val) => setAcceptedTerms(val === true)} className="mt-1 border-primary data-[state=checked]:bg-primary" />
                <div className="grid gap-1.5 leading-none">
                  <label htmlFor="terms" className="text-[10px] font-bold text-muted-foreground leading-normal uppercase tracking-widest">
                    Acepto los <Link href="/terms" className="text-primary hover:underline">Términos y Condiciones</Link>
                  </label>
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={!acceptedTerms}
                className={cn(
                  "w-full h-14 rounded-2xl font-black text-lg uppercase tracking-tight transition-all",
                  !acceptedTerms ? "opacity-50 grayscale cursor-not-allowed" : "shadow-xl shadow-primary/20"
                )}
              >
                Registrarme
              </Button>
            </form>

            <div className="mt-6 space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border/30"></span></div>
                <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest"><span className="bg-card px-4 text-muted-foreground">O regístrate con</span></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-12 rounded-xl border-border/50 gap-2 font-bold bg-muted/20">
                  <Chrome className="w-4 h-4" /> Google
                </Button>
                <Button variant="outline" className="h-12 rounded-xl border-border/50 gap-2 font-bold bg-muted/20">
                  <Apple className="w-4 h-4 fill-current" /> Apple
                </Button>
              </div>

              <p className="text-center text-[10px] font-bold text-muted-foreground uppercase tracking-widest pb-4 mt-2">
                ¿Ya tienes cuenta? <button onClick={() => setIsRegistering(false)} className="text-primary hover:underline">Inicia sesión</button>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
