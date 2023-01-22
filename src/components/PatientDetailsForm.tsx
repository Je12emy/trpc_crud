import { createTsForm, createUniqueFieldSchema } from "@ts-react/form";
import { FC } from "react";
import { z } from "zod";
import { Patient } from "../types/Patient";
import { TextField, SubmitButton, Dropdown } from "./Form";

const bloodTypeDropdownSchema = createUniqueFieldSchema(
  z.string().min(1).describe("Blood Type // A"),
  "dropDown"
);

const mapppins = [
  [z.string(), TextField] as const,
  [bloodTypeDropdownSchema, Dropdown] as const,
] as const;

// @ts-ignore
const Form = createTsForm(mapppins);

export const PatientFormSchema = z.object({
  firstName: z.string().min(1).describe("First Name // John"),
  lastName: z.string().min(1).describe("Last Name // Doe"),
  bloodType: bloodTypeDropdownSchema,
});

type Props = {
  onSubmit: (data: z.infer<typeof PatientFormSchema>) => void;
  patient?: Partial<Patient>;
};

export const PatientForm: FC<Props> = ({ onSubmit: handleSubmit, patient }) => {
  return (
    <Form
      formProps={{ className: "flex flex-col space-y-4" }}
      schema={PatientFormSchema}
      defaultValues={patient}
      onSubmit={handleSubmit}
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
