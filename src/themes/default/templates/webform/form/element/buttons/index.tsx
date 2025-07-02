import { FC } from "react";
import { FormElementProps } from "@theme://default/form/form.types";
import { CheckboxButton, Input } from "../element.styles";
import { useFormContext } from "react-hook-form";
import cn from "classnames";

const Buttons: FC<FormElementProps> = ({ attrs, options }) => {
  const { register, watch } = useFormContext();
  let selected = watch(attrs.name as string) as string[];

  const isSelected = (val: string) => {
    return Array.isArray(selected) && selected.indexOf(val) >= 0;
  };

  return (
    <>
      {options.map(option => {
        const props = {
          ...attrs,
          type: "checkbox",
          value: option.value,
          id: `${attrs.id}-${option.value}`
        };
        const isActive = isSelected(option.value);
        return (
          <CheckboxButton
            htmlFor={props.id}
            key={option.value}
            className={cn({
              active: isActive,
              inactive: !isActive
            })}>
            {/* @ts-ignore */}
            <Input {...props} {...register(props.name, options)} />
            {option.label}
          </CheckboxButton>
        );
      })}
    </>
  );
};

export default Buttons;
