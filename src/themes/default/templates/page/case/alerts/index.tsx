import { FC, useEffect, useState } from "react";
import { Filters, Wrap } from "./alerts.styles";
import { GenericObject } from "~/lib/default.types";
import {
  Status,
  Title
} from "@theme://default/templates/widget/alerts/widget.styles";
import Link from "next/link";
import { Template } from "@4i4/theme-registry";
import { FormType } from "@theme://default/form/form.types";
import { FormProvider, useForm } from "react-hook-form";
import FormComponent from "@theme://default/form/form";

const Home: FC<any> = ({ account }) => {
  const methods = useForm();
  const [alerts, setAlerts] = useState<GenericObject[]>([]);

  useEffect(() => {
    fetch(`/api/account/${account.id}/alerts`)
      .then(res => res.json())
      .then(setAlerts);
  }, []);

  alerts.sort((a, b) => (a.date < b.date ? 1 : -1));

  // @ts-ignore
  const form = {
    method: "POST",
    // @ts-ignore
    noValidate: true,
    elements: {
      date: {
        title: "Date",
        type: "textfield",
        placeholder: new Date().toDateString() as string,
        required: true,
        prefix: <Template template="calendar" context="icon" />
      },
      status: {
        title: "Status",
        type: "select",
        placeholder: "All",
        options: [
          { value: "open", label: "Open" },
          { value: "processing", label: "Processing" },
          { value: "closed", label: "Closed" }
        ],
        required: true
      }
    }
  } as FormType;

  return (
    <>
      <Template template="content-header" context="component" />
      <Wrap>
        <Filters>
          <FormProvider {...methods}>
            <FormComponent form={form} />
          </FormProvider>
        </Filters>
        <Template template="card" context="component">
          <table>
            <tbody>
              {alerts.map((alert, index) => {
                return (
                  <tr key={index}>
                    <td className="text-center">{alert.date}</td>
                    <td>
                      <Title>
                        <Link href={`/account/${alert.account}`}>
                          {alert.title}
                        </Link>
                      </Title>
                      <Status className={alert.status}>{alert.status}</Status>
                    </td>
                    <td>{alert.description?.substring(0, 150)}...</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Template>
      </Wrap>
    </>
  );
};

export default Home;
