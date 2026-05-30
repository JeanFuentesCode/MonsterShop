import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import TopHeader from "./components/TopHeader.jsx";
import MetricsSection from "./components/MetricsSection.jsx";
import SellChart from "./components/SellChart.jsx";
import StoreTable from "./components/StoreTable.jsx";

export default function AppRoot() {
  return (
    <div className="flex h-screen overflow-hidden antialiased font-sans bg-black text-gray-200">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-black">
        <TopHeader />
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          <MetricsSection />
          <div className="mb-8">
            <SellChart />
          </div>
          <StoreTable />
        </div>
      </main>
    </div>
  );
}
