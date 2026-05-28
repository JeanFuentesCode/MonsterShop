"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Mail, Lock, Chrome } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticación futura
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[400px] space-y-8">
        {/* Header / Logo */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-primary/10 rounded-3xl border border-primary/20">
            <Logo className="w-12 h-12 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tighter uppercase">MonsterShop</h1>
            <p className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.3em]">Gestión Industrial Pro</p>
          </div>
        </div>

        <Card className="border-border bg-card/50 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
          <CardHeader className="space-y-1 pb-6 text-center border-b border-border/50 bg-muted/20">
            <CardTitle className="text-xl font-black uppercase">Acceso al Sistema</CardTitle>
            <CardDescription className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
              Identifícate para continuar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-8">
            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-12 rounded-2xl border-border bg-background hover:bg-muted font-black text-[10px] uppercase gap-2 transition-all active:scale-95">
                <Chrome className="w-4 h-4 text-primary" />
                Google
              </Button>
              <Button variant="outline" className="h-12 rounded-2xl border-border bg-background hover:bg-muted font-black text-[10px] uppercase gap-2 transition-all active:scale-95">
                <Apple className="w-4 h-4" />
                Apple
              </Button>
            </div>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-[9px] uppercase font-black">
                <span className="bg-card px-4 text-muted-foreground tracking-widest">O credenciales</span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Corporativo</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    type="email" 
                    placeholder="nombre@monstershop.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 pl-12 rounded-2xl bg-background border-border focus:ring-primary text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Contraseña</Label>
                  <Link href="#" className="text-[9px] font-black text-primary uppercase hover:underline">Recuperar</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pl-12 rounded-2xl bg-background border-border focus:ring-primary text-sm"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full h-12 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                Entrar ahora
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 pb-8 border-t border-border/50 pt-6 bg-muted/10">
            <p className="text-[10px] text-muted-foreground font-bold text-center">
              ¿Sin acceso? <Link href="#" className="text-primary font-black uppercase hover:underline">Contactar soporte</Link>
            </p>
          </CardFooter>
        </Card>

        {/* Footer Info */}
        <p className="text-center text-[9px] text-muted-foreground font-black uppercase tracking-widest opacity-40">
          MonsterShop v2.5.0 Industrial &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
