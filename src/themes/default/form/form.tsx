import { FC } from "react";
import { Template } from "@4i4/theme-registry";
import {
  useFormElementChildren,
  useFormElementTemplateSuggestions
} from "./form.help";
import { FormType } from "./form.types";

const FormComponent: FC<{ form: FormType; onSuccess?: () => void }> = ({
  form,
  onSuccess
}) => {
  const [templates, context] = useFormElementTemplateSuggestions(form);
  const { elements, ...props } = form;
  const children = useFormElementChildren(elements);

  return (
    <Template
      // @ts-ignore
      template={templates}
      context={context}
      elements={elements}
      onSuccess={onSuccess}
      {...props}>
      {children}
    </Template>
  );
};

export default FormComponent;
