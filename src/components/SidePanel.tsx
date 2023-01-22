import { FC, PropsWithChildren } from "react";
import { Backdrop } from "./Backdrop";

type SidePanelProps = {
  title: string;
  onClose: () => void;
};

export const SidePanelWithBackDrop: FC<PropsWithChildren<SidePanelProps>> = ({
  children,
  ...props
}) => (
  <Backdrop>
    <SidePanelWithHeader {...props}>{children}</SidePanelWithHeader>
  </Backdrop>
);

export const SidePanelWithHeader: FC<PropsWithChildren<SidePanelProps>> = ({
  children,
  ...props
}) => (
  <aside className="fixed bottom-0 flex w-screen flex-col bg-white shadow md:inset-y-0 md:right-0 md:w-1/2 md:max-w-xs">
    <SidePanelHeader {...props} />
    {children}
  </aside>
);

export const EmptySidePanel: FC<PropsWithChildren> = ({ children }) => (
  <Backdrop>
    <aside className="fixed bottom-0 flex w-screen flex-col bg-white shadow md:inset-y-0 md:right-0 md:w-1/2 md:max-w-xs">
      {children}
    </aside>
  </Backdrop>
);

export const SidePanelHeader: FC<SidePanelProps> = ({ title, onClose }) => {
  return (
    <>
      <div className="mt-4 flex flex-row items-center justify-center space-x-2">
        <h2 className="text-center text-2xl font-bold">{title}</h2>
        <button onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
