'use client';

import React from 'react';
import Link from 'next/link';
import { Zap, ArrowLeft, ShieldCheck, FileText, Lock, Scale, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-foreground selection:bg-primary/30 selection:text-primary font-sans relative overflow-x-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />
      
      <header className="sticky top-0 z-[100] glass border-b border-white/5 h-24">
        <div className="max-w-6xl mx-auto px-8 h-full flex items-center justify-between">
          <Link href="/login" className="flex items-center gap-3 group text-muted-foreground hover:text-primary transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="text-xs uppercase font-black tracking-[0.3em]">Retornar al Portal</span>
          </Link>
          <div className="flex items-center gap-4">
            <Zap className="text-primary w-8 h-8 fill-current" />
            <span className="text-2xl font-black tracking-tighter uppercase italic">MonsterShop</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-24 md:py-32">
        <div className="space-y-24">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-primary/10 border border-primary/30 shadow-[0_0_50px_rgba(34,197,94,0.1)] mb-4">
              <ShieldCheck className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
              Protocolos <span className="text-primary">Legales</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto font-bold uppercase tracking-[0.5em] text-xs">
              Última Revisión de Seguridad: Mayo 2024
            </p>
          </div>

          <div className="grid gap-16">
            <Section title="01. Marco Operativo" icon={FileText}>
              Al acceder al sistema MonsterShop, el operador acepta que esta es una herramienta de uso profesional de alta precisión. El uso indebido de las APIs de inventario o la manipulación fraudulenta de los flujos de caja será causal de revocación inmediata de las credenciales de seguridad L4.
            </Section>

            <Section title="02. Seguridad de Terminales" icon={Lock}>
              Cada terminal de acceso es responsabilidad única del operador. MonsterShop utiliza cifrado simétrico AES-256 para todas las transacciones de stock. Usted se compromete a no compartir sus llaves de acceso y a reportar cualquier anomalía en el panel de control inmediatamente.
            </Section>

            <Section title="03. Propiedad Intelectual Industrial" icon={Zap}>
              Todos los algoritmos de optimización de carga, diseños de interfaz y logotipos de MonsterShop son propiedad exclusiva. Queda prohibida la extracción de datos mediante scrapers o ingeniería inversa sobre nuestra arquitectura de microservicios.
            </Section>

            <Section title="04. Limitación de Daños" icon={Scale}>
              MonsterShop no se hace responsable por errores en la logística física derivados de la entrada incorrecta de datos por parte del operador. El sistema es una herramienta de asistencia y la validación final siempre recae en el supervisor de planta.
            </Section>
          </div>

          <Card className="p-12 rounded-[3rem] glass border-primary/20 text-center space-y-10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            <div className="space-y-4 relative z-10">
              <p className="text-2xl font-black uppercase italic tracking-tighter">¿Requiere Asistencia Técnica?</p>
              <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">Nuestro equipo de soporte L4 está disponible 24/7 para incidencias críticas.</p>
            </div>
            <Button className="rounded-2xl px-12 h-16 font-black uppercase tracking-widest text-lg shadow-[0_15px_30px_rgba(34,197,94,0.2)] hover:scale-105 transition-all">
              Abrir Canal de Soporte
            </Button>
          </Card>
        </div>
      </main>

      <footer className="py-24 border-t border-white/5 text-center bg-white/[0.01]">
        <div className="flex flex-col items-center gap-6">
          <Zap className="text-primary/40 w-10 h-10" />
          <p className="text-[10px] uppercase font-black tracking-[0.5em] text-muted-foreground/60">
            MonsterShop © 2024 - Todos los Protocolos Reservados
          </p>
        </div>
      </footer>
    </div>
  );
}

function Section({ title, children, icon: Icon }: { title: string, children: React.ReactNode, icon: any }) {
  return (
    <div className="space-y-6 group">
      <div className="flex items-center gap-6">
        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all border border-white/5 group-hover:border-primary/40">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-black uppercase italic tracking-tighter text-foreground group-hover:text-primary transition-colors">{title}</h2>
      </div>
      <div className="pl-20 text-lg leading-relaxed text-muted-foreground font-medium">
        {children}
      </div>
    </div>
  );
}