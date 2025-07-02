import { FC, useEffect } from "react";
import { FormElementProps } from "@theme://default/form/form.types";
import { useFormContext } from "react-hook-form";

const Hidden: FC<FormElementProps> = ({ attrs, element }) => {
  const { register, setValue } = useFormContext();
  useEffect(() => {
    // @ts-ignore
    setValue(attrs.name, element.value);
  }, []);
  // @ts-ignore
  return <input {...attrs} {...register(attrs.name)} />;
};

export default Hidden;
