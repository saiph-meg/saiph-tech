import { FC } from "react";
import { StyledForm } from "./form.styles";

const Form: FC<any> = ({ children, ...props }) => {
  return <StyledForm {...props}>{children}</StyledForm>;
};

export default Form;
