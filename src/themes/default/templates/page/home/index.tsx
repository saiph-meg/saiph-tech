import { FC } from "react";
import { Template } from "@4i4/theme-registry";

const Home: FC<any> = () => {
  return (
    <Template template="dashboard" context="component">
      <Template template="alerts" context="widget" />
      <Template template="case" context="widget" />
      <Template template="activities" context="widget" />
    </Template>
  );
};

export default Home;
