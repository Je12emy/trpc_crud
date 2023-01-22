import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const SidePanel: FC<Props> = ({ children }) => (
  <aside className="fixed bottom-0 flex w-screen flex-col bg-white shadow md:inset-y-0 md:right-0 md:w-1/2 md:max-w-xs">
    {children}
  </aside>
);
