import { useDescription, useTsController } from "@ts-react/form";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { z } from "zod";
import { EditPatientDetailsSchema } from "./PatientDetailsForm";
import { useForm } from "react-hook-form";
import { BloodType, Patient } from "../types/Patient";

export const TextField = () => {
  const { field, error } = useTsController<string>();
  const { label, placeholder } = useDescription();
  return (
    <>
      <label htmlFor={field.name}>
        <p className="pb-2 font-medium text-slate-700">{label}</p>
        <input
          type="text"
          value={field.value ? field.value : ""}
          onChange={(e) => field.onChange(e.target.value)}
          className="w-full rounded-lg border border-slate-200 py-3 px-3 hover:shadow focus:border-slate-500 focus:outline-none"
          placeholder={placeholder}
        />
        {error?.errorMessage && <span>{error?.errorMessage}</span>}
      </label>
    </>
  );
};

type SubmitButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const SubmitButton: FC<SubmitButtonProps> = ({ ...props }) => {
  const { formState } = useForm<z.infer<typeof EditPatientDetailsSchema>>();

  return (
    <button
      type="submit"
      className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border-indigo-500 bg-indigo-600 py-3 font-medium text-white hover:bg-indigo-500 hover:shadow disabled:bg-gray-500"
      {...props}
    />
  );
};

export const Dropdown: FC<{ options: string[] }> = ({ options }) => {
  const { field, error } = useTsController<BloodType>();
  const { label, placeholder } = useDescription();

  return (
    <>
      <label htmlFor={field.name}>
        <p className="pb-2 font-medium text-slate-700">{label}</p>
        <select
          value={field.value ? field.value : "none"}
          onChange={(e) => field.onChange(e.target.value as BloodType)}
          className="w-full bg-white rounded-lg border border-slate-200 py-3 px-3 hover:shadow focus:border-slate-500 focus:outline-none"
        >
          {!field.value && <option value="none">Please select...</option>}
          {options.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};
