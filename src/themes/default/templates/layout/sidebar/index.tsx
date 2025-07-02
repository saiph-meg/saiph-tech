import { FC } from "react";
import { Wrap } from "./sidebar.styles";
import { Template } from "@4i4/theme-registry";

const Sidebar: FC<any> = () => {
  return (
    <Wrap>
      <Template template="main" context="menu" />
    </Wrap>
  );
};

export default Sidebar;
