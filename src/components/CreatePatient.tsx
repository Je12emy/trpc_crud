import { FC } from "react";
import { api } from "../utils/api";
import { PatientForm } from "./PatientDetailsForm";
import { SidePanelWithBackDrop } from "./SidePanel";

type Props = {
  onClose: () => void;
};

export const CreatePatient: FC<Props> = ({ onClose: handleClose }) => {
  // TODO add create function
  const utils = api.useContext();
  const createPatientMutation = api.patient.create.useMutation({
    onSuccess: () => {
      utils.patient.all.invalidate();
      handleClose();
    },
  });

  return (
    <>
      <SidePanelWithBackDrop title="Create Patient" onClose={handleClose}>
        <div className="m-4">
          <PatientForm
            onSubmit={(data) => {
              createPatientMutation.mutate(data);
            }}
          />
        </div>
      </SidePanelWithBackDrop>
    </>
  );
};
