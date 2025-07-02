import { FC, useCallback, useState } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import {
  CheckboxGroup,
  CheckboxLabel,
  CheckboxWrap,
  Error
} from "./control.styles";
import cn from "classnames";
import { SelectArrow } from "@theme://default/templates/webform/form/element/element.styles";

const FormControl: FC<any> = ({
  label,
  labelAttrs,
  description,
  children,
  name
}) => {
  const { formState } = useFormContext() ?? {};
  const { errors } = formState ?? {};
  const [open, setOpen] = useState<boolean>(true);

  const toggle = useCallback(() => {
    setOpen(prevState => !prevState);
  }, []);

  return (
    <CheckboxWrap className={cn({ error: errors?.[name] })}>
      {label && (
        <CheckboxLabel {...labelAttrs} onClick={toggle}>
          <span>{label}</span>
          <SelectArrow className={cn({ active: !open })} />
        </CheckboxLabel>
      )}
      <CheckboxGroup className={cn({ collapsed: !open })}>
        {children}
      </CheckboxGroup>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <Error dangerouslySetInnerHTML={{ __html: message }} />
        )}
      />
      <div>{description}</div>
    </CheckboxWrap>
  );
};

export default FormControl;
