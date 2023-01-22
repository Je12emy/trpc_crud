import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const Backdrop: FC<Props> = ({ children }) => (
  <div className="fixed inset-0 z-10 bg-gray-900 bg-opacity-50">{children}</div>
);
