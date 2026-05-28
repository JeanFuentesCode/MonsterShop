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
  Fingerprint,
  ChevronLeft
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
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-[440px] perspective-1000">
        <div className={cn(
          "relative w-full transition-all duration-700 preserve-3d min-h-[620px]",
          isRegistering ? "rotate-y-180" : ""
        )}>
          
          {/* LOGIN - FRONT SIDE */}
          <div className="absolute inset-0 backface-hidden glass rounded-3xl p-10 flex flex-col shadow-2xl border-white/10">
            <div className="flex flex-col mb-8">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-primary w-6 h-6 fill-current" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white mb-2">¡Hola! Bienvenido</h1>
              <p className="text-sm text-slate-400">Identifícate para acceder al portal industrial.</p>
            </div>

            <form className="space-y-5 flex-1" onSubmit={(e) => { e.preventDefault(); window.location.href = '/'; }}>
              <div className="space-y-2">
                <Label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Terminal ID</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input type="email" placeholder="nombre@empresa.com" className="pl-11 h-12 bg-slate-900/50 border-white/10 focus:border-primary/50 transition-all" required />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Código de Acceso</Label>
                  <Link href="#" className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">¿Olvidaste tu contraseña?</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="pl-11 pr-11 h-12 bg-slate-900/50 border-white/10 focus:border-primary/50 transition-all" 
                    required 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full h-12 rounded-xl font-bold uppercase tracking-wider shadow-lg bg-primary hover:bg-primary/90 transition-all">
                Iniciar Sesión <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>

            <div className="mt-8 space-y-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/5"></span></div>
                <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500"><span className="bg-slate-950 px-4">O continuar con</span></div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-11 rounded-xl border-white/10 gap-3 font-semibold text-xs bg-white/5 hover:bg-white/10 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="h-11 rounded-xl border-white/10 gap-3 font-semibold text-xs bg-white/5 hover:bg-white/10 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C4.3 16.92 3.5 12 5.6 8.3c1.05-1.85 2.93-3.01 4.91-3.01 1.48 0 2.5.54 3.34.54.81 0 2.15-.65 3.86-.48 1.45.13 2.58.68 3.32 1.74-2.92 1.76-2.45 5.62.48 6.8-.7 1.76-1.58 3.51-2.95 5.38zM15.34 3.5c-.15 2.22-1.93 3.98-4.04 3.84-.25-2.19 1.83-4.25 4.04-3.84z" />
                  </svg>
                  Apple
                </Button>
              </div>

              <p className="text-center text-xs font-medium text-slate-500">
                ¿Nuevo operador? <button onClick={() => setIsRegistering(true)} className="text-primary hover:underline underline-offset-4">Crea una cuenta</button>
              </p>
            </div>
          </div>

          {/* REGISTER - BACK SIDE */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 glass rounded-3xl p-10 flex flex-col shadow-2xl border-white/10 overflow-y-auto">
            <button onClick={() => setIsRegistering(false)} className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-xs font-semibold mb-6">
              <ChevronLeft className="w-4 h-4" /> Volver al Login
            </button>
            
            <div className="mb-8">
              <h1 className="text-2xl font-bold tracking-tight text-white mb-2">Registro de Operador</h1>
              <p className="text-sm text-slate-400">Completa el perfil para el alta en el sistema.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.location.href = '/'; }}>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label className="text-[10px] font-bold uppercase text-slate-500 ml-1">Nombre</Label>
                  <Input placeholder="Alex" className="h-11 bg-slate-900/50 border-white/10" required />
                </div>
                <div className="space-y-1">
                  <Label className="text-[10px] font-bold uppercase text-slate-500 ml-1">Apellido</Label>
                  <Input placeholder="Smith" className="h-11 bg-slate-900/50 border-white/10" required />
                </div>
              </div>

              <div className="space-y-1">
                <Label className="text-[10px] font-bold uppercase text-slate-500 ml-1">Email Corporativo</Label>
                <Input type="email" placeholder="correo@empresa.com" className="h-11 bg-slate-900/50 border-white/10" required />
              </div>

              <div className="space-y-1">
                <Label className="text-[10px] font-bold uppercase text-slate-500 ml-1">Contraseña</Label>
                <Input type="password" placeholder="••••••••" className="h-11 bg-slate-900/50 border-white/10" required />
              </div>

              <div className="space-y-1">
                <Label className="text-[10px] font-bold uppercase text-slate-500 ml-1">Confirmar Código</Label>
                <Input type="password" placeholder="••••••••" className="h-11 bg-slate-900/50 border-white/10" required />
              </div>

              <div className="flex items-start space-x-3 py-3">
                <Checkbox id="terms" checked={acceptedTerms} onCheckedChange={(val) => setAcceptedTerms(val === true)} className="mt-1 border-primary" />
                <label htmlFor="terms" className="text-[10px] text-slate-400 leading-normal font-medium">
                  Acepto los <Link href="/terms" className="text-primary hover:underline">Protocolos Legales</Link> de MonsterShop para operadores.
                </label>
              </div>

              <Button 
                type="submit" 
                disabled={!acceptedTerms}
                className={cn(
                  "w-full h-12 rounded-xl font-bold uppercase tracking-wider transition-all",
                  !acceptedTerms ? "opacity-30 grayscale cursor-not-allowed" : "shadow-lg"
                )}
              >
                Registrar Operador
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
