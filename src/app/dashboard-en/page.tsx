'use client';

import AppShell from '@/components/app-shell';

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="flex h-screen overflow-hidden antialiased font-sans bg-black text-gray-200">
        <main className="flex-1 flex flex-col h-full overflow-hidden bg-black">
          <div className="flex-1 overflow-y-auto p-6 lg:p-10">
            {/* Top Row: Metrics & Upgrade Card */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
              {/* Metrics Column (Takes up 3/4) */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Earning */}
                <div className="bg-purple-900/30 border border-purple-800/50 rounded-2xl p-6 flex flex-col justify-between card-shadow">
                  <div className="flex items-center gap-2 text-purple-300 mb-2">
                    <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
                      <i className="fa-solid fa-wallet text-sm"></i>
                    </div>
                    <span className="font-medium text-sm">Total Earning</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">142.99K</h2>
                    <p className="text-xs text-purple-400 mt-1">From the running month</p>
                  </div>
                </div>

                {/* Average Earning */}
                <div className="bg-purple-900/10 border border-purple-800/30 rounded-2xl p-6 flex flex-col justify-between card-shadow">
                  <div className="flex items-center gap-2 text-purple-300 mb-2">
                    <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
                      <i className="fa-solid fa-chart-line text-sm"></i>
                    </div>
                    <span className="font-medium text-sm">Average Earning</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">20.284K</h2>
                    <p className="text-xs text-purple-400 mt-1">Daily Earning of this month</p>
                  </div>
                </div>

                {/* Conversation Rate */}
                <div className="bg-emerald-900/30 border border-emerald-800/50 rounded-2xl p-6 flex flex-col justify-between card-shadow">
                  <div className="flex items-center gap-2 text-emerald-300 mb-2">
                    <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
                      <i className="fa-solid fa-chart-pie text-sm"></i>
                    </div>
                    <span className="font-medium text-sm">Conversation Rate</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">74.86%</h2>
                    <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                      <i className="fa-solid fa-arrow-trend-up"></i>
                      +6.04% greater than last month
                    </p>
                  </div>
                </div>
              </div>

              {/* Upgrade Card Column (Takes up 1/4) */}
              <div className="lg:col-span-1">
                <div className="bg-teal-800 rounded-2xl p-6 text-white h-full relative overflow-hidden card-shadow flex flex-col justify-between border border-teal-700/50">
                  <div className="z-10 relative">
                    <h3 className="text-lg font-semibold mb-2">Upgrade to Pro</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold">$4.20</span>
                      <span className="text-sm text-teal-200">/ Month</span>
                    </div>
                    <p className="text-xs text-teal-300 mt-1 mb-6">$50 Billed Annually</p>
                    <button className="bg-green-500 text-teal-950 text-xs font-bold py-2 px-4 rounded-lg shadow-sm hover:bg-green-400 transition">
                      Upgrade Now
                    </button>
                  </div>
                  <i className="fa-solid fa-laptop-code absolute bottom-[-10px] right-[-10px] text-7xl text-teal-600 opacity-50 z-0 transform rotate-[-15deg]"></i>
                </div>
              </div>
            </div>

            {/* Middle Row: Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Regular Sell Chart */}
              <div className="lg:col-span-2 bg-[#121414] rounded-2xl p-6 card-shadow border border-gray-800">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-white">Regular Sell</h3>
                  <button className="bg-green-900/50 text-green-400 border border-green-800/50 text-xs font-semibold px-3 py-1 rounded-md hover:bg-green-800/50 transition">
                    Export
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

              {/* Right Side Cards */}
              <div className="grid grid-cols-1 gap-6">
                {/* More Analysis */}
                <div className="bg-[#121414] rounded-2xl p-6 card-shadow border border-gray-800 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">More Analysis</h3>
                    <p className="text-xs text-gray-500 mb-4">There are more to view</p>
                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-between p-3 rounded-xl border border-gray-800 hover:bg-gray-800/50 transition group">
                        <div className="flex items-center gap-3 text-sm font-medium text-gray-300">
                          <i className="fa-solid fa-chart-bar text-gray-500 group-hover:text-purple-400"></i>
                          Store Sell Ration
                        </div>
                        <i className="fa-solid fa-chevron-right text-xs text-gray-600"></i>
                      </button>
                      <button className="w-full flex items-center justify-between p-3 rounded-xl border border-gray-800 hover:bg-gray-800/50 transition group">
                        <div className="flex items-center gap-3 text-sm font-medium text-gray-300">
                          <i className="fa-solid fa-trophy text-gray-500 group-hover:text-purple-400"></i>
                          Top Item sold
                        </div>
                        <i className="fa-solid fa-chevron-right text-xs text-gray-600"></i>
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-4 text-center">
                    Analysis created by <span className="font-bold text-purple-400">MonsterShop</span>
                  </p>
                </div>

                {/* Daily Meeting */}
                <div className="bg-[#121414] rounded-2xl p-6 card-shadow border border-gray-800">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-purple-900/50 text-purple-400 flex items-center justify-center text-xs">
                      <i className="fa-regular fa-calendar"></i>
                    </div>
                    <h3 className="text-md font-bold text-white">Daily Meeting</h3>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">12+ Person | 8:30 am</p>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <img key={i} alt="Avatar" className="w-8 h-8 rounded-full border-2 border-[#121414]" 
                          src={`https://lh3.googleusercontent.com/aida-public/AB6AXuA5yNGAwadLdsquWISL84SvkJp73HWwA6hsF8h8qzphd6acf-RdGc8UyeKlrWySBwK4vu8Xap9f6MNVV3dhO4ybOQGPVZHNbBl-FXlNxhzS9mVEZvXpP9LQniYgIEBi9yyrBBAUNDgdzD18ZBKWF24s5uQpSD6nNSvyM0Z5rHc5htXgmGExJ_yj3YykYVVqfUNTJgEsVrahyNuy-3efFJleL0MZaVeJQR_fmzwn6sfSCG65i8zCc0AqOSEQ8xcrnpMG2wPNijgX5dA`} />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 leading-tight">They will conduct<br/>the meeting</p>
                  </div>
                  <button className="w-full bg-gray-800 text-white text-xs font-semibold py-2 rounded-lg hover:bg-gray-700 transition border border-gray-700">
                    Click for meeting link
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Row: Table */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 pb-6">
              <div className="xl:col-span-2 bg-[#121414] rounded-2xl p-6 card-shadow border border-gray-800 overflow-x-auto">
                <div className="flex justify-between items-center mb-6 min-w-[500px]">
                  <h3 className="text-lg font-bold text-white">Top Store</h3>
                  <button className="bg-green-900/50 text-green-400 border border-green-800/50 text-xs font-semibold px-3 py-1 rounded-md hover:bg-green-800/50 transition">
                    Share
                  </button>
                </div>
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="text-xs text-gray-500 border-b border-gray-800">
                      <th className="pb-3 font-medium w-1/4">Store Name</th>
                      <th className="pb-3 font-medium w-1/4">Location</th>
                      <th className="pb-3 font-medium w-1/4">Sell</th>
                      <th className="pb-3 font-medium w-1/4 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[1, 2, 3, 4].map(i => (
                      <tr key={i} className="border-b border-gray-800/50 last:border-0 hover:bg-gray-800/30 transition-colors">
                        <td className="py-4 font-medium text-gray-200">Solaris Sparkle</td>
                        <td className="py-4 text-gray-500">Miami, Florida</td>
                        <td className="py-4 text-gray-500">102 Quantity</td>
                        <td className="py-4 font-medium text-gray-200 text-right">10.80K</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Team Member List */}
              <div className="xl:col-span-1 bg-[#121414] rounded-2xl p-6 card-shadow border border-gray-800 flex flex-col h-full">
                <h3 className="text-lg font-bold text-white mb-4">Team Member</h3>
                <div className="flex-1 space-y-4 mb-4 overflow-y-auto pr-2">
                  {[
                    { name: 'Al-Amin Hossain', role: 'Project Manager' },
                    { name: 'Alayna Hossain', role: 'Sales Manager' },
                    { name: 'Suraiya Sultana', role: 'UI/UX Designer' },
                    { name: 'Lamiya Akter', role: 'Web Developer' }
                  ].map((member, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <img alt="Member" className="w-10 h-10 rounded-full border border-gray-800" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC58pbtRhSjzlAgDD_HqHPvVCF6_RmnkqHYj1y0D3-3OqmIMSS_vibR7K8d4zhkQ30cb6Etlzd3CUdPqTonqwfrq_jcN2XVrg0RorUPSFKzBVLXhJu8D0z7xx_ODKjI7YSPA-Jn9M4qdC6k1AXXjjZH6ifII0hGFbWiVd5vbXUUVYS4pO_MEIw1DW7tycFyHD_MYz4tc-Qwm9Wc3HyPxZ8GqomXtrTNJjflasevLsECdvc-GZF_pmWNrDx-cwehyZ6ZB7VNrqwBwbs" />
                      <div>
                        <p className="text-sm font-semibold text-gray-200">{member.name}</p>
                        <p className="text-xs text-gray-500">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-purple-900/20 text-purple-400 rounded-xl font-medium text-sm hover:bg-purple-900/40 transition mt-auto border border-purple-900/50">
                  <i className="fa-solid fa-plus text-xs"></i> Add more member
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AppShell>
  );
}
