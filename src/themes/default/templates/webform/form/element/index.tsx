import { FC } from "react";
import { FormElementProps } from "@theme://default/form/form.types";

const Form: FC<FormElementProps> = ({ element }) => {
  return <div>{element.type}</div>;
};

export default Form;
