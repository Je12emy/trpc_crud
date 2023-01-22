import { FC } from "react";
import { Patient } from "../types/Patient";
import { api } from "../utils/api";
import { PatientForm } from "./PatientDetailsForm";
import {
  EmptySidePanel,
  SidePanelWithBackDrop,
} from "./SidePanel";
import { Spinner } from "./Spinner";

type Props = Pick<Patient, "id"> & {
  onClose: () => void;
};

export const PatientDetails: FC<Props> = ({ id, onClose: handleClose }) => {
  const patient = api.patient.byId.useQuery({ id });

  if (patient.isLoading) {
    return (
      <EmptySidePanel>
        <Spinner />
      </EmptySidePanel>
    );
  }

  if (!patient.data) {
    return <p>Patient not found</p>;
  }

  return (
    <>
      <SidePanelWithBackDrop title="Patient Details" onClose={handleClose}>
        <div className="m-4">
          <PatientDetailsForm {...patient.data} />
        </div>
      </SidePanelWithBackDrop>
    </>
  );
};
