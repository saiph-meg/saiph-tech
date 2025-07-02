import { FC, useRef } from "react";
import { FormType } from "@theme://default/form/form.types";
import FormComponent from "@theme://default/form/form";
import { FieldError, FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Template } from "@4i4/theme-registry";
import Image from "next/image";
import { Container, Error } from "./login.styles";
import Link from "next/link";
import Router from "next/router";
import { ErrorMessage } from "@hookform/error-message";

type FormValues = {
  email: string;
  password: string;
};

const Login: FC<any> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
  });

  const methods = useForm<FormValues>({
    resolver: yupResolver(schema)
  });

  const { errors } = methods.formState;

  const onSubmit = async (
    values: FormValues & { root: { serverError: FieldError } }
  ) => {
    ref?.current?.querySelector("form")?.classList.add("disabled");
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" }
    });

    const body = await response.json();
    if (response.status >= 400) {
      methods.setError("root.serverError", {
        // @ts-ignore
        type: response.status,
        message: body.message
      });
      ref?.current?.querySelector("form")?.classList.remove("disabled");
    } else {
      Router.push(`/`);
    }
  };

  // @ts-ignore
  const form = {
    method: "POST",
    // @ts-ignore
    noValidate: true,
    // @ts-ignore
    onSubmit: methods.handleSubmit(onSubmit),
    elements: {
      email: {
        title: "Email",
        type: "textfield",
        placeholder: "email" as string,
        required: true,
        prefix: <Template template="user" context="icon" />
      },
      password: {
        title: "Password",
        type: "password",
        placeholder: "password" as string,
        required: true,
        prefix: <Template template="lock" context="icon" />
      },
      login: {
        type: "submit",
        value: "login" as string,
        attributes: {
          className: "btn btn-primary btn-block"
        }
      }
    }
  } as FormType;

  return (
    <div ref={ref}>
      <Template template="card" context="component">
        <Container>
          <Image src="/logo.svg" width={100} height={100} />
          <h2 className="h4">Login</h2>
          <p>Enter your credentials below</p>
        </Container>
        <FormProvider {...methods}>
          <ErrorMessage
            // @ts-ignore
            name="root.serverError"
            errors={errors}
            render={({ message }: any) => <Error>{message}</Error>}
          />
          <FormComponent form={form} />
        </FormProvider>
        <div className="text-center">
          <br />
          <Link href="/" className="btn btn-primary-link">
            Forgot password?
          </Link>
        </div>
      </Template>
    </div>
  );
};

export default Login;
