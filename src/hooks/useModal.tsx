import { Reducer, useCallback, useReducer, useState } from "react";
import { Patient } from "../types/Patient";

type PatientDeleteModalActions = {
  type: "open" | "close";
  payload: Patient | null;
};

type PatientDeleteModalState = {
  isOpen: boolean;
  selectedPatient: Patient | null;
};

const PatientDeleteModalReducer: Reducer<
  PatientDeleteModalState,
  PatientDeleteModalActions
> = (state, action) => {
  switch (action.type) {
    case "open":
      return { isOpen: true, selectedPatient: action.payload };
    case "close":
      return { isOpen: false, selectedPatient: null };
    default:
      return state;
  }
};

export const usePatientDeleteModal = () => {
  const [state, dispatch] = useReducer(PatientDeleteModalReducer, {
    isOpen: false,
    selectedPatient: null,
  });

  const openModal = useCallback(
    (patient: Patient) => {
      dispatch({ type: "open", payload: patient });
    },
    [dispatch]
  );

  const closeModal = useCallback(() => {
    dispatch({ type: "close", payload: null });
  }, [dispatch]);

  return [state, openModal, closeModal] as const;
};
