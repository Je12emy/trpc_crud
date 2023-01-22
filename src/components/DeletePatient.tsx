import { FC } from "react";
import { Patient } from "../types/Patient";
import { ConfirmationModal } from "./ConfirmationModal";

type Props = Pick<Patient, "id"> & {
  onClose: () => void;
};

export const DeletePatient: FC<Props> = ({ onClose: handleClose }) => {
  // TODO: Implement delete patient delete
  return (
    <ConfirmationModal
      message={"Are you sure you wan't to delete this patient"}
      handleConfirmation={() => {}}
      onClose={handleClose}
    />
  );
};
