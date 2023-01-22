import { z } from "zod";
import type { RouterOutput } from "./Infer";

export type Patient = NonNullable<RouterOutput["patient"]["byId"]>
export type Patients = RouterOutput["patient"]["all"]
export type BloodType = Pick<Patient, "bloodType">["bloodType"]
