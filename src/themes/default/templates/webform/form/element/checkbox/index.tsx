import { FC } from "react";
import { BaseElementProps } from "@theme://default/form/form.types";
import { Input, CheckboxLabel } from "../element.styles";
import cn from "classnames";
import { useFormContext } from "react-hook-form";

const Checkbox: FC<BaseElementProps> = ({ attrs, element }) => {
  const { register, watch } = useFormContext();
  const { id } = attrs;

  const checked = watch(attrs.name as string, false);
  const options: any = {};
  attrs.type = "checkbox";

  // @ts-ignore
  if (element.type == "webform_terms_of_service") {
    // @ts-ignore
    options.required = element.required;
  }

  return (
    <CheckboxLabel htmlFor={id} className={cn({ checked })}>
      {/* @ts-ignore */}
      <Input {...attrs} {...register(attrs.name, options)} />
      {element.title}
    </CheckboxLabel>
  );
};

export default Checkbox;
