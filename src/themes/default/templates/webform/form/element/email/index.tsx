import { FC } from "react";
import { FormElementProps } from "@theme://default/form/form.types";
import { Input } from "../element.styles";
import { useFormContext } from "react-hook-form";

const Email: FC<FormElementProps> = ({ attrs }) => {
  const { register } = useFormContext();
  // @ts-ignore
  return <Input {...attrs} {...register(attrs.name)} />;
};

export default Email;
