import { Reducer, useCallback, useReducer } from "react";
import { Patient } from "../types/Patient";

type DrawerReducerActions = {
  type: "select" | "deselect";
  payload: Patient | null;
};

type DrawerReducerState = {
  selectedPatient: Patient | null;
  shouldOpenDrawer: boolean;
};

export const DrawerReducer: Reducer<
  DrawerReducerState,
  DrawerReducerActions
> = (state, action) => {
  switch (action.type) {
    case "select":
      return { selectedPatient: action.payload, shouldOpenDrawer: true };
    case "deselect":
      return { selectedPatient: null, shouldOpenDrawer: false };
    default:
      return state;
  }
};

const InitialDrawerState: DrawerReducerState = {
  selectedPatient: null,
  shouldOpenDrawer: false,
};

export const usePatientDrawer = () => {
  const [state, dispatch] = useReducer(DrawerReducer, InitialDrawerState);

  const selectPatient = useCallback(
    (patient: Patient) => {
      dispatch({ type: "select", payload: patient });
    },
    [dispatch]
  );

  const deselectPatient = useCallback(() => {
    dispatch({ type: "deselect", payload: null });
  }, [dispatch]);

  return [ state, selectPatient, deselectPatient ] as const;
};
