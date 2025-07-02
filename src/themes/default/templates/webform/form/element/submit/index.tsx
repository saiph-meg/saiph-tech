import { FC } from "react";
import { FormElementProps } from "@theme://default/form/form.types";

const Submit: FC<FormElementProps> = ({ attrs }) => {
  // @ts-ignore
  return <input {...attrs} aria-label={attrs?.value ?? attrs?.id ?? ""} />;
};

export default Submit;
