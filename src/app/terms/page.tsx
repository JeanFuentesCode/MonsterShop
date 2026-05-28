"use client"

import React from 'react';
import { AppShell } from "@/components/layout/app-shell";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShieldCheck, FileText, Scale, Lock, ShieldAlert } from "lucide-react";

export default function TermsPage() {
  return (
    <AppShell>
      <div className="max-w-4xl mx-auto space-y-10 py-6">
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase text-primary tracking-widest">
            <ShieldCheck className="w-3 h-3" />
            Marco Legal Corporativo
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Términos y Condiciones</h1>
          <p className="text-muted-foreground text-sm max-w-2xl font-medium">
            Al utilizar MonsterShop, usted acepta las siguientes normas de uso industrial y protección de datos. Última actualización: Octubre 2023.
          </p>
        </header>

        <ScrollArea className="h-[60vh] rounded-3xl border border-border/50 bg-card/30 p-8 md:p-12 backdrop-blur-sm shadow-xl">
          <div className="space-y-12 pr-6">
            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <FileText className="w-5 h-5" />
                <h2 className="text-lg font-black uppercase tracking-tight">1. Propiedad y Licencia</h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                MonsterShop es una plataforma de gestión industrial propiedad de MonsterShop Corp. Se otorga una licencia de uso limitada, no exclusiva y revocable para la gestión de inventarios y pedidos comerciales. Queda estrictamente prohibida la ingeniería inversa o el acceso no autorizado al código fuente.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <ShieldAlert className="w-5 h-5" />
                <h2 className="text-lg font-black uppercase tracking-tight">2. Responsabilidad de Uso</h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                El usuario es el único responsable de la veracidad de los datos introducidos (stock, precios, referencias de pago). MonsterShop no se hace responsable por pérdidas financieras derivadas de errores humanos en el registro de pedidos o existencias. El sistema es una herramienta de apoyo operativo.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Lock className="w-5 h-5" />
                <h2 className="text-lg font-black uppercase tracking-tight">3. Protección de Datos y Privacidad</h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nos comprometemos a proteger sus datos corporativos mediante encriptación SSL de nivel industrial. Sus credenciales de acceso y listas de clientes son tratadas con estricta confidencialidad y nunca serán compartidas con terceros sin consentimiento explícito, salvo requerimiento legal.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Scale className="w-5 h-5" />
                <h2 className="text-lg font-black uppercase tracking-tight">4. Limitación de Responsabilidad Legal</h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bajo ninguna circunstancia MonsterShop Corp será responsable de daños indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso del software. No garantizamos el funcionamiento ininterrumpido del sistema en condiciones de red inestables.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <ShieldCheck className="w-5 h-5" />
                <h2 className="text-lg font-black uppercase tracking-tight">5. Modificaciones del Servicio</h2>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nos reservamos el derecho de actualizar estos términos en cualquier momento para reflejar cambios en la funcionalidad o en la legislación vigente. El uso continuado del servicio tras dichas actualizaciones implica la aceptación de los nuevos términos.
              </p>
            </section>
          </div>
        </ScrollArea>

        <footer className="pt-6 border-t border-border/50 text-center">
          <p className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.3em]">
            MonsterShop Legal Division &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </AppShell>
  );
}
