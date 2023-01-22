import { createTsForm, createUniqueFieldSchema } from "@ts-react/form";
import { FC } from "react";
import { z } from "zod";
import { Patient } from "../types/Patient";
import { TextField, SubmitButton, Dropdown } from "./Form";

const DropdownSchema = createUniqueFieldSchema(
  z.string().min(1).describe("Blood Type // A"),
  "dropDown"
);

const mapppins = [
  [z.string(), TextField] as const,
  [DropdownSchema, Dropdown] as const,
] as const;

// @ts-ignore
const Form = createTsForm(mapppins);

export const EditPatientDetailsSchema = z.object({
  firstName: z.string().min(1).describe("First Name // John"),
  lastName: z.string().min(1).describe("Last Name // Doe"),
  bloodType: DropdownSchema,
});

export const PatientDetailsForm: FC<Patient> = (patient) => {
  const onSubmit = (data: z.infer<typeof EditPatientDetailsSchema>) => {
    console.log(data);
  };

  return (
    <Form
      formProps={{ className: "flex flex-col space-y-4" }}
      schema={EditPatientDetailsSchema}
      defaultValues={patient}
      onSubmit={onSubmit}
      renderAfter={() => (
        <SubmitButton type="submit">Save Changes</SubmitButton>
      )}
      props={{
        bloodType: {
          options: ["A", "B", "AB", "O"],
        },
      }}
    />
  );
};
