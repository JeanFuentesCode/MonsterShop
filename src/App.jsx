import React from "react";

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden antialiased font-sans bg-black text-gray-200">
      <aside className="w-64 bg-[#121414] border-r border-gray-800 flex flex-col h-full hidden md:flex" data-purpose="main-navigation">
        <div className="h-20 flex items-center px-6 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <img alt="MonsterShop Logo" className="h-8 object-contain" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAB4CAYAAADc36SXAAAQAElEQVR4AexdCfwkRXXu+e8C7i5CIpggGtBIwBNBNqAERQWCyiJEuVwOw6kgRBF2OeRYQHBZICQRuRGBZUFBDjkEUeRUEQERL4xECYIG0IBxwewu237fzNTQ01PVXd3T18z/m1+9qeqqV1Wvvu6uV3dPBPoJASEgBISAEMiBgBRIDtAURQgIASEgBIJACkRPgRCoCwHlKwRGHAEpkBG/gRJfCAgBIVAXAlIgdSGvfIWAEBACI47ACCuQEUde4gsBISAERhwBKZARv4ESXwgIASFQFwJSIHUhr3yFwAgjINGFABGQAiEKIiEgBISAEMiMgBRIZsgUQQgIASEgBIiAFAhRqJqUnxAQAkJgDBCQAhmDm6giCAEhIATqQEAKpA7UlacQEAJ1IaB8C0RACqRAMJWUEBACQmAyISAFMpnutsoqBISAECgQgUYrkAW7LXnrvG3D6QWWt9Ckmi5foYXtJiZLCAgBIWAQaKQCOWX2c7ucsuviZ1vBsvtmrPr84gW7Lr7g1A+Hqxuh67abLl/d+Ch/ISAEJgcCjVMg83d/bq1wIjg3aLVWMbeg1WrttXzi+QcX7BiuYfzqspsuX124KF8hIATKRqB56TdOgUwJgzNaQfDSOFStVrBmsNLzZ8X9q75uunxV46H8hIAQmLwINEqBLJi9ZAPcim1BVgPFsn2Xxxpetmc378bKV3b5lb4QEAJCIIpAoxRIa2LpZ6LCWd2tpSdY/SvwbLp8FUAwyllIdiEgBApGoDEK5OTdF88MgtY2Qcqv1WrN4uqnFLbCg5suX+EFVoJCQAgIgRQEGqNAJsJgXuD7C5ce58taFF/T5SuqnEpHCAgBIeCLgLcC8U0wD19nbiG992HSbvdCOvMlxqtUu+nylVp4JS4EhIAQcCDQCAXiNbcQL0CFcyFNly8Oja6FgBAQAlUgULsCydq6N6BU1QtpunwGD9njjIDKJgSaiUDtCiRX695gWUEvpOnyGShkCwEhIASqRqBWBZK3dW9AKrsX0nT5DA6yhYAQEAJ1IFCrAhmqdd9Fq9ValrZ6q8uZ3Wq6fNlLpBhCQAgIgeIQqE2BnLbLkg2D9H0f1wVBeEOQ9GsF23V6CklM2cOaLl/2EimGEBACQqBYBGpTIMunpu8oD5dPPSZcvsJRqUUuYS6k6fKlYiIGIdAEBCTDWCNQiwLp9BiS932EYXj93EUr/oCU1gspei6k6fKN9ROpwgkBITAyCNSiQLzmFsIVjjYoVt0Labp8BhfZQkAICIE6EahcgWRp3RtgquyFNEs+g4BsISAEhEDzEKhcgWRt3RvIquqFNF0+g4dsISAEhEDdCFSqQPK07g1AVfRCmi6fwUK2EBAC5SOgHNIRqFSB5G3dm2KU3QtpunwGB9lCQAgIgSYgUJkCGaZ1b4AqsxfSdPkMBrKFgBAQAk1BoDIFMmzr3gBWVi+k6fKZ8o+MLUGFgBAYewQqUSBFtO7NnSijF9J0+UzZZQsBISAEmoRAJQqkqNa9Aa7oXkjT5TPlli0EhIAQ8ECgMpbSFUiRrXuDSpG9kKbLZ8osWwgIASHQNARKVyBFt+4NgEX1QpounymvbCEgBIRA0xAoVYGU0bo3ABbRC2m6fKassqtFQLkJASHgh0CpCqSs1r0p2rC9kKbLZ8opWwgIASHQRARKUyBltu4NkMP0QpounyljkXYYhhuBtvegLbLmizS3AvmkvVHWtMUvBIpCAM/oWqBDQN8E/RT0BGgxiOZJ/P0MdCvoDNDeoDXz5I14W4Js78O78qTX1DjFK5BuSctu3XezCfL2QpounylfwfankN7VHnQjHv6XgM/LgHdlMH4N5JM2ZQCrTJ0I4J69HrR/nTJUmTfKOhN0O/J8FH"
            />
          </div>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <a
            className="flex items-center gap-3 px-4 py-3 bg-purple-600 text-white rounded-xl transition-colors"
            href="#"
          >
            <i className="fa-solid fa-border-all w-5"></i>
            <span className="font-medium">Panel de Control</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-purple-900/30 hover:text-purple-400 rounded-xl transition-colors"
            href="#"
          >
            <i className="fa-solid fa-file-invoice w-5"></i>
            <span className="font-medium">Reportes de Ventas</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-purple-900/30 hover:text-purple-400 rounded-xl transition-colors"
            href="#"
          >
            <i className="fa-solid fa-gear w-5"></i>
            <span className="font-medium">Ajustes</span>
          </a>
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
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-black">
        <header
          className="h-20 bg-black/80 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-6 lg:px-10 z-10 sticky top-0"
          data-purpose="top-header"
        >
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
              <img
                alt="Alayna Hossain"
                className="w-10 h-10 rounded-full border border-gray-800"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfi1K6tVmM9BXV7yvhp37Z07lw-25A6HtZsW__7XbAmQqFhBl0LKI6L74ubG_ZlmaB20cLEyxXrihXFFgQcBCOUhPuBt83wTKOAt63wafqWLBDR7_DCbAe7TvST0xPFuKsVKUoa9JouTt3pntAsAJyjcEXFYXcDfiaWRNsYVIo4E6jSNl-9jf3NqRFgYi2LnuB_zbiHshBAiIPrF6nZ3y5ckmSfJ3q5Im-IwjzMO8iSGkJAw3RGE6jF4sXAU2SYeyeVa8Zjr9Bw6E"
              />
              <div className="text-right">
                <p className="text-sm font-semibold text-white leading-tight">Alayna Hossain</p>
                <p className="text-xs text-gray-400">Sales Manager</p>
              </div>
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full">
            <div className="bg-purple-900/30 border border-purple-800/50 rounded-2xl p-6 flex flex-col justify-between card-shadow">
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
            <div className="bg-purple-900/10 border border-purple-800/30 rounded-2xl p-6 flex flex-col justify-between card-shadow">
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
            <div className="bg-emerald-900/30 border border-emerald-800/50 rounded-2xl p-6 flex flex-col justify-between card-shadow">
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
          <div className="mb-8">
            <div className="bg-[#121414] rounded-2xl p-6 card-shadow border border-gray-800 w-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">Venta Regular</h3>
                <button className="bg-green-900/50 text-green-400 border border-green-800/50 text-xs font-semibold px-3 py-1 rounded-md hover:bg-green-800/50 transition">
                  Exportar
                </button>
              </div>
              <div className="h-48 flex items-end justify-between relative px-2">
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pb-6">
                  <span>50k</span>
                  <span>40k</span>
                  <span>30k</span>
                  <span>20k</span>
                </div>
                <div className="absolute left-8 right-0 top-0 h-full flex flex-col justify-between pb-6 z-0">
                  <div className="w-full border-b border-dashed border-gray-800"></div>
                  <div className="w-full border-b border-dashed border-gray-800"></div>
                  <div className="w-full border-b border-dashed border-gray-800"></div>
                  <div className="w-full border-b border-dashed border-gray-800"></div>
                </div>
                <div className="w-full pl-10 flex justify-around items-end h-[calc(100%-1.5rem)] z-10 gap-2">
                  <div className="flex items-end gap-1 w-full max-w-[30px] justify-center group">
                    <div className="w-2 md:w-3 bg-purple-900/50 rounded-t-sm h-[30%] group-hover:bg-purple-800 transition-colors"></div>
                    <div className="w-2 md:w-3 bg-teal-900/50 rounded-t-sm h-[45%] group-hover:bg-teal-800 transition-colors"></div>
                  </div>
                  <div className="flex items-end gap-1 w-full max-w-[30px] justify-center group">
                    <div className="w-2 md:w-3 bg-purple-900/50 rounded-t-sm h-[50%] group-hover:bg-purple-800 transition-colors"></div>
                    <div className="w-2 md:w-3 bg-teal-900/50 rounded-t-sm h-[80%] group-hover:bg-teal-800 transition-colors"></div>
                  </div>
                  <div className="flex items-end gap-1 w-full max-w-[30px] justify-center group">
                    <div className="w-2 md:w-3 bg-purple-600 rounded-t-sm h-[90%] shadow-md"></div>
                    <div className="w-2 md:w-3 bg-teal-500 rounded-t-sm h-[60%] shadow-md"></div>
                  </div>
                  <div className="flex items-end gap-1 w-full max-w-[30px] justify-center group">
                    <div className="w-2 md:w-3 bg-purple-900/50 rounded-t-sm h-[40%] group-hover:bg-purple-800 transition-colors"></div>
                    <div className="w-2 md:w-3 bg-teal-900/50 rounded-t-sm h-[55%] group-hover:bg-teal-800 transition-colors"></div>
                  </div>
                  <div className="flex items-end gap-1 w-full max-w-[30px] justify-center group">
                    <div className="w-2 md:w-3 bg-purple-900/50 rounded-t-sm h-[60%] group-hover:bg-purple-800 transition-colors"></div>
                    <div className="w-2 md:w-3 bg-teal-900/50 rounded-t-sm h-[30%] group-hover:bg-teal-800 transition-colors"></div>
                  </div>
                  <div className="flex items-end gap-1 w-full max-w-[30px] justify-center group">
                    <div className="w-2 md:w-3 bg-purple-900/50 rounded-t-sm h-[20%] group-hover:bg-purple-800 transition-colors"></div>
                    <div className="w-2 md:w-3 bg-teal-900/50 rounded-t-sm h-[40%] group-hover:bg-teal-800 transition-colors"></div>
                  </div>
                  <div className="flex items-end gap-1 w-full max-w-[30px] justify-center group">
                    <div className="w-2 md:w-3 bg-purple-900/50 rounded-t-sm h-[85%] group-hover:bg-purple-800 transition-colors"></div>
                    <div className="w-2 md:w-3 bg-teal-900/50 rounded-t-sm h-[70%] group-hover:bg-teal-800 transition-colors"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-10 w-[calc(100%-2.5rem)] flex justify-around text-xs text-gray-500">
                  <span className="w-full text-center">Sun</span>
                  <span className="w-full text-center text-purple-400 font-semibold">Mon</span>
                  <span className="w-full text-center">Tue</span>
                  <span className="w-full text-center">Wed</span>
                  <span className="w-full text-center">Thu</span>
                  <span className="w-full text-center">Fri</span>
                  <span className="w-full text-center">Sat</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-6">
            <div className="bg-[#121414] rounded-2xl p-6 card-shadow border border-gray-800 overflow-x-auto w-full">
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
                  {Array.from({ length: 5 }).map((_, index) => (
                    <tr key={index} className="border-b border-gray-800/50 last:border-0 hover:bg-gray-800/30 transition-colors">
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
  );
}
