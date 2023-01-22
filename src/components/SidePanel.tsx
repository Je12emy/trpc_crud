import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const SidePanel: FC<Props> = ({ children }) => (
  <aside className="fixed inset-y-0 right-0 flex w-1/2 max-w-xs flex-col bg-white shadow">
    {children}
  </aside>
);
