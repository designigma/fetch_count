import React from "react";
import { useAppStore } from "../../store/useAppStore";

export const DataList: React.FC = () => {
  const { data, isLoading } = useAppStore();

  if (isLoading && data.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 animate-pulse">
        Loading initial data...
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No data fetched yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <h3
            className="font-bold text-gray-800 mb-2 truncate"
            title={item.title}
          >
            {item.id}. {item.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3">{item.body}</p>
        </div>
      ))}
    </div>
  );
};
