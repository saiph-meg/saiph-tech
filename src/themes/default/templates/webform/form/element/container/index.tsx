import { FC, PropsWithChildren } from "react";
import { FormElementProps } from "@theme://default/form/form.types";

const Textfield: FC<PropsWithChildren<FormElementProps>> = ({ children }) => {
  return <div>{children}</div>;
};

export default Textfield;
