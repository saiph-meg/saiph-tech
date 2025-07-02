import {
  ElementChildren,
  FormElementWithChildren,
  FormType
} from "./form.types";
import { getChildren, getProperties } from "./form.help";
import { NextDrupalDynamicComponent as DC } from "@ffw/next-drupal-components";
import { FC } from "react";
import FormComponent from "./form";

function normalize<T = { type: undefined }>(elements: any): ElementChildren<T> {
  const temp: any = {};
  Object.keys(elements ?? {}).forEach(name => {
    temp[name] = getProperties(elements[name]);
    const children = getChildren(elements[name]);
    if (children && Object.keys(children).length) {
      temp[name].elements = normalize(children);
    }
    if (temp[name].description) {
      temp[name].description = <DC {...temp[name].description} />;
    }
    if (temp[name].title_display === "none") {
      temp[name].title = undefined;
    }
    if (temp[name].multiple) {
      temp[name].cardinality = -1;
    }
  });
  return temp;
}

interface WebFormWizard {
  type: "webform_wizard";
}
interface WebFormWizardPage {
  type: "webform_wizard_page";
}

const Webform: FC<any> = ({ entity, id, onSuccess, ...props }) => {
  const { elements, drupal_internal__id, settings } = entity?.attributes ?? {};
  const form: FormType<WebFormWizard | WebFormWizardPage> = {
    id: id ?? "webform",
    // @ts-ignore
    webform_id: drupal_internal__id,
    elements: normalize<WebFormWizard | WebFormWizardPage>(elements)
  };

  form.elements.webform_id = {
    type: "hidden",
    value: drupal_internal__id
  };

  const wizard = Object.keys(form.elements).reduce((aggr, name) => {
    if (form.elements[name].type === "webform_wizard_page") {
      aggr[name] = form.elements[name];
      delete form.elements[name];
    }
    return aggr;
  }, {} as ElementChildren<WebFormWizard | WebFormWizardPage>);

  if (Object.keys(wizard).length) {
    const webformWizard: FormElementWithChildren<
      WebFormWizard | WebFormWizardPage,
      WebFormWizardPage
    > = {
      type: "webform_wizard",
      elements: wizard
    };
    form.elements = { webform_wizard: webformWizard, ...form.elements };
  }
  form.settings = settings;
  // @ts-ignore
  form.props = props;
  return <FormComponent form={form} onSuccess={onSuccess} />;
};

export default Webform;
