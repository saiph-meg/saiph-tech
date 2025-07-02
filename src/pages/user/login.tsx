import { NextPage } from "next";
import { Template } from "@4i4/theme-registry";
import { withIronSessionSsr } from "iron-session/next";

import { sessionOptions } from "@lib://session";

const Login: NextPage = () => {
  return (
    <Template template="login" context="layout">
      <Template template="login" context="page" />
    </Template>
  );
};

// @ts-ignore
export const getServerSideProps = withIronSessionSsr(async ({ req, res }) => {
  const user = req.session.user;

  if (user) {
    res.setHeader("location", "/");
    res.statusCode = 302;
    res.end();
    return;
  }

  return {
    props: {}
  };
}, sessionOptions);

export default Login;
