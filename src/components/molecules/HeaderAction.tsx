import React from "react";
import { Button } from "../atoms/Button";
import { AnimatedCounter } from "../atoms/AnimatedCounter";
import { useAppStore } from "../../store/useAppStore";
import { DownloadCloud, RotateCcw } from "lucide-react"; // <-- Imported RotateCcw icon

export const HeaderAction: React.FC = () => {
  // <-- Grab resetCount from the store
  const { fetchData, isLoading, fetchCount, resetCount } = useAppStore();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-gray-100 gap-6 w-full">
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Data Dashboard</h2>
        <p className="text-gray-500 text-sm mb-4">
          Click the button to fetch mock data and test the persistent counter.
        </p>

        {/* Added a flex container for the buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
          <Button onClick={fetchData} isLoading={isLoading} variant="primary">
            <DownloadCloud className="w-5 h-5 mr-2" />
            Fetch Data
          </Button>

          {/* New Reset Button! */}
          <Button onClick={resetCount} variant="secondary" disabled={isLoading}>
            <RotateCcw className="w-5 h-5 mr-2" />
            Reset Count
          </Button>
        </div>
      </div>

      <div className="flex-shrink-0 bg-gray-50 p-4 rounded-xl border border-gray-100 min-w-[120px]">
        <AnimatedCounter count={fetchCount} />
      </div>
    </div>
  );
};
