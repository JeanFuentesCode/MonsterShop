import { metricsCards } from "../data/dashboardData.js";

export default function MetricsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full">
      {metricsCards.map((card) => (
        <div
          key={card.title}
          className={`rounded-2xl p-6 flex flex-col justify-between card-shadow border ${card.cardBg}`}
        >
          <div className={`flex items-center gap-2 ${card.textColor} mb-2`}>
            <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
              <i className={`${card.icon} text-sm`}></i>
            </div>
            <span className="font-medium text-sm">{card.title}</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">{card.value}</h2>
            <p className={`text-xs ${card.detailColor} mt-1`}>{card.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
