import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const BaseButtonStyles =
  "inline-flex w-full items-center justify-center space-x-2 rounded-lg border-indigo-500 bg-indigo-600 py-3 font-medium text-white hover:bg-indigo-500 hover:shadow disabled:bg-gray-500";

export const Button: FC<Props> = ({ ...props }) => {
  return <button className={BaseButtonStyles} {...props} />;
};
