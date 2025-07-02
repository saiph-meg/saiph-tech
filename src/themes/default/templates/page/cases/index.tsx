import { FC, useEffect, useState } from "react";
import { Filters, Wrap } from "./cases.styles";
import { GenericObject } from "~/lib/default.types";
import { Title } from "@theme://default/templates/widget/alerts/widget.styles";
import Link from "next/link";
import { Template } from "@4i4/theme-registry";
import { FormType } from "@theme://default/form/form.types";
import { FormProvider, useForm } from "react-hook-form";
import FormComponent from "@theme://default/form/form";

const Home: FC<any> = () => {
  const methods = useForm();
  const [cases, setCases] = useState<GenericObject[]>([]);

  useEffect(() => {
    fetch("/api/cases/all")
      .then(res => res.json())
      .then(setCases);
  }, []);

  cases.sort((a, b) => (a.date < b.date ? 1 : -1));

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
      account: {
        title: "Profile",
        type: "textfield",
        placeholder: "Profile",
        required: true,
        prefix: <Template template="user" context="icon" />
      },
      status: {
        title: "Status",
        type: "select",
        placeholder: "All",
        options: [
          { value: true, label: "Active" },
          { value: false, label: "Resolved" }
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
              {cases.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="text-center">{item.date}</td>
                    <td>
                      <Title>
                        <Link href={`/case/${item.id}`}>
                          <a>Case {item.id}</a>
                        </Link>
                      </Title>
                    </td>
                    <td>{item.reason?.substring(0, 150)}...</td>
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
