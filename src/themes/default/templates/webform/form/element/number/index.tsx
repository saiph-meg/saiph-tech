import { FC } from "react";
import { FormElementProps } from "@theme://default/form/form.types";
import { Input } from "../element.styles";

const Number: FC<FormElementProps> = ({ attrs }) => {
  // @ts-ignore
  return <Input {...attrs} />;
};

export default Number;
