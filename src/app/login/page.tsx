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
  Apple,
  ShieldCheck,
  Fingerprint
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
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Cinematic Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-lg perspective-1000">
        <div className={cn(
          "relative w-full transition-all duration-1000 preserve-3d",
          isRegistering ? "rotate-y-180 h-[850px]" : "h-[700px]"
        )}>
          
          {/* LOGIN - FRONT SIDE */}
          <div className="absolute inset-0 backface-hidden glass rounded-[3rem] p-12 flex flex-col shadow-[0_50px_100px_rgba(0,0,0,0.8)] border-white/10">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="w-20 h-20 bg-primary rounded-[2rem] flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.4)] mb-6 transform hover:rotate-12 transition-transform duration-500">
                <Zap className="text-black w-10 h-10 fill-current" />
              </div>
              <h1 className="text-4xl font-black tracking-tighter uppercase italic leading-none">
                MSTR <span className="text-primary">PORTAL</span>
              </h1>
              <p className="text-muted-foreground mt-3 font-bold uppercase tracking-[0.5em] text-[10px]">Identificación Requerida</p>
            </div>

            <form className="space-y-6 flex-1" onSubmit={(e) => { e.preventDefault(); window.location.href = '/'; }}>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Terminal ID (Email)</Label>
                <div className="relative group">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input type="email" placeholder="admin@monstershop.com" className="pl-14 h-16 rounded-2xl bg-white/[0.03] border-white/5 focus:border-primary/50 text-lg font-medium transition-all" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground ml-2">Código de Acceso</Label>
                <div className="relative group">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="pl-14 pr-14 h-16 rounded-2xl bg-white/[0.03] border-white/5 focus:border-primary/50 text-lg font-medium transition-all" 
                    required 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <div className="text-right mt-2">
                  <Link href="#" className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline underline-offset-4">¿Recuperar Acceso?</Link>
                </div>
              </div>

              <Button type="submit" className="w-full h-16 rounded-2xl font-black text-xl uppercase tracking-widest shadow-[0_15px_30px_rgba(34,197,94,0.2)] group hover:scale-[1.02] transition-all">
                INICIAR <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </form>

            <div className="mt-10 space-y-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10"></span></div>
                <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.5em]"><span className="bg-transparent backdrop-blur-3xl px-6 text-muted-foreground">O usar</span></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-16 rounded-2xl border-white/5 gap-4 font-black uppercase tracking-widest bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/30 transition-all">
                  <Chrome className="w-6 h-6" /> Google
                </Button>
                <Button variant="outline" className="h-16 rounded-2xl border-white/5 gap-4 font-black uppercase tracking-widest bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/30 transition-all">
                  <Apple className="w-6 h-6 fill-current" /> Apple
                </Button>
              </div>

              <p className="text-center text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mt-6">
                ¿Nuevo Operador? <button onClick={() => setIsRegistering(true)} className="text-primary hover:underline underline-offset-4">Crea una cuenta</button>
              </p>
            </div>
          </div>

          {/* REGISTER - BACK SIDE */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 glass rounded-[3rem] p-12 flex flex-col shadow-[0_50px_100px_rgba(0,0,0,0.8)] border-white/10 overflow-y-auto hide-scrollbar">
            <div className="flex flex-col items-center text-center mb-10">
              <h1 className="text-4xl font-black tracking-tighter uppercase italic leading-none">
                NUEVO <span className="text-primary">REGISTRO</span>
              </h1>
              <p className="text-muted-foreground mt-3 font-bold uppercase tracking-[0.5em] text-[10px]">Inscripción de Operador</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); window.location.href = '/'; }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Nombre</Label>
                  <Input placeholder="Alex" className="h-14 rounded-2xl bg-white/[0.03] border-white/5" required />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Apellido</Label>
                  <Input placeholder="Smith" className="h-14 rounded-2xl bg-white/[0.03] border-white/5" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Email Corporativo</Label>
                <Input type="email" placeholder="correo@empresa.com" className="h-14 rounded-2xl bg-white/[0.03] border-white/5" required />
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Contraseña</Label>
                <Input type="password" placeholder="••••••••" className="h-14 rounded-2xl bg-white/[0.03] border-white/5" required />
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-2">Confirmar Código</Label>
                <Input type="password" placeholder="••••••••" className="h-14 rounded-2xl bg-white/[0.03] border-white/5" required />
              </div>

              <div className="flex items-start space-x-4 py-4">
                <Checkbox id="terms" checked={acceptedTerms} onCheckedChange={(val) => setAcceptedTerms(val === true)} className="mt-1 border-primary data-[state=checked]:bg-primary" />
                <div className="grid gap-1.5 leading-none">
                  <label htmlFor="terms" className="text-[10px] font-black text-muted-foreground leading-relaxed uppercase tracking-widest">
                    Acepto los <Link href="/terms" className="text-primary hover:underline">Protocolos Legales</Link> de MonsterShop
                  </label>
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={!acceptedTerms}
                className={cn(
                  "w-full h-16 rounded-2xl font-black text-xl uppercase tracking-widest transition-all",
                  !acceptedTerms ? "opacity-30 grayscale cursor-not-allowed" : "shadow-[0_15px_30px_rgba(34,197,94,0.2)] hover:scale-[1.02]"
                )}
              >
                REGISTRARME
              </Button>
            </form>

            <div className="mt-8 space-y-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10"></span></div>
                <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest"><span className="bg-transparent px-6 text-muted-foreground">O registrar con</span></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-14 rounded-2xl border-white/5 gap-3 font-black bg-white/[0.02]">
                  <Chrome className="w-5 h-5" /> Google
                </Button>
                <Button variant="outline" className="h-14 rounded-2xl border-white/5 gap-3 font-black bg-white/[0.02]">
                  <Apple className="w-5 h-5 fill-current" /> Apple
                </Button>
              </div>

              <p className="text-center text-[10px] font-black text-muted-foreground uppercase tracking-widest pb-6 mt-4">
                ¿Ya eres operador? <button onClick={() => setIsRegistering(false)} className="text-primary hover:underline">Accede aquí</button>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}