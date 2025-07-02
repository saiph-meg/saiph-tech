import { FC } from "react";
import { FormElementProps } from "@theme://default/form/form.types";

const Color: FC<FormElementProps> = ({ attrs }) => {
  return <input {...attrs} />;
};

export default Color;
