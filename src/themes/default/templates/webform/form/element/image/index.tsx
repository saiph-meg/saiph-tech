import { FC } from "react";
import { FormElementProps } from "@theme://default/form/form.types";
import { Input } from "../element.styles";
import { useFormContext } from "react-hook-form";

const Textfield: FC<FormElementProps> = ({ attrs, element }) => {
  const { register } = useFormContext();

  attrs.type = "hidden";
  // attrs.accept = ".jpg,.jpeg,.png";

  return (
    // @ts-ignore
    <Input
      {...attrs}
      {...register(attrs.name as string)}
      aria-label={element.title ?? element.placeholder}
    />
  );
};

export default Textfield;
