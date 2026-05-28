
"use client"

import React, { useEffect, useState } from 'react';
import { ShieldCheck, FileText, Scale, Lock, ShieldAlert, ArrowLeft } from "lucide-react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function TermsPage() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    setIsDark(theme === 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-12">
        <header className="space-y-6">
          <Link href="/login">
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary p-0">
              <ArrowLeft className="w-4 h-4" />
              Volver al acceso
            </Button>
          </Link>
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase text-primary tracking-widest">
              <ShieldCheck className="w-3 h-3" />
              Documentación Legal Oficial
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Términos de Servicio</h1>
            <p className="text-muted-foreground text-lg max-w-2xl font-medium">
              Contrato de licencia para el uso de la plataforma industrial MonsterShop.
              <span className="block text-sm mt-2 opacity-60 italic">Última actualización: Noviembre 2024</span>
            </p>
          </div>
        </header>

        <main className="grid gap-12">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <FileText className="w-6 h-6" />
              <h2 className="text-xl font-black uppercase tracking-tight">1. Propiedad Intelectual</h2>
            </div>
            <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
              <p>
                MonsterShop es una propiedad exclusiva de MonsterShop Corp. Todo el código fuente, diseño gráfico, algoritmos y bases de datos están protegidos por leyes internacionales de propiedad intelectual. No se permite la copia, modificación o distribución del software sin autorización expresa por escrito.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <ShieldAlert className="w-6 h-6" />
              <h2 className="text-xl font-black uppercase tracking-tight">2. Responsabilidad Operativa</h2>
            </div>
            <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
              <p>
                El usuario asume la responsabilidad total por la precisión de los datos de inventario y pedidos. MonsterShop Corp no se responsabiliza por discrepancias en almacén o pérdidas financieras derivadas del uso de la herramienta. El sistema se proporciona "tal cual" para apoyo a la gestión industrial.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Lock className="w-6 h-6" />
              <h2 className="text-xl font-black uppercase tracking-tight">3. Seguridad de Datos</h2>
            </div>
            <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
              <p>
                Implementamos estándares de encriptación corporativos para proteger la información del usuario. Sin embargo, el usuario es responsable de mantener la confidencialidad de sus credenciales de acceso. Cualquier actividad realizada bajo su cuenta se considerará de su autoría.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Scale className="w-6 h-6" />
              <h2 className="text-xl font-black uppercase tracking-tight">4. Jurisdicción</h2>
            </div>
            <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
              <p>
                Cualquier disputa legal relacionada con el uso de MonsterShop se resolverá bajo la jurisdicción de las cortes comerciales competentes del domicilio fiscal de MonsterShop Corp, renunciando el usuario a cualquier otro fuero que pudiera corresponderle.
              </p>
            </div>
          </section>
        </main>

        <footer className="pt-20 border-t border-border/50 text-center">
          <p className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.4em] opacity-40">
            MonsterShop Legal Division &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}
