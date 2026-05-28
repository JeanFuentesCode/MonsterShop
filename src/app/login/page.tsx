
"use client"

import React, { useState } from 'react';
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, Eye, EyeOff, User, UserPlus, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const AppleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.05 20.28c-.96.95-2.18 2.06-3.64 2.06-1.4 0-1.89-.86-3.58-.86s-2.25.84-3.56.84c-1.37 0-2.67-1.22-3.72-2.3C.47 17.9-.98 13.12 1.16 9.4c1.07-1.87 3-3.04 5.09-3.04 1.58 0 2.65.86 3.75.86 1.03 0 1.94-.86 3.72-.86 1.56 0 2.94.75 3.86 1.95-3.23 1.92-2.69 6.27.56 7.6-.82 2-1.93 3.92-3.09 5.37zM12.04 5.92c-.1 0-.21 0-.31-.01.12-2.45 2.15-4.41 4.54-4.41.1 0 .21 0 .32.01-.15 2.51-2.19 4.41-4.55 4.41z"/>
  </svg>
);

export default function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleAction = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isRegistering ? "Creando cuenta" : "Iniciando sesión",
      description: "Conectando con MonsterShop Server...",
    });
  };

  const toggleMode = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="min-h-screen bg-[#000000] flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      <div className="w-full max-w-[420px] perspective-1000">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <div className="p-4 bg-primary/5 rounded-[2.5rem] border border-primary/10 shadow-[0_0_40px_rgba(34,197,94,0.05)]">
            <Logo className="w-14 h-14 text-primary" />
          </div>
          <h1 className="text-3xl font-black tracking-tighter uppercase text-white">MonsterShop</h1>
        </div>

        <div className={cn(
          "relative transition-all duration-700 preserve-3d h-[600px]",
          isRegistering ? "rotate-y-180" : ""
        )}>
          {/* LOGIN SIDE */}
          <div className="absolute inset-0 backface-hidden">
            <Card className="border-border/40 bg-card/30 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl h-full flex flex-col">
              <CardHeader className="pt-10 pb-4 text-center">
                <CardTitle className="text-xl font-black uppercase text-foreground tracking-tight">
                  ¡Hola! <span className="text-primary">Identifícate</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 flex-1 overflow-y-auto px-8">
                <form onSubmit={handleAction} className="space-y-5">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Corporativo</Label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input 
                        type="email" 
                        placeholder="nombre@monstershop.com"
                        className="h-14 pl-12 rounded-2xl bg-background/50 border-border/50 focus:ring-primary text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Contraseña</Label>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input 
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="h-14 pl-12 pr-12 rounded-2xl bg-background/50 border-border/50 focus:ring-primary text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    <div className="flex justify-end px-1">
                      <button type="button" className="text-[9px] font-black text-primary uppercase hover:underline tracking-wider">¿Olvidaste tu contraseña?</button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full h-14 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all mt-4">
                    Entrar ahora
                  </Button>
                </form>

                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border/50" />
                  </div>
                  <div className="relative flex justify-center text-[9px] uppercase font-black">
                    <span className="bg-card px-4 text-muted-foreground tracking-[0.2em]">O continúa con</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-14 rounded-2xl border-border/50 bg-background/30 hover:bg-muted font-black text-[10px] uppercase gap-3 transition-all">
                    <GoogleIcon />
                    Google
                  </Button>
                  <Button variant="outline" className="h-14 rounded-2xl border-border/50 bg-background/30 hover:bg-muted font-black text-[10px] uppercase gap-3 transition-all">
                    <AppleIcon />
                    Apple
                  </Button>
                </div>

                <div className="pt-4 text-center">
                  <button 
                    onClick={toggleMode}
                    className="text-[10px] font-black uppercase text-muted-foreground hover:text-primary transition-colors tracking-widest"
                  >
                    ¿No tienes una cuenta? <span className="text-primary underline">Crea una ya</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* REGISTER SIDE */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <Card className="border-border/40 bg-card/30 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl h-full flex flex-col">
              <CardHeader className="pt-10 pb-4 text-center relative">
                <button 
                  onClick={toggleMode}
                  className="absolute left-8 top-11 p-2 rounded-xl bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <CardTitle className="text-xl font-black uppercase text-foreground tracking-tight">
                  Nueva <span className="text-primary">Cuenta</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 overflow-y-auto px-8 pb-10">
                <form onSubmit={handleAction} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Nombre</Label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input 
                          placeholder="Juan"
                          className="h-12 pl-12 rounded-xl bg-background/50 border-border/50 focus:ring-primary text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Apellido</Label>
                      <Input 
                        placeholder="Pérez"
                        className="h-12 px-4 rounded-xl bg-background/50 border-border/50 focus:ring-primary text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Corporativo</Label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input 
                        type="email" 
                        placeholder="nombre@monstershop.com"
                        className="h-12 pl-12 rounded-xl bg-background/50 border-border/50 focus:ring-primary text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Contraseña</Label>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input 
                        type="password"
                        placeholder="••••••••"
                        className="h-12 pl-12 rounded-xl bg-background/50 border-border/50 focus:ring-primary text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Confirmar Contraseña</Label>
                    <Input 
                      type="password"
                      placeholder="••••••••"
                      className="h-12 px-4 rounded-xl bg-background/50 border-border/50 focus:ring-primary text-sm"
                    />
                  </div>

                  <Button type="submit" className="w-full h-14 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all mt-4">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Registrarme
                  </Button>
                </form>

                <div className="pt-4 text-center">
                  <button 
                    onClick={toggleMode}
                    className="text-[10px] font-black uppercase text-muted-foreground hover:text-primary transition-colors tracking-widest"
                  >
                    ¿Ya tienes cuenta? <span className="text-primary underline">Inicia sesión</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <p className="text-center text-[9px] text-muted-foreground font-black uppercase tracking-[0.4em] opacity-30 mt-12">
          MonsterShop Industrial &copy; {new Date().getFullYear()}
        </p>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
