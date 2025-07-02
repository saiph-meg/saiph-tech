import { FC, useEffect, useState } from "react";
import { Icon, Wrap } from "./cases.styles";
import { GenericObject } from "~/lib/default.types";
import { Template } from "@4i4/theme-registry";

const Home: FC<any> = () => {
  const [, setCases] = useState<GenericObject[]>([]);

  useEffect(() => {
    fetch("/api/courses/all")
      .then(res => res.json())
      .then(setCases);
  }, []);

  return (
    <>
      <Template template="content-header" context="component" />
      <Wrap>
        <Template template="row" context="grid">
          <Template template="col" context="grid" className="xs-12 md-4">
            <Template
              template="card"
              context="component"
              className="text-center">
              <Icon className="bg-success-light-80">
                <Template template="book" context="icon" />
              </Icon>
              <h5>Knowledge Base</h5>
              <p>
                Aliquam quam est, posuere in nisl non, aliquam ullamcorper
                mauris. In hac habitasse platea dictumst.
              </p>
              <button className="btn btn-success">Browse courses</button>
            </Template>
          </Template>
          <Template template="col" context="grid" className="xs-12 md-4">
            <Template
              template="card"
              context="component"
              className="text-center">
              <Icon className="bg-warning-light-80">
                <Template template="headset" context="icon" />
              </Icon>
              <h5>Support</h5>
              <p>
                Aliquam quam est, posuere in nisl non, aliquam ullamcorper
                mauris. In hac habitasse platea dictumst.
              </p>
              <button className="btn btn-warning">Open a ticket</button>
            </Template>
          </Template>
          <Template template="col" context="grid" className="xs-12 md-4">
            <Template
              template="card"
              context="component"
              className="text-center">
              <Icon className="bg-info-light-80">
                <Template template="newspaper" context="icon" />
              </Icon>
              <h5>Articles and news</h5>
              <p>
                Aliquam quam est, posuere in nisl non, aliquam ullamcorper
                mauris. In hac habitasse platea dictumst.
              </p>
              <button className="btn btn-info">Browse news</button>
            </Template>
          </Template>
        </Template>
      </Wrap>
    </>
  );
};

export default Home;
