import { FC, useCallback, useEffect, useRef, useState } from "react";
import { FormElementProps } from "@theme://default/form/form.types";
import {
  Option,
  Options,
  Select as Wrap,
  SelectArrow,
  SelectValue
} from "../element.styles";
import cn from "classnames";
import { useFormContext } from "react-hook-form";

const Select: FC<FormElementProps> = ({ attrs, options, element }) => {
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
  }
  const { register, setValue, watch } = useFormContext();
  // @ts-ignore
  const { placeholder, required, multiple, onValueChanged, className } = attrs;
  // @ts-ignore
  const { empty_option } = element;

  const containerRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);

  let selected = watch(attrs.name as string);
  const [open, setOpen] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setOpen(prevState => !prevState);
  }, []);

  const handleOutsideClick = useCallback((event: any) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setOpen(false);
    }
  }, []);

  const handleSelect = useCallback(
    (event: any) => {
      event.preventDefault();
      if (multiple) event.stopPropagation();
      const { value } = event.target.dataset;

      if (!multiple) {
        setValue(attrs.name as string, value);
        // @ts-ignore
        if (onValueChanged) onValueChanged(value);
        return;
      }

      if (!Array.isArray(selected)) {
        selected = [];
      }
      const values = [...selected];
      if (values.indexOf(value) >= 0) {
        values.splice(values.indexOf(value), 1);

        setValue(attrs.name as string, values.length ? [...values] : undefined);
      } else {
        values.push(value);
        setValue(attrs.name as string, [...values]);
      }

      // @ts-ignore
      if (onValueChanged) onValueChanged(values);
    },
    [selected]
  );

  const isSelected = (val: string) => {
    if (!multiple) {
      return val === selected;
    } else {
      return Array.isArray(selected) && selected.indexOf(val) >= 0;
    }
  };

  useEffect(() => {
    if (!open) return;
    const parent = optionsRef?.current?.offsetParent as HTMLElement;
    const top = parent?.offsetTop ?? 0;
    const height = optionsRef?.current?.offsetHeight ?? 0;

    if (window.innerHeight < top + height) {
      optionsRef?.current?.classList.add("expand-to-top");
    } else {
      optionsRef?.current?.classList.remove("expand-to-top");
    }

    window.addEventListener("click", handleOutsideClick);
    return () => {
      optionsRef?.current?.classList.remove("expand-to-top");
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  const processedOptions = options;

  const selectedOptions = options?.find(
    option =>
      option.value === (Array.isArray(selected) ? selected[0] : selected)
  );

  return (
    <>
      {/* @ts-ignore */}
      <Wrap
        onClick={toggle}
        // @ts-ignore
        className={cn("dropdown", { open, [className]: className })}
        ref={containerRef}>
        {/* @ts-ignore */}
        <select
          {...attrs}
          {...register(attrs.name as string)}
          aria-label={element.title ?? element.placeholder}>
          {!multiple && (
            <option key="empty" value="">
              {placeholder ?? empty_option ?? "- NONE -"}
            </option>
          )}
          {options?.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <SelectValue>
          {selectedOptions?.label ?? placeholder ?? empty_option ?? <>&nbsp;</>}
        </SelectValue>
        <SelectArrow className={cn({ active: open })} />
        <Options ref={optionsRef} className={cn({ open })}>
          {!required && selected && !multiple && (
            <Option onClick={handleSelect}>{placeholder ?? "- NONE -"}</Option>
          )}
          {processedOptions.length > 0 && (
            <>
              {processedOptions.map(({ value, label }) => (
                <Option
                  key={value}
                  onClick={handleSelect}
                  data-value={value}
                  className={cn({ selected: isSelected(value), multiple })}>
                  {label}
                </Option>
              ))}
            </>
          )}
        </Options>
      </Wrap>
      {multiple && (
        <div className="btn-group">
          {options
            .filter(
              option =>
                Array.isArray(selected) && selected.indexOf(option.value) >= 0
            )
            .map(option => (
              <button
                className="btn btn-primary-hollow btn-sm"
                key={option.value}
                data-value={option.value}
                onClick={handleSelect}>
                {option.label}
              </button>
            ))}
        </div>
      )}
    </>
  );
};

export default Select;
