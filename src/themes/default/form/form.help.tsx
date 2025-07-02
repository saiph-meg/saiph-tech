import { AllHTMLAttributes } from "react";
import {
  ElementChildren,
  FormElement,
  FormType,
  UndefinedType
} from "./form.types";
import { Template } from "@4i4/theme-registry";

export function buildHTMLAttributes<T = any>(
  element: FormElement
): AllHTMLAttributes<T> {
  const attributes = {} as AllHTMLAttributes<T>;

  attributes.name = element.name;
  attributes.id = element.id ?? element.name?.replace(/_/g, "-");
  attributes.required = element.required;

  switch (element.type) {
    case "textfield":
      attributes.type = "text";
      attributes.maxLength = element.maxLength;
      attributes.minLength = element.minLength;
      attributes.size = element.size;
      attributes.placeholder = element.placeholder;
      break;

    case "email":
      attributes.type = "email";
      attributes.maxLength = element.maxLength;
      attributes.minLength = element.minLength;
      attributes.size = element.size;
      attributes.placeholder = element.placeholder;
      break;

    case "password":
      attributes.type = "password";
      attributes.maxLength = element.maxLength;
      attributes.minLength = element.minLength;
      attributes.size = element.size;
      attributes.placeholder = element.placeholder;
      break;

    case "number":
      attributes.type = "number";
      attributes.maxLength = element.maxLength;
      attributes.minLength = element.minLength;
      attributes.size = element.size;
      attributes.max = element.max;
      attributes.min = element.min;
      attributes.step = element.step;
      attributes.placeholder = element.placeholder;
      break;

    case "range":
      attributes.type = "range";
      attributes.max = element.max;
      attributes.min = element.min;
      attributes.step = element.step;
      break;

    case "hidden":
      attributes.type = "hidden";
      break;

    case "color":
      attributes.type = "color";
      break;

    case "select":
      attributes.multiple = element.cardinality === -1;
      attributes.placeholder = element.placeholder;
      break;

    case "textarea":
      attributes.maxLength = element.maxLength;
      attributes.cols = element.cols ?? 60;
      attributes.rows = element.rows ?? 5;
      attributes.placeholder = element.placeholder;
      break;

    case "submit":
      attributes.type = "submit";
      attributes.value = element.value as string;
      attributes.name = undefined;
      break;
  }

  return { ...attributes, ...(element.attributes ?? {}) };
}

export function useFormElementTemplateSuggestions<T = {}>(
  element: FormType | FormElement<T>
): [string[], string | undefined] {
  let scope: string | undefined;
  let suggestions = [] as string[];
  let enhancers = [] as string[];
  let attributes = {} as AllHTMLAttributes<any>;

  if ("type" in element) {
    enhancers.push(element.type.replace(/_/g, "-"));
    suggestions.push("form--element");
    if (element.type === "select") {
      attributes.multiple = element.cardinality === -1;
    }
  } else {
    suggestions.push("form");
  }
  if ("name" in element && element.name) {
    enhancers.push(element.name.replace(/_/g, "-"));
  }
  if (element.id) {
    enhancers.push(element.id.replace(/_/g, "-"));
  }

  while (enhancers.length) {
    const enhancer = enhancers.shift();
    const temp = [] as string[];
    suggestions.forEach(template => {
      temp.push(template);
      temp.push(`${template}--${enhancer}`);
    });
    suggestions = temp;
  }

  if (typeof element.template === "string") {
    suggestions.push(element.template);
  } else if (Array.isArray(element.template)) {
    suggestions.push(...element.template);
  } else if (typeof element.template === "object") {
    const { template, context } = element.template;
    if (Array.isArray(template)) {
      suggestions.push(...template);
    } else {
      suggestions.push(template);
    }
    scope = context;
  }

  return [suggestions, scope];
}

export function useFormElementWrapTemplateSuggestions<T = {}>(
  element: FormElement<T>
): [string[], string | undefined] {
  let scope: string | undefined;
  let suggestions = [] as string[];
  let enhancers = [] as string[];
  let attributes = {} as AllHTMLAttributes<any>;

  enhancers.push(element.type.replace(/_/g, "-"));
  suggestions.push("form--control");
  if (element.type === "select") {
    attributes.multiple = element.cardinality === -1;
  }

  if ("name" in element && element.name) {
    enhancers.push(element.name.replace(/_/g, "-"));
  }
  if (element.id) {
    enhancers.push(element.id.replace(/_/g, "-"));
  }

  while (enhancers.length) {
    const enhancer = enhancers.shift();
    const temp = [] as string[];
    suggestions.forEach(template => {
      temp.push(template);
      temp.push(`${template}--${enhancer}`);
    });
    suggestions = temp;
  }

  if (typeof element.template === "string") {
    suggestions.push(element.template);
  } else if (Array.isArray(element.template)) {
    suggestions.push(...element.template);
  } else if (typeof element.template === "object") {
    const { template, context } = element.template;
    if (Array.isArray(template)) {
      suggestions.push(...template);
    } else {
      suggestions.push(template);
    }
    scope = context;
  }

  return [suggestions, scope];
}

export function useFormElementChildren<T = UndefinedType>(
  elements: ElementChildren
) {
  return Object.keys(elements).map(name => {
    const element = elements[name];
    if (!("name" in element) || !element.name) {
      element.name = name;
    }
    const [templates, context] = useFormElementTemplateSuggestions(
      element as FormElement<T>
    );
    const [wrapTemplates, wrapContext] = useFormElementWrapTemplateSuggestions(
      element as FormElement<T>
    );
    const attributes = buildHTMLAttributes(element);

    const props: any = {
      template: templates,
      context: context,
      attrs: attributes,
      element: element
    };

    const wrapProps: any = {
      template: wrapTemplates,
      context: wrapContext,
      attrs: element.wrapAttributes,
      description: element.description,
      label: element.title,
      labelAttrs: {
        htmlFor: attributes.id
      },
      name: element.name,
      prefix: element.prefix,
      suffix: element.suffix,
      element: element
    };

    if ("options" in element) {
      props.options = element.options;
    }

    if ("elements" in element && element?.elements) {
      props.children = useFormElementChildren(element.elements);
    }

    return (
      <Template key={name} {...wrapProps}>
        <Template {...props} />
      </Template>
    );
  });
}

export function getProperties(formElement: any) {
  return Object.keys(formElement)
    .filter(key => /^#\w+$/.test(key))
    .reduce((obj: any, key) => {
      obj[key.substring(1)] = formElement[key];
      return obj;
    }, {});
}

export function getChildren(formElement: any) {
  return Object.keys(formElement)
    .filter(key => /^(?!#)\w+$/.test(key))
    .reduce((obj: any, key) => {
      obj[key] = {
        "#name": key,
        ...formElement[key]
      };
      return obj;
    }, {});
}
