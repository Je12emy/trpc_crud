import { FC } from "react";
import { Patient } from "../types/Patient";
import { api } from "../utils/api";
import { Backdrop } from "./Backdrop";
import { PatientDetailsForm } from "./PatientDetailsForm";
import { SidePanel } from "./SidePanel";
import { Spinner } from "./Spinner";

type Props = Pick<Patient, "id"> & {
  onClose: () => void;
};

export const PatientDetails: FC<Props> = ({ id, onClose: handleClose }) => {
  const patient = api.patient.byId.useQuery({ id });

  if (patient.isLoading) {
    return (
      <Backdrop>
        <SidePanel>
          <Spinner />
        </SidePanel>
      </Backdrop>
    );
  }

  if (!patient.data) {
    return <p>Patient not found</p>;
  }

  return (
    <>
      <Backdrop>
        <SidePanel>
          <div className="mt-4 flex flex-row items-center justify-center space-x-2">
            <h2 className="text-center text-2xl font-bold">Patient Details</h2>
            <button onClick={handleClose}>
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
          <div className="mx-4">
            <PatientDetailsForm {...patient.data} />
          </div>
        </SidePanel>
      </Backdrop>
    </>
  );
};
