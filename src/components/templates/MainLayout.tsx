import React from "react";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {children}
    </main>
  );
};
