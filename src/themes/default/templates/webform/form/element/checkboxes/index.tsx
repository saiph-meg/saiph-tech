import { FC, useCallback, useEffect, useState } from "react";
import { FormElementProps } from "@theme://default/form/form.types";
import { CheckboxLabel, Input } from "../element.styles";
import { useFormContext } from "react-hook-form";
import cn from "classnames";

const Select: FC<FormElementProps> = ({ attrs, options, element }) => {
  const { register, watch } = useFormContext();
  let selected = watch(attrs.name as string) as string[];
  const [visible, setVisible] = useState<number>(
    // @ts-ignore
    element?.maxOptions ?? options.length
  );

  const toggle = useCallback(
    (event: any) => {
      event.preventDefault();
      setVisible(prevState => {
        if (prevState < options.length) {
          return options.length;
        } else {
          // @ts-ignore
          return element?.maxOptions ?? options.length;
        }
      });
    },
    [options.length]
  );

  // @ts-ignore
  const limited = element?.maxOptions && element.maxOptions < options.length;
  const collapsed = visible < options.length;

  const isSelected = (val: string) => {
    return Array.isArray(selected) && selected.indexOf(val) >= 0;
  };

  useEffect(() => {
    // @ts-ignore
    setVisible(element?.maxOptions ?? options.length);
  }, [options.length]);

  return (
    <>
      {options.slice(0, visible).map(option => {
        const props = {
          ...attrs,
          type: "checkbox",
          value: option.value,
          id: `${attrs.id}-${option.value}`
        };
        return (
          <CheckboxLabel
            htmlFor={props.id}
            key={option.value}
            className={cn({ checked: isSelected(option.value) })}>
            {/* @ts-ignore */}
            <Input {...props} {...register(props.name, options)} />
            {option.label}
          </CheckboxLabel>
        );
      })}
      {limited && (
        <button onClick={toggle} className="btn btn-primary-link">
          {collapsed ? "show_all" : "show_less"}
        </button>
      )}
    </>
  );
};

export default Select;
