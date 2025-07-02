import { FC } from "react";
import { FormElementProps } from "@theme://default/form/form.types";
import { Textarea } from "../element.styles";
import { useFormContext } from "react-hook-form";

const Textfield: FC<FormElementProps> = ({ attrs, element }) => {
  const { register } = useFormContext();
  return (
    <>
      {/* @ts-ignore */}
      <Textarea
        {...attrs}
        {...register(attrs.name as string)}
        aria-label={element.title ?? element.placeholder}
      />
    </>
  );
};

export default Textfield;
