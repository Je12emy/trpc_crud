import { createTsForm } from "@ts-react/form";
import { FC } from "react";
import { z } from "zod";
import { Patient } from "../types/Patient";
import { TextField, SubmitButton } from "./Form";

const mapppins = [
  [z.string(), TextField],
  [z.string(), TextField],
] as const;

const Form = createTsForm(mapppins);

export const EditPatientDetailsSchema = z.object({
  firstName: z.string().min(1).describe("First Name // John"),
  lastName: z.string().min(1).describe("Last Name // Doe"),
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
    />
  );
};
