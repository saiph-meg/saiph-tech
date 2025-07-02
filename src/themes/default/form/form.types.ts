import { AllHTMLAttributes, FormEvent } from "react";

type FormElementValue = string | number | boolean;
export type UndefinedType = { type: undefined };

type Template = string | string[];
export type TemplateWithContext = { template: Template; context?: string };
type ElementTemplate = Template | TemplateWithContext;

export type OptionValuesObject = { [value: string]: string };
export type OptionValuesPairs = { value: string; label: string };

interface FormBase<T = UndefinedType> extends ElementWithChildren<T> {
  settings: any;
  id?: string;
  method?: "POST" | "GET" | "PUT" | "DELETE";
  action?: string;
  template?: ElementTemplate;
  onSubmit?: (_event: FormEvent<HTMLFormElement>) => unknown;
  formRef?: unknown;
}

interface BasicElement {
  type: string;
  name?: string;
  id?: string;
  title?: string;
  description?: JSX.Element | string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  access?: boolean;
  value?: FormElementValue | FormElementValue[];
  defaultValue?: FormElementValue | FormElementValue[];
  template?: ElementTemplate;
  wrapper?: ElementTemplate;
  prefix?: JSX.Element | string;
  suffix?: JSX.Element | string;
  cardinality?: number;
  placeholder?: string;
  attributes?: AllHTMLAttributes<any>;
  wrapAttributes?: AllHTMLAttributes<any>;
}

interface InputElement<T, A = HTMLInputElement, W = HTMLDivElement> {
  type: T;
  maxLength?: number;
  minLength?: number;
  size?: number;
  max?: number;
  min?: number;
  step?: number;
  attributes?: AllHTMLAttributes<A>;
  wrapAttributes?: AllHTMLAttributes<W>;
}
interface OptionsElement<T, A = HTMLSelectElement, W = HTMLDivElement> {
  type: T;
  options: OptionValuesObject | OptionValuesPairs[];
  attributes?: AllHTMLAttributes<A>;
  wrapAttributes?: AllHTMLAttributes<W>;
}

export interface ElementChildren<T = UndefinedType> {
  [key: string]: FormElement<T>;
}

interface ElementWithChildren<T = UndefinedType> {
  elements: ElementChildren<T>;
}

interface ContainerBase<T, E = UndefinedType> extends ElementWithChildren<E> {
  type: T;
  collapsable?: boolean;
  open?: boolean;
}

interface LongTextBase<T> {
  type: T;
  cols?: number;
  rows?: number;
  maxLength?: number;
}

// Input type elements.
// eslint-disable-next-line prettier/prettier
type TextFieldAttrs =
  | "type"
  | "maxLength"
  | "minLength"
  | "size"
  | "attributes";
type TextFieldElement = Pick<InputElement<"textfield">, TextFieldAttrs>;

type NumberAttrs = TextFieldAttrs | "max" | "min" | "step";
type NumberElement = Pick<InputElement<"number">, NumberAttrs>;

type RangeAttrs = "type" | "max" | "min" | "step";
type RangeElement = Pick<InputElement<"range">, RangeAttrs>;

type ColorAttrs = "type";
type ColorElement = Pick<InputElement<"color">, ColorAttrs>;

type EmailAttrs = TextFieldAttrs;
type EmailElement = Pick<InputElement<"email">, EmailAttrs>;

type HiddenAttrs = "type";
type HiddenElement = Pick<InputElement<"hidden">, HiddenAttrs>;

type PasswordAttrs = TextFieldAttrs;
type PasswordElement = Pick<InputElement<"password">, PasswordAttrs>;

type SubmitAttrs = "type" | "attributes";
type SubmitElement = Pick<InputElement<"submit">, SubmitAttrs>;

// Options elements.
type SelectAttrs = "type" | "options" | "attributes";
type SelectElement = Pick<OptionsElement<"select">, SelectAttrs>;
type CheckboxesAttrs = "type" | "options" | "attributes";
type CheckboxesElement = Pick<OptionsElement<"checkboxes">, CheckboxesAttrs>;
type RadiosAttrs = "type" | "options" | "attributes";
type RadiosElement = Pick<OptionsElement<"radios">, RadiosAttrs>;
type ButtonsAttrs = "type" | "options" | "attributes";
type ButtonsElement = Pick<OptionsElement<"buttons">, ButtonsAttrs>;

// Containers elements.
type FieldsetAttrs = "type" | "elements" | "collapsable" | "open";
// eslint-disable-next-line prettier/prettier
type FieldsetElement<T = {}> = Pick<
  ContainerBase<"fieldset", T>,
  FieldsetAttrs
>;
type DetailsAttrs = FieldsetAttrs;
type DetailsElement<T = {}> = Pick<ContainerBase<"details", T>, DetailsAttrs>;
type ContainerAttrs = "type" | "elements";
// eslint-disable-next-line prettier/prettier
type ContainerElement<T = {}> = Pick<
  ContainerBase<"container", T>,
  ContainerAttrs
>;

type Textarea = LongTextBase<"textarea">;

type SupportedElements<T = UndefinedType> =
  | TextFieldElement
  | NumberElement
  | RangeElement
  | ColorElement
  | EmailElement
  | HiddenElement
  | PasswordElement
  | SubmitElement
  | SelectElement
  | ButtonsElement
  | CheckboxesElement
  | RadiosElement
  | FieldsetElement
  | DetailsElement
  | ContainerElement
  | Textarea
  | T;

// eslint-disable-next-line prettier/prettier
export type FormElement<T = UndefinedType> = SupportedElements<T> &
  BasicElement;
// eslint-disable-next-line prettier/prettier
export type FormElementWithChildren<
  T = UndefinedType,
  C = {}
> = FormElement<T> & ElementWithChildren<C>;
export type FormType<T = UndefinedType> = FormBase<T>;

export interface BaseElementProps {
  element: FormElement;
  attrs: AllHTMLAttributes<any>;
}
export interface OptionsElementProps {
  options: OptionValuesPairs[];
}
// eslint-disable-next-line prettier/prettier
export type FormElementProps<P = unknown> = P &
  BaseElementProps &
  OptionsElementProps;
