import { FC } from "react";

export const AppContainer: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      {children}
    </main>
  );
};
