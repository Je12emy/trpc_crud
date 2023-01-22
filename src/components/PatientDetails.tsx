import { FC } from "react";
import { Patient } from "../types/Patient";
import { api } from "../utils/api";
import { PatientDetailsForm } from "./PatientDetailsForm";

type Props = Pick<Patient, "id">;

export const PatientDetails: FC<Props> = ({ id }) => {
  const patient = api.patient.byId.useQuery({ id });

  if (patient.isLoading) {
    return <p>Loading...</p>;
  }

  if (!patient.data) {
    return <p>Patient not found</p>;
  }

  return (
    <>
      <div className="fixed inset-0 z-10 bg-gray-900 bg-opacity-50">
        <aside className="fixed inset-y-0 right-0 flex w-1/2 max-w-xs flex-col bg-white shadow">
          <h2 className="mt-4 text-center text-2xl font-bold">
            Patient Details
          </h2>
          <div className="mx-4">
            <PatientDetailsForm {...patient.data} />
          </div>
        </aside>
      </div>
    </>
  );
};
