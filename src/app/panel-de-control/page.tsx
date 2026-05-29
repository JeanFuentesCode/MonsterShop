'use client';

import AppShell from '@/components/app-shell';

export default function PanelDeControlPage() {
  return (
    <AppShell>
      <div className="flex h-screen overflow-hidden antialiased font-sans bg-black text-gray-200">
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-black">
          <header className="h-20 bg-black/80 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-6 lg:px-10 z-10 sticky top-0">
            <div>
              <h1 className="text-2xl font-bold text-white">Panel de Control</h1>
              <p className="text-sm text-gray-400 mt-1">14th Apr 2025</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 flex items-center justify-center hover:bg-gray-700 transition">
                  <i className="fa-regular fa-message"></i>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-800 text-gray-300 flex items-center justify-center hover:bg-gray-700 transition relative">
                  <i className="fa-regular fa-bell"></i>
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
              <div className="hidden md:flex items-center gap-3 pl-6 border-l border-gray-800">
                <img alt="Alayna Hossain" className="w-10 h-10 rounded-full border border-gray-800" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfi1K6tVmM9BXV7yvhp37Z07lw-25A6HtZsW__7XbAmQqFhBl0LKI6L74ubG_ZlmaB20cLEyxXrihXFFgQcBCOUhPuBt83wTKOAt63wafqWLBDR7_DCbAe7TvST0xPFuKsVKUoa9JouTt3pntAsAJyjcEXFYXcDfiaWRNsYVIo4E6jSNl-9jf3NqRFgYi2LnuB_zbiHshBAiIPrF6nZ3y5ckmSfJ3q5Im-IwjzMO8iSGkJAw3RGE6jF4sXAU2SYeyeVa8Zjr9Bw6E" />
                <div className="text-right">
                  <p className="text-sm font-semibold text-white leading-tight">Alayna Hossain</p>
                  <p className="text-xs text-gray-400">Sales Manager</p>
                </div>
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-6 lg:p-10">
            {/* Top Row: Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full">
              {/* Ganancias Totales */}
              <div className="bg-purple-900/30 border border-purple-800/50 rounded-2xl p-6 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-purple-300 mb-2">
                  <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
                    <i className="fa-solid fa-wallet text-sm"></i>
                  </div>
                  <span className="font-medium text-sm">Ganancias Totales</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">142.99K</h2>
                  <p className="text-xs text-purple-400 mt-1">Del mes en curso</p>
                </div>
              </div>

              {/* Ganancia Promedio */}
              <div className="bg-purple-900/10 border border-purple-800/30 rounded-2xl p-6 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-purple-300 mb-2">
                  <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
                    <i className="fa-solid fa-chart-line text-sm"></i>
                  </div>
                  <span className="font-medium text-sm">Ganancia Promedio</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">20.284K</h2>
                  <p className="text-xs text-purple-400 mt-1">Ganancia diaria de este mes</p>
                </div>
              </div>

              {/* Tasa de Conversión */}
              <div className="bg-emerald-900/30 border border-emerald-800/50 rounded-2xl p-6 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-emerald-300 mb-2">
                  <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
                    <i className="fa-solid fa-chart-pie text-sm"></i>
                  </div>
                  <span className="font-medium text-sm">Tasa de Conversión</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">74.86%</h2>
                  <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                    <i className="fa-solid fa-arrow-trend-up"></i>
                    +6.04% mayor que el mes pasado
                  </p>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="mb-8">
              <div className="bg-[#121414] rounded-2xl p-6 border border-gray-800 w-full">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-white">Venta Regular</h3>
                  <button className="bg-green-900/50 text-green-400 border border-green-800/50 text-xs font-semibold px-3 py-1 rounded-md hover:bg-green-800/50 transition">
                    Exportar
                  </button>
                </div>

                {/* Mockup Bar Chart */}
                <div className="h-48 flex items-end justify-between relative px-2">
                  <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pb-6">
                    <span>50k</span>
                    <span>40k</span>
                    <span>30k</span>
                    <span>20k</span>
                  </div>
                  <div className="absolute left-8 right-0 top-0 h-full flex flex-col justify-between pb-6 z-0">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-full border-b border-dashed border-gray-800"></div>
                    ))}
                  </div>
                  <div className="w-full pl-10 flex justify-around items-end h-[calc(100%-1.5rem)] z-10 gap-2">
                    {[
                      { p1: '[30%]', p2: '[45%]' },
                      { p1: '[50%]', p2: '[80%]' },
                      { p1: '[90%]', p2: '[60%]' },
                      { p1: '[40%]', p2: '[55%]' },
                      { p1: '[60%]', p2: '[30%]' },
                      { p1: '[20%]', p2: '[40%]' },
                      { p1: '[85%]', p2: '[70%]' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-end gap-1 w-full max-w-[30px] justify-center group">
                        <div className="w-2 md:w-3 bg-purple-900/50 rounded-t-sm h-{item.p1} group-hover:bg-purple-800 transition-colors"></div>
                        <div className="w-2 md:w-3 bg-teal-900/50 rounded-t-sm h-{item.p2} group-hover:bg-teal-800 transition-colors"></div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-10 w-[calc(100%-2.5rem)] flex justify-around text-xs text-gray-500">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
                      <span key={idx} className={`w-full text-center ${idx === 1 ? 'text-purple-400 font-semibold' : ''}`}>
                        {day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="pb-6">
              <div className="bg-[#121414] rounded-2xl p-6 border border-gray-800 overflow-x-auto w-full">
                <div className="flex justify-between items-center mb-6 min-w-[500px]">
                  <h3 className="text-lg font-bold text-white">Tienda Principal</h3>
                  <button className="bg-green-900/50 text-green-400 border border-green-800/50 text-xs font-semibold px-3 py-1 rounded-md hover:bg-green-800/50 transition">
                    Compartir
                  </button>
                </div>
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="text-xs text-gray-500 border-b border-gray-800">
                      <th className="pb-3 font-medium w-1/4">Nombre de la Tienda</th>
                      <th className="pb-3 font-medium w-1/4">Ubicación</th>
                      <th className="pb-3 font-medium w-1/4">Venta</th>
                      <th className="pb-3 font-medium w-1/4 text-right">Monto</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[1, 2, 3, 4].map(i => (
                      <tr key={i} className="border-b border-gray-800/50 last:border-0 hover:bg-gray-800/30 transition-colors">
                        <td className="py-4 font-medium text-gray-200">Solaris Sparkle</td>
                        <td className="py-4 text-gray-500">Miami, Florida</td>
                        <td className="py-4 text-gray-500">102 Cantidad</td>
                        <td className="py-4 font-medium text-gray-200 text-right">10.80K</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AppShell>
  );
}
