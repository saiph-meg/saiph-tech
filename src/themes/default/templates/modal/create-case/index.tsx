import React, { FC, useEffect, useRef, useState } from "react";
import { NextDrupalModal as Modal } from "@ffw/next-drupal-components";

import { Container, Label, Wrap } from "./modal.styles";
import { GenericObject } from "~/lib/default.types";
import { FormType } from "@theme://default/form/form.types";
import { FormProvider, useForm } from "react-hook-form";
import FormComponent from "@theme://default/form/form";
import Router from "next/router";

const ContactModal: FC<any> = ({ account, onClose }) => {
  const methods = useForm();
  const container = useRef<HTMLDivElement>(null);

  const [alerts, setAlerts] = useState<GenericObject[]>([]);

  useEffect(() => {
    fetch(`/api/account/${account.id}/alerts`)
      .then(res => res.json())
      .then(setAlerts);
  }, []);

  alerts.sort((a, b) => (a.date < b.date ? 1 : -1));

  const close = () => {
    if (!container.current) return;

    container.current.classList.add("closing");

    setTimeout(() => {
      onClose();
    }, 300);
  };

  const onSubmit = async () => {
    container?.current?.querySelector("form")?.classList.add("disabled");
    setTimeout(async () => {
      await Router.push(`/case/${account.id}`);
    }, 1000);
  };

  // @ts-ignore
  const form = {
    method: "POST",
    // @ts-ignore
    noValidate: true,
    onSubmit: methods.handleSubmit(onSubmit),
    elements: {
      alerts: {
        title: "Alerts",
        type: "checkboxes",
        options: alerts.map(alert => ({
          value: alert.id.toString(),
          label: (
            <Label>
              <h6>{alert.title}</h6>
              <small>{alert.description?.substring(0, 150)}...</small>
            </Label>
          )
        })),
        required: true
      },
      message: {
        placeholder: "Reason",
        require: true,
        type: "textarea"
      },
      submit: {
        type: "submit",
        value: "Create",
        attributes: {
          className: "btn btn-primary btn-block"
        }
      }
    }
  } as FormType;

  return (
    <Modal onEsc={close} onClickOutside={close} enableOutsideTab={false}>
      <Wrap ref={container}>
        <Container title="Create a case">
          <FormProvider {...methods}>
            <FormComponent form={form} />
          </FormProvider>
        </Container>
      </Wrap>
    </Modal>
  );
};

export default ContactModal;
