import { FC } from "react";
import { FormElementProps } from "@theme://default/form/form.types";
import { RadioLabel, RadiosWrap, Input } from "../element.styles";
import { useFormContext } from "react-hook-form";
import cn from "classnames";

const Select: FC<FormElementProps> = ({ attrs, options }) => {
  const { register, watch } = useFormContext();
  let selected = watch(attrs.name as string) as string;

  const toString = (str: string | number) =>
    // @ts-ignore
    isNaN(str) ? str : str.toString();

  if (typeof options === "object" && !Array.isArray(options)) {
    options = Object.keys(options).map((name: string) => ({
      value: name,
      // @ts-ignore
      label: options[name]
    }));
  } else if (Array.isArray(options) && typeof options[0] === "string") {
    // @ts-ignore
    options = options.map((label: string, value) => ({
      value: toString(value),
      label
    }));
  } else if (typeof options === "string" && options === "yes_no") {
    options = [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" }
    ];
  }

  const isSelected = (val: string) => {
    return selected === val;
  };

  return (
    <RadiosWrap>
      {options.map((option: any) => {
        const props = {
          ...attrs,
          type: "radio",
          value: option.value,
          id: `${attrs.id}-${option.value}`
        };
        return (
          <RadioLabel
            htmlFor={props.id}
            key={option.value}
            className={cn({ checked: isSelected(option.value) })}>
            {/* @ts-ignore */}
            <Input {...props} {...register(props.name, options)} />
            {option.label}
          </RadioLabel>
        );
      })}
    </RadiosWrap>
  );
};

export default Select;
