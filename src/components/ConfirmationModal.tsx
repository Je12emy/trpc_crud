import { FC } from "react";
import { Backdrop } from "./Backdrop";

type Props = {
  message: string;
  handleConfirmation: () => void;
};

export const ConfirmationModal: FC<Props> = ({
  handleConfirmation,
  message,
}) => {
  return (
    <Backdrop>
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <section className="m-4 flex flex-col items-center justify-center rounded-md bg-white px-16 py-14 text-center">
          <h1 className="mb-4 text-xl font-semibold text-slate-500">
            {message}
          </h1>
          <div className="flex flex-row space-x-2">
            <button
              onClick={handleConfirmation}
              className="text-md rounded-md bg-red-500 px-4 py-2 font-semibold text-white"
            >
              Confirm
            </button>
            <button className="text-md ml-2 rounded-md bg-indigo-500 px-7 py-2  text-white">
              Cancel
            </button>
          </div>
        </section>
      </div>
    </Backdrop>
  );
};
