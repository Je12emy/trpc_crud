import { useDescription, useTsController } from "@ts-react/form";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { z } from "zod";
import { PatientFormSchema } from "./PatientDetailsForm";
import { useForm } from "react-hook-form";
import { BloodType } from "../types/Patient";
import { BaseButtonStyles } from "./Button";

export const TextField = () => {
  const { field, error } = useTsController<string>();
  const { label, placeholder } = useDescription();
  return (
    <>
      <label htmlFor={label}>
        <p className="pb-2 font-medium text-slate-700">{label}</p>
        <input
          name={label}
          type="text"
          value={field.value ? field.value : ""}
          onChange={(e) => field.onChange(e.target.value)}
          className="w-full rounded-lg border border-slate-200 py-3 px-3 hover:shadow focus:border-slate-500 focus:outline-none"
          placeholder={placeholder}
        />
        {error?.errorMessage && (
          <span className="text-red-600">{error?.errorMessage}</span>
        )}
      </label>
    </>
  );
};

type SubmitButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const SubmitButton: FC<SubmitButtonProps> = ({ ...props }) => {
  // Dirty is not updating, maybe file a bug report
  // const { formState } = useForm<z.infer<typeof PatientFormSchema>>();

  return (
    <button
      type="submit"
      className={BaseButtonStyles}
      {...props}
    />
  );
};

export const Dropdown: FC<{ options: string[] }> = ({ options }) => {
  const { field, error } = useTsController<BloodType>();
  const { label } = useDescription();

  return (
    <>
      <label htmlFor={field.name}>
        <p className="pb-2 font-medium text-slate-700">{label}</p>
        <select
          value={field.value ? field.value : "none"}
          onChange={(e) => field.onChange(e.target.value as BloodType)}
          className="w-full rounded-lg border border-slate-200 bg-white py-3 px-3 hover:shadow focus:border-slate-500 focus:outline-none"
        >
          {!field.value && <option value="none">Please select...</option>}
          {options.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
        {error?.errorMessage && (
          <span className="text-red-600">{error?.errorMessage}</span>
        )}
      </label>
    </>
  );
};
