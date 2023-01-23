import { FC, useContext } from "react";
import { Patient } from "../types/Patient";
import { api } from "../utils/api";
import { PatientForm } from "./PatientDetailsForm";
import { EmptySidePanel, SidePanelWithBackDrop } from "./SidePanel";
import { Spinner } from "./Spinner";

type Props = Pick<Patient, "id"> & {
  onClose: () => void;
};

export const PatientDetails: FC<Props> = ({ id, onClose: handleClose }) => {
  const utils = api.useContext();
  const patient = api.patient.byId.useQuery({ id });
  // TODO add update function
  const editPatientMutation = api.patient.update.useMutation({
    onSuccess: () => {
      utils.patient.all.invalidate();
      handleClose();
    },
  });

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
          <PatientForm
            patient={patient.data}
            onSubmit={(data) => {
              editPatientMutation.mutate({
                id,
                lastName: data.lastName,
                firstName: data.firstName,
                bloodType: data.bloodType,
              });
            }}
          />
        </div>
      </SidePanelWithBackDrop>
    </>
  );
};
