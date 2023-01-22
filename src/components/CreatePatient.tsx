import { FC } from "react";
import { PatientForm } from "./PatientDetailsForm";
import { SidePanelWithBackDrop } from "./SidePanel";

type Props = {
  onClose: () => void;
};

export const CreatePatient: FC<Props> = ({ onClose: handleClose }) => {
  return (
    <>
      <SidePanelWithBackDrop title="Create Patient" onClose={handleClose}>
        <div className="m-4">
          <PatientForm
            onSubmit={(data) => {
              console.log(data);
            }}
          />
        </div>
      </SidePanelWithBackDrop>
    </>
  );
};
