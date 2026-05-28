
'use client';

import React from 'react';
import Link from 'next/link';
import { Zap, ArrowLeft, ShieldCheck, FileText, Lock, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground dark">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/login" className="flex items-center gap-2 group text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] uppercase font-black tracking-widest">Volver</span>
          </Link>
          <div className="flex items-center gap-2">
            <Zap className="text-primary w-5 h-5 fill-current" />
            <span className="text-sm font-black tracking-tighter uppercase italic">MonsterShop</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-primary/10 border border-primary/20 mb-4">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
              Términos y <span className="text-primary">Condiciones</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto uppercase tracking-widest text-[10px] font-bold">
              Última actualización: 20 de mayo de 2024
            </p>
          </div>

          <div className="grid gap-12 text-sm leading-relaxed text-muted-foreground/80 font-medium">
            <Section title="1. Introducción Legal" icon={FileText}>
              Al acceder y utilizar el sistema de gestión MonsterShop, usted acepta cumplir con estos términos. Si no está de acuerdo con alguna parte, debe cesar el uso de la plataforma inmediatamente. Este es un contrato vinculante entre el usuario y MonsterShop Corporation.
            </Section>

            <Section title="2. Uso de la Plataforma" icon={Zap}>
              MonsterShop es una herramienta de uso industrial y profesional. El usuario se compromete a no utilizar el sistema para actividades ilícitas, fraude o manipulación de datos de inventario. Cualquier intento de ingeniería inversa o ataque cibernético resultará en la cancelación inmediata de la cuenta y acciones legales.
            </Section>

            <Section title="3. Protección de Datos" icon={Lock}>
              La seguridad de su inventario y datos de ventas es nuestra prioridad. MonsterShop utiliza cifrado de grado militar para proteger la información. Usted es responsable de mantener la confidencialidad de sus credenciales de acceso y de cualquier actividad que ocurra bajo su cuenta.
            </Section>

            <Section title="4. Propiedad Intelectual" icon={ShieldCheck}>
              Todo el software, diseño, logotipos y algoritmos de optimización de MonsterShop son propiedad exclusiva de la empresa. No se permite la reproducción total o parcial del código ni de la estética visual de la plataforma sin autorización expresa por escrito.
            </Section>

            <Section title="5. Limitación de Responsabilidad" icon={Scale}>
              MonsterShop no se hace responsable por pérdidas económicas derivadas de errores en la carga de datos por parte del usuario o interrupciones temporales del servicio fuera de nuestro control razonable. El sistema se proporciona "tal cual".
            </Section>
          </div>

          <div className="p-8 rounded-3xl bg-muted/50 border border-border/50 text-center space-y-6">
            <p className="text-sm text-foreground font-bold uppercase tracking-widest">
              ¿Tiene dudas sobre nuestras políticas industriales?
            </p>
            <Button className="rounded-2xl px-8 h-12 font-black uppercase tracking-tighter">
              Contactar Soporte Técnico
            </Button>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-border/50 text-center">
        <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
          MonsterShop © 2024 - Sistema de Gestión de Alto Rendimiento
        </p>
      </footer>
    </div>
  );
}

function Section({ title, children, icon: Icon }: { title: string, children: React.ReactNode, icon: any }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-muted flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <h2 className="text-lg font-black uppercase italic text-foreground">{title}</h2>
      </div>
      <div className="pl-11">
        {children}
      </div>
    </div>
  );
}
