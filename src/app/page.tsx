import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bell, CalendarDays, ChartBar, ChartPie, ChevronRight, Laptop, MessageCircle, Plus, Share2, Sparkles, Users, Wallet } from 'lucide-react';

const summaryCards = [
  {
    title: 'Ganancias Totales',
    value: '142.99K',
    subtitle: 'Del mes en curso',
    icon: Wallet,
    color: 'bg-violet-500/10 text-violet-300',
  },
  {
    title: 'Ganancia Promedio',
    value: '20.284K',
    subtitle: 'Ganancia diaria de este mes',
    icon: ChartBar,
    color: 'bg-violet-500/10 text-violet-300',
  },
  {
    title: 'Tasa de Conversión',
    value: '74.86%',
    subtitle: '+6.04% mayor que el mes pasado',
    icon: ChartPie,
    color: 'bg-emerald-500/10 text-emerald-300',
  },
];

const salesBars = [
  { label: 'Sun', a: 30, b: 45 },
  { label: 'Mon', a: 50, b: 80 },
  { label: 'Tue', a: 90, b: 60 },
  { label: 'Wed', a: 40, b: 55 },
  { label: 'Thu', a: 60, b: 30 },
  { label: 'Fri', a: 20, b: 40 },
  { label: 'Sat', a: 85, b: 70 },
];

const topStores = [
  { name: 'Solaris Sparkle', location: 'Miami, Florida', sales: '102 Cantidad', amount: '10.80K' },
  { name: 'Luna Market', location: 'Austin, Texas', sales: '84 Cantidad', amount: '8.20K' },
  { name: 'Nebula Shop', location: 'Seattle, Washington', sales: '77 Cantidad', amount: '7.60K' },
  { name: 'Aurora Point', location: 'Los Ángeles, CA', sales: '94 Cantidad', amount: '9.10K' },
];

const moreAnalysis = [
  { label: 'Performance', icon: ChartBar },
  { label: 'Nuevos pedidos', icon: ChartPie },
  { label: 'Membresías', icon: Wallet },
];

const teamMembers = [
  { name: 'Sofía', role: 'Ventas y soporte' },
  { name: 'Mateo', role: 'Ventas y soporte' },
  { name: 'Valentina', role: 'Ventas y soporte' },
];

export default function Page() {
  return (
    <AppShell>
        <div className="space-y-10">
          <section className="rounded-[2rem] border border-slate-800 bg-slate-950/85 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-white">Panel de Control</h1>
                <p className="mt-2 text-sm text-slate-400">Resumen de desempeño en tiempo real</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="ghost" size="icon" className="rounded-full bg-slate-900/80 text-slate-200 hover:bg-slate-800">
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative rounded-full bg-slate-900/80 text-slate-200 hover:bg-slate-800">
                  <Bell className="h-5 w-5" />
                  <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-slate-950" />
                </Button>
                <div className="hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 px-4 py-3 text-slate-300 md:flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80"
                    alt="Perfil"
                    className="h-10 w-10 rounded-full border border-slate-800 object-cover"
                  />
                  <div className="text-right">
                    <p className="text-sm font-semibold text-white">Alayna Hossain</p>
                    <p className="text-xs text-slate-400">Sales Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 md:grid-cols-3">
            {summaryCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-300 mb-4">
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-3xl ${card.color}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    {card.title}
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-white">{card.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{card.subtitle}</p>
                  </div>
                </Card>
              );
            })}
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.7fr_0.9fr]">
            <Card className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-white">Venta Regular</h2>
                  <p className="mt-1 text-sm text-slate-400">Comparativa semanal de ingresos</p>
                </div>
                <Button variant="outline" className="rounded-full border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800">
                  <Share2 className="h-4 w-4" /> Exportar
                </Button>
              </div>
              <div className="mt-8 rounded-[1.5rem] bg-slate-900/80 p-5">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-full space-y-8 text-xs text-slate-600">
                    {['50k', '40k', '30k', '20k'].map((label) => (
                      <div key={label} className="flex items-center gap-3">
                        <span className="w-10 text-right font-medium">{label}</span>
                        <div className="h-px flex-1 bg-slate-800" />
                      </div>
                    ))}
                  </div>
                  <div className="relative z-10 flex h-full items-end justify-between gap-3 pl-12">
                    {salesBars.map((bar) => (
                      <div key={bar.label} className="flex h-full w-full max-w-[40px] flex-col items-center gap-2">
                        <div className="grid h-full w-full items-end gap-1">
                          <div style={{ height: `${bar.a}%` }} className="rounded-t-3xl bg-violet-500" />
                          <div style={{ height: `${bar.b}%` }} className="rounded-t-3xl bg-emerald-500" />
                        </div>
                        <span className="text-xs text-slate-400">{bar.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Equipo Destacado</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">34 miembros activos</h3>
                  </div>
                  <div className="rounded-3xl bg-slate-900/80 p-3 text-slate-300">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  {['Sofía', 'Mateo', 'Valentina'].map((name) => (
                    <div key={name} className="flex items-center justify-between gap-4 rounded-[1.75rem] border border-slate-800 bg-slate-900/70 px-4 py-4">
                      <div className="flex items-center gap-4">
                        <div className="grid h-12 w-12 place-items-center rounded-3xl bg-slate-800 text-slate-200">{name.charAt(0)}</div>
                        <div>
                          <p className="font-semibold text-white">{name}</p>
                          <p className="text-sm text-slate-400">Ventas y soporte</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-emerald-400">+18%</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Próxima reunión</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">Reunión de equipo</h3>
                  </div>
                  <div className="rounded-3xl bg-slate-900/80 p-3 text-slate-300">
                    <Users className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-400">Planifica el lanzamiento de la nueva colección y revisa los resultados de ventas.</p>
                <Button className="mt-6 w-full rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90">Ver detalles</Button>
              </Card>
            </div>
          </section>

          <Card className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20 overflow-x-auto">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Tienda Principal</p>
                <h2 className="text-xl font-semibold text-white">Resumen de comercio</h2>
              </div>
              <Button variant="outline" className="rounded-full border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800">
                Compartir
              </Button>
            </div>
            <table className="min-w-[500px] w-full text-left text-sm text-slate-300">
              <thead>
                <tr className="border-b border-slate-800 text-slate-500 uppercase tracking-[0.18em] text-xs">
                  <th className="pb-3 font-medium">Nombre de la Tienda</th>
                  <th className="pb-3 font-medium">Ubicación</th>
                  <th className="pb-3 font-medium">Venta</th>
                  <th className="pb-3 font-medium text-right">Monto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {topStores.map((store) => (
                  <tr key={store.name + store.amount} className="transition-colors hover:bg-slate-900/70">
                    <td className="py-4 font-medium text-slate-200">{store.name}</td>
                    <td className="py-4 text-slate-400">{store.location}</td>
                    <td className="py-4 text-slate-400">{store.sales}</td>
                    <td className="py-4 font-semibold text-slate-200 text-right">{store.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
    </AppShell>
  );
}