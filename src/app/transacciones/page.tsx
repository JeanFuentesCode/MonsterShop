'use client';

import AppShell from '@/components/app-shell';

export default function TransaccionesPage() {
  const transactions = [
    { id: '#TRX-9024', customer: { initials: 'ES', name: 'Emma Stone', email: 'emma.s@example.com' }, date: 'Oct 24, 2023', time: '14:32 PM', amount: '$1,250.00', status: 'Completado', statusColor: 'bg-secondary-container/50 text-secondary border border-secondary-container' },
    { id: '#TRX-9023', customer: { initials: 'MJ', name: 'Michael Johnson', email: 'm.johnson@corp.com' }, date: 'Oct 24, 2023', time: '11:15 AM', amount: '$450.50', status: 'Pendiente', statusColor: 'bg-tertiary-fixed-dim/30 text-tertiary border border-tertiary-fixed-dim' },
    { id: '#TRX-9022', customer: { initials: 'DC', name: 'David Chen', email: 'david.c@startup.io', avatar: true }, date: 'Oct 23, 2023', time: '09:45 AM', amount: '$8,900.00', status: 'Completado', statusColor: 'bg-secondary-container/50 text-secondary border border-secondary-container' },
    { id: '#TRX-9021', customer: { initials: 'SW', name: 'Sarah Williams', email: 'sarah.w@retail.net' }, date: 'Oct 22, 2023', time: '16:20 PM', amount: '$120.00', status: 'Fallido', statusColor: 'bg-error-container text-on-error-container border border-error/20' },
    { id: '#TRX-9020', customer: { initials: 'JT', name: 'Jessica Taylor', email: 'j.taylor@design.co', avatar: true }, date: 'Oct 21, 2023', time: '08:30 AM', amount: '$3,450.00', status: 'Completado', statusColor: 'bg-secondary-container/50 text-secondary border border-secondary-container' }
  ];

  return (
    <AppShell>
      <div className="ml-0 flex-1 flex flex-col min-h-screen">
        {/* TopAppBar */}
        <header className="docked full-width top-0 sticky z-40 bg-surface flex justify-between items-center h-16 px-12 border-b border-surface-container-highest">
          <div className="flex-1"></div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant transition-colors active:scale-95">
              <i className="fa-solid fa-bell"></i>
            </button>
            <button className="w-10 h-10 rounded-full hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant transition-colors active:scale-95">
              <i className="fa-solid fa-comment"></i>
            </button>
            <div className="h-8 w-px bg-surface-container-highest mx-2"></div>
            <button className="w-10 h-10 rounded-full overflow-hidden border border-surface-container-high active:scale-95 transition-transform">
              <img alt="Alayna Hossain" className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-oXsl1r4KiZAPpeM64SAkHjTVgYs0RjTD3UYkFmXYicrvwESH4LQn0cO8F87xXWsqeSXNBIGXaU5FYe7fP7u4U8rc0lGjugFTFSyA7b_tanSJBaysy0uYbTwZre9nlgdskJDP7g0D0IOq2aWqks40EX2x3hB26GQjLTMAaFm7ZlIyVpmjO0-xS2zwRncYg60ZN1pQwfrzZG2dkHZDwpO5TanYKa27MbW1fnc-LdVJ-tt3D3rSq3MyweFL9UUAdnJMWzcwoKWZCoE" />
            </button>
          </div>
        </header>

        {/* Canvas (Page Content) */}
        <main className="p-12 flex-1 flex flex-col gap-8 max-w-[1600px] mx-auto w-full">
          {/* Page Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-display-lg text-display-lg text-on-surface">Transacciones</h1>
              <p className="font-body-md text-body-md text-outline mt-1">Revisa y gestiona tu actividad de pagos reciente.</p>
            </div>

            {/* Action Bar */}
            <div className="flex items-center gap-3">
              {/* Search Bar */}
              <div className="relative group">
                <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors"></i>
                <input 
                  className="pl-10 pr-4 py-2 bg-surface-container border border-surface-container-highest rounded-lg text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all w-64 shadow-sm" 
                  placeholder="Buscar transacciones..." 
                  type="text"
                />
              </div>

              {/* Filter Button */}
              <button className="flex items-center gap-2 px-4 py-2 bg-surface-container border border-surface-container-highest rounded-lg text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm">
                <i className="fa-solid fa-filter"></i>
                Filtrar
              </button>

              {/* Export Button */}
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm">
                <i className="fa-solid fa-download"></i>
                Exportar
              </button>
            </div>
          </div>

          {/* Data Table Card */}
          <div className="bg-surface rounded-xl shadow-lg border border-surface-container-lowest overflow-hidden flex-1">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-surface-container-highest bg-surface-container-low">
                    <th className="py-4 px-6 font-label-sm text-label-sm text-outline uppercase tracking-wider">ID DE TRANSACCIÓN</th>
                    <th className="py-4 px-6 font-label-sm text-label-sm text-outline uppercase tracking-wider">NOMBRE DEL CLIENTE</th>
                    <th className="py-4 px-6 font-label-sm text-label-sm text-outline uppercase tracking-wider">FECHA Y HORA</th>
                    <th className="py-4 px-6 font-label-sm text-label-sm text-outline uppercase tracking-wider text-right">MONTO</th>
                    <th className="py-4 px-6 font-label-sm text-label-sm text-outline uppercase tracking-wider text-center">ESTADO</th>
                    <th className="py-4 px-6 font-label-sm text-label-sm text-outline uppercase tracking-wider text-right">ACCIONES</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-low">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-surface-container-low transition-colors group cursor-pointer">
                      <td className="py-4 px-6 font-body-sm text-body-sm text-on-surface-variant">
                        <span className="font-medium text-on-surface">{tx.id}</span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          {tx.customer.avatar ? (
                            <img alt="Avatar" className="w-8 h-8 rounded-full object-cover" 
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAESHg3-suPGWnHKH_7HHH6iyO2iASjtoM4yzEv_4TL5RtKSxLBJ5fnkj6zLFhQwnbsQOlAvj7qveMRNf7CHmJueUXDnjmqCV4xC_PwGMqesMqq_vJK4bhqnTPZC0ZXmsfeyXYkm7DrGgGR8tzLeh2uPruckjllImZCwqfp-NyZP2pjRkQwByoN97RX7PFTs1cnWRYhKeOr5V97_Kej26olth5g7AV70Tr6ota_mFheiicOB9JXly3PDnaKgOy99ZMpxFTXsMH7FDA" />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-label-sm text-label-sm">
                              {tx.customer.initials}
                            </div>
                          )}
                          <div>
                            <p className="font-label-md text-label-md text-on-surface">{tx.customer.name}</p>
                            <p className="font-label-sm text-label-sm text-outline">{tx.customer.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-body-sm text-body-sm text-on-surface-variant">
                        {tx.date} <span className="text-outline-variant mx-1">•</span> {tx.time}
                      </td>
                      <td className="py-4 px-6 font-label-md text-label-md text-on-surface text-right">
                        {tx.amount}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-label-sm text-label-sm ${tx.statusColor}`}>
                          {tx.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                          <i className="fa-solid fa-ellipsis-h text-lg"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="px-6 py-4 border-t border-surface-container-highest flex items-center justify-between bg-surface-container-low">
              <p className="font-body-sm text-body-sm text-outline">
                Mostrando <span className="font-medium text-on-surface">1</span> a <span className="font-medium text-on-surface">5</span> de <span className="font-medium text-on-surface">124</span> resultados
              </p>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded border border-surface-container-high flex items-center justify-center text-outline hover:text-primary hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  <i className="fa-solid fa-chevron-left text-sm"></i>
                </button>
                <button className="w-8 h-8 rounded border border-primary bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm transition-colors">
                  1
                </button>
                <button className="w-8 h-8 rounded border border-surface-container-high bg-surface flex items-center justify-center font-label-sm text-label-sm text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
                  2
                </button>
                <button className="w-8 h-8 rounded border border-surface-container-high bg-surface flex items-center justify-center font-label-sm text-label-sm text-on-surface-variant hover:border-primary hover:text-primary transition-colors">
                  3
                </button>
                <span className="text-outline mx-1">...</span>
                <button className="w-8 h-8 rounded border border-surface-container-high flex items-center justify-center text-outline hover:text-primary hover:border-primary transition-colors">
                  <i className="fa-solid fa-chevron-right text-sm"></i>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AppShell>
  );
}
