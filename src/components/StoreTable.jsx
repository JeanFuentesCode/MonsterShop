import { tableRows } from "../data/dashboardData.js";

export default function StoreTable() {
  return (
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
            {tableRows.map((row, index) => (
              <tr key={index} className="border-b border-gray-800/50 last:border-0 hover:bg-gray-800/30 transition-colors">
                <td className="py-4 font-medium text-gray-200">{row.store}</td>
                <td className="py-4 text-gray-500">{row.location}</td>
                <td className="py-4 text-gray-500">{row.sales}</td>
                <td className="py-4 font-medium text-gray-200 text-right">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
