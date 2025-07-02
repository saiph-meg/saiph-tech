import { FC } from "react";
import { FormElementProps } from "@theme://default/form/form.types";

const Form: FC<FormElementProps> = ({ element }) => {
  return <h3>{element.title}</h3>;
};

export default Form;
