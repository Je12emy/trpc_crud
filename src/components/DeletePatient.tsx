import { FC } from "react";
import { Patient } from "../types/Patient";
import { api } from "../utils/api";
import { ConfirmationModal } from "./ConfirmationModal";

type Props = Pick<Patient, "id"> & {
  onClose: () => void;
};

export const DeletePatient: FC<Props> = ({ id, onClose: handleClose }) => {
  // TODO: Implement delete patient delete
  const utils = api.useContext();
  const deletePatientMutation = api.patient.deleteById.useMutation({
    onSuccess: () => {
      utils.patient.all.invalidate();
      handleClose();
    },
  });
  return (
    <ConfirmationModal
      message={"Are you sure you wan't to delete this patient"}
      handleConfirmation={() => deletePatientMutation.mutate({ id })}
      onClose={handleClose}
    />
  );
};
