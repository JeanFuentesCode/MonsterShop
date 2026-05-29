'use client';

import AppShell from '@/components/app-shell';

export default function EstadisticasPage() {
  return (
    <AppShell>
      <main className="p-6 md:p-12 min-h-screen bg-black">
        {/* Page Header Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <p className="font-body-md text-body-md text-on-surface-variant">Resumen de tus métricas clave y tendencias de rendimiento.</p>
          </div>
          <div className="flex items-center gap-3 bg-surface-container-lowest rounded-lg p-1 shadow-sm border border-surface-variant">
            <button className="px-4 py-1.5 rounded-md bg-surface-container font-label-mono text-label-mono text-on-surface shadow-sm transition-colors">
              30 Días
            </button>
            <button className="px-4 py-1.5 rounded-md hover:bg-surface-container font-label-mono text-label-mono text-on-surface-variant transition-colors">
              90 Días
            </button>
            <button className="px-4 py-1.5 rounded-md hover:bg-surface-container font-label-mono text-label-mono text-on-surface-variant transition-colors">
              YTD
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* KPI Cards Row */}
          <div className="md:col-span-4 bg-surface-container-lowest rounded-xl shadow-sm p-6 border border-surface-variant hover:border-outline transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary-container/20 rounded-lg text-primary">
                <i className="fa-solid fa-wallet"></i>
              </div>
              <span className="flex items-center text-primary font-label-mono text-label-mono bg-primary-container/20 px-2 py-1 rounded-full">
                <i className="fa-solid fa-arrow-trend-up text-sm mr-1"></i> +12.5%
              </span>
            </div>
            <h3 className="font-button-text text-button-text text-on-surface-variant uppercase tracking-wider mb-1">INGRESOS TOTALES</h3>
            <p className="font-display-lg text-display-lg text-on-surface">$124.5k</p>
          </div>

          <div className="md:col-span-4 bg-surface-container-lowest rounded-xl shadow-sm p-6 border border-surface-variant hover:border-outline transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-secondary-container/30 rounded-lg text-secondary">
                <i className="fa-solid fa-users"></i>
              </div>
              <span className="flex items-center text-secondary font-label-mono text-label-mono bg-secondary-container/30 px-2 py-1 rounded-full">
                <i className="fa-solid fa-arrow-trend-up text-sm mr-1"></i> +5.2%
              </span>
            </div>
            <h3 className="font-button-text text-button-text text-on-surface-variant uppercase tracking-wider mb-1">USUARIOS ACTIVOS</h3>
            <p className="font-display-lg text-display-lg text-on-surface">8,249</p>
          </div>

          <div className="md:col-span-4 bg-surface-container-lowest rounded-xl shadow-sm p-6 border border-surface-variant hover:border-outline transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-tertiary-container/30 rounded-lg text-tertiary">
                <i className="fa-solid fa-chart-line"></i>
              </div>
              <span className="flex items-center text-error font-label-mono text-label-mono bg-error-container/20 px-2 py-1 rounded-full">
                <i className="fa-solid fa-arrow-trend-down text-sm mr-1"></i> -1.1%
              </span>
            </div>
            <h3 className="font-button-text text-button-text text-on-surface-variant uppercase tracking-wider mb-1">SESIÓN PROMEDIO</h3>
            <p className="font-display-lg text-display-lg text-on-surface">4m 12s</p>
          </div>

          {/* Main Chart Area */}
          <div className="md:col-span-12 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-variant p-6 min-h-96 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface">Tendencias de Ingresos</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">Ingresos recurrentes mensuales del último año</p>
              </div>
              <button className="flex items-center gap-2 font-label-mono text-label-mono text-primary hover:bg-primary-container/20 px-3 py-1.5 rounded-md transition-colors border border-primary/30">
                <i className="fa-solid fa-download"></i> Exportar
              </button>
            </div>

            {/* Chart Visualization */}
            <div className="flex-1 relative w-full h-full flex items-end pt-10">
              <div className="absolute left-0 top-10 bottom-8 flex flex-col justify-between font-label-mono text-label-mono text-on-surface-variant pr-4 border-r border-surface-variant w-12 text-right">
                <span>$150k</span>
                <span>$100k</span>
                <span>$50k</span>
                <span>0</span>
              </div>

              <div className="absolute left-12 right-0 top-10 bottom-8 flex flex-col justify-between z-0">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-full border-t border-surface-variant h-0"></div>
                ))}
              </div>

              <div className="relative w-full h-full ml-12 z-10 flex items-end overflow-hidden group">
                <svg className="w-full h-full drop-shadow-lg" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#a078ff" stopOpacity="0.3"></stop>
                      <stop offset="100%" stopColor="#a078ff" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path className="transition-all duration-1000 ease-in-out group-hover:opacity-80" d="M0,80 C10,75 20,90 30,60 C40,30 50,70 60,40 C70,10 80,50 90,20 L100,30 L100,100 L0,100 Z" fill="url(#chartGradient)"></path>
                  <path className="transition-all duration-1000 ease-in-out drop-shadow-[0_4px_8px_rgba(160,120,255,0.4)]" d="M0,80 C10,75 20,90 30,60 C40,30 50,70 60,40 C70,10 80,50 90,20 L100,30" fill="none" stroke="#a078ff" strokeWidth="2"></path>
                  <circle className="opacity-0 group-hover:opacity-100 transition-opacity" cx="30" cy="60" fill="#121414" r="2" stroke="#a078ff" strokeWidth="1.5"></circle>
                  <circle className="opacity-0 group-hover:opacity-100 transition-opacity" cx="60" cy="40" fill="#121414" r="2" stroke="#a078ff" strokeWidth="1.5"></circle>
                  <circle className="opacity-0 group-hover:opacity-100 transition-opacity" cx="90" cy="20" fill="#121414" r="2" stroke="#a078ff" strokeWidth="1.5"></circle>
                </svg>
              </div>

              <div className="absolute left-12 right-0 bottom-0 h-8 flex justify-between items-end font-label-mono text-label-mono text-on-surface-variant px-2">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Nov</span>
              </div>
            </div>
          </div>

          {/* User Engagement Metrics */}
          <div className="md:col-span-6 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-variant p-6">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Compromiso del Usuario</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Usuarios activos diarios frente a la duración de la sesión</p>
            <div className="space-y-5">
              {[
                { label: 'Usuarios Expertos (>2hrs)', percentage: 24 },
                { label: 'Usuarios Regulares (30m - 2hrs)', percentage: 58 },
                { label: 'Usuarios Casuales (<30m)', percentage: 18 }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-label-mono text-label-mono mb-1">
                    <span className="text-on-surface">{item.label}</span>
                    <span className="text-on-surface-variant">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: `${item.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Milestones */}
          <div className="md:col-span-6 bg-surface-container-lowest rounded-xl shadow-sm border border-surface-variant p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline-md text-headline-md text-on-surface">Hitos Recientes</h2>
              <i className="fa-solid fa-ellipsis-h text-outline"></i>
            </div>
            <div className="relative pl-4 border-l-2 border-surface-variant space-y-6">
              {[
                { title: 'Superamos los 10k Usuarios Activos', desc: 'Alcanzamos nuestro objetivo del Q3 2 semanas antes.', time: 'HOY, 10:45 AM', color: 'bg-primary' },
                { title: 'Pico de Adopción de Nueva Función', desc: 'El uso de \'Auto-reportes\' aumentó un 45%.', time: 'AYER', color: 'bg-secondary' }
              ].map((milestone, idx) => (
                <div key={idx} className="relative">
                  <div className={`absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full ${milestone.color} ring-4 ring-surface-container-lowest`}></div>
                  <h4 className="font-body-lg text-body-lg text-on-surface">{milestone.title}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">{milestone.desc}</p>
                  <span className="font-label-mono text-[10px] uppercase tracking-wider text-outline mt-2 block font-semibold">{milestone.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </AppShell>
  );
}
