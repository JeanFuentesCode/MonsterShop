import { chartBars } from "../data/dashboardData.js";

export default function SellChart() {
  return (
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
          {chartBars.map((bar) => (
            <div key={bar.day} className="flex items-end gap-1 w-full max-w-[30px] justify-center group">
              <div className={`w-2 md:w-3 rounded-t-sm ${bar.purpleHeight} bg-purple-900/50 group-hover:bg-purple-800 transition-colors`}></div>
              <div className={`w-2 md:w-3 rounded-t-sm ${bar.tealHeight} bg-teal-900/50 group-hover:bg-teal-800 transition-colors`}></div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-10 w-[calc(100%-2.5rem)] flex justify-around text-xs text-gray-500">
          {chartBars.map((bar) => (
            <span key={bar.day} className={`w-full text-center ${bar.day === "Mon" ? "text-purple-400 font-semibold" : ""}`}>
              {bar.day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
