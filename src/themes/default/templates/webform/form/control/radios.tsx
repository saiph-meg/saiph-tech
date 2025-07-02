import { FC, Fragment } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import {
  Error,
  GroupItem,
  InputGroup,
  RadiosLabel,
  Wrap
} from "./control.styles";
import cn from "classnames";

const FormControl: FC<any> = ({
  label,
  labelAttrs,
  description,
  prefix,
  suffix,
  children,
  name
}) => {
  const { formState } = useFormContext() ?? {};
  const { errors } = formState ?? {};
  let Group: any = Fragment;
  if (prefix || suffix) {
    Group = InputGroup;
  }

  return (
    <Wrap className={cn({ error: errors?.[name] })}>
      {label && <RadiosLabel {...labelAttrs}>{label}</RadiosLabel>}
      <Group>
        {prefix && <GroupItem>{prefix}</GroupItem>}
        {children}
        {suffix && <GroupItem>{suffix}</GroupItem>}
      </Group>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <Error dangerouslySetInnerHTML={{ __html: message }} />
        )}
      />
      <div>{description}</div>
    </Wrap>
  );
};

export default FormControl;
