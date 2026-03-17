import React from "react";
import { MainLayout } from "../components/templates/MainLayout";
import { HeaderAction } from "../components/molecules/HeaderAction";
import { DataList } from "../components/organisms/DataList";
import { useAppStore } from "../store/useAppStore";

export const HomePage: React.FC = () => {
  const { error } = useAppStore();

  return (
    <MainLayout>
      <div className="w-full max-w-4xl space-y-6">
        <HeaderAction />

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100">
            {error}
          </div>
        )}

        <DataList />
      </div>
    </MainLayout>
  );
};
