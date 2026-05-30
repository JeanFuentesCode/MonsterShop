import { logoSrc, navItems } from "../data/dashboardData.js";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#121414] border-r border-gray-800 flex flex-col h-full hidden md:flex" data-purpose="main-navigation">
      <div className="h-20 flex items-center px-6 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <img alt="MonsterShop Logo" className="h-8 object-contain" src={logoSrc} />
        </div>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <a
            key={item.label}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
              item.active
                ? "bg-purple-600 text-white"
                : "text-gray-400 hover:bg-purple-900/30 hover:text-purple-400"
            }`}
            href={item.href}
          >
            <i className={`${item.icon} w-5`}></i>
            <span className="font-medium">{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-800 lg:hidden">
        <div className="flex items-center gap-3">
          <img
            alt="Alayna Hossain"
            className="w-10 h-10 rounded-full border-2 border-gray-800 shadow-sm"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsyW1_f5POPLFmDy5daPz3nMXlY1HeN1AqKnvfXnOb5J76w32XM10Ax9AXcUAlLSczWwD7yv5-d-A4_caBTsJv2zrifJccXlkX5VyiFaUutsJgr5TuG3arLhtLF8B8nggVrIj1kqlzWvlm8JIV0f7x__hSfQ3vghCf3yb0lbIz5c-AqIXyW78Nosx4pJlnJlx3ht-gHLlD4FWOvJtvnBZS5nP8O94MhAEnox-qpfGzpVt39ajIvRejrTn2PVihx3PSnM-NuE9Np_Q"
          />
          <div>
            <p className="text-sm font-semibold text-white">Alayna Hossain</p>
            <p className="text-xs text-gray-400">Sales Manager</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
