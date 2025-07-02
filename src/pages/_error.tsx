import { NextPage } from "next";
import { Template } from "@4i4/theme-registry";
import { withServerSidePropsStorage } from "~/storage";

const Login: NextPage = ({ code }: any) => {
  return (
    <Template template="login" context="layout">
      <Template template="error" context="page" code={code} />
    </Template>
  );
};

export const getServerSideProps = withServerSidePropsStorage(context => {
  return {
    props: {
      code: context.res.statusCode
    }
  };
});

export default Login;
