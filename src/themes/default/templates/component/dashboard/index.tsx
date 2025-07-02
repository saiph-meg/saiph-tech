import { FC, PropsWithChildren } from "react";
import { Wrap } from "./dashboard.styles";
import { Template } from "@4i4/theme-registry";

const Dashboard: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <>
      <Template template="content-header" context="component" />
      <Wrap>{children}</Wrap>
    </>
  );
};

export default Dashboard;
