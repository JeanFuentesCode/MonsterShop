
"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Mail, Lock } from "lucide-react";

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
            <p className="text-muted-foreground text-xs font-medium uppercase tracking-widest">Sistema de Gestión Industrial</p>
          </div>
        </div>

        <Card className="border-border bg-card/50 backdrop-blur-xl rounded-3xl shadow-2xl">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-xl font-black uppercase text-center">Bienvenido</CardTitle>
            <CardDescription className="text-center text-[10px] uppercase font-bold tracking-wider">
              Ingresa tus credenciales para continuar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-12 rounded-2xl border-border bg-background hover:bg-muted font-black text-[10px] uppercase gap-2">
                <GoogleIcon className="w-4 h-4" />
                Google
              </Button>
              <Button variant="outline" className="h-12 rounded-2xl border-border bg-background hover:bg-muted font-black text-[10px] uppercase gap-2">
                <Apple className="w-4 h-4" />
                Apple
              </Button>
            </div>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase font-black">
                <span className="bg-card px-3 text-muted-foreground">O continúa con</span>
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
                    className="h-12 pl-12 rounded-2xl bg-background border-border focus:ring-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Contraseña</Label>
                  <Link href="#" className="text-[9px] font-black text-primary uppercase hover:underline">¿Olvidaste tu clave?</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pl-12 rounded-2xl bg-background border-border focus:ring-primary"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full h-12 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                Acceder al Panel
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 pb-8">
            <p className="text-[10px] text-muted-foreground font-medium text-center">
              ¿No tienes acceso? <Link href="#" className="text-primary font-black uppercase hover:underline">Contacta con Sistemas</Link>
            </p>
          </CardFooter>
        </Card>

        {/* Footer Info */}
        <p className="text-center text-[9px] text-muted-foreground font-black uppercase tracking-widest opacity-40">
          MonsterShop v2.4.0 &copy; {new Date().getFullYear()} - Todos los derechos reservados
        </p>
      </div>
    </div>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}
