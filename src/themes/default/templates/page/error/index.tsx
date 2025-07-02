import { Template } from "@4i4/theme-registry";
import { FC } from "react";
import { Content, Title, Wrap } from "./error.styles";
import Link from "next/link";

const Index: FC<any> = ({ code }) => {
  return (
    <Wrap>
      <Template template="container" context="grid" className="text-center">
        <Title>{code}</Title>
        <Content>
          The page could not be found!
          <br />
          Please go back to the <Link href="/">home page</Link>!
          <br />
          <br />
          Thank you!
        </Content>
      </Template>
    </Wrap>
  );
};

export default Index;
