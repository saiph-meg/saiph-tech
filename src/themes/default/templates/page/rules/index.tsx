import { FC, useEffect, useState } from "react";
import { Wrap } from "./alerts.styles";
import { GenericObject } from "~/lib/default.types";
import { Title } from "@theme://default/templates/widget/alerts/widget.styles";
import Link from "next/link";
import { Template } from "@4i4/theme-registry";

const Home: FC<any> = () => {
  const [rules, setRules] = useState<GenericObject[]>([]);

  useEffect(() => {
    fetch("/api/rules/all")
      .then(res => res.json())
      .then(setRules);
  }, []);

  return (
    <>
      <Template template="content-header" context="component" />
      <Wrap>
        <Template template="card" context="component">
          <table>
            <tbody>
              {rules.map((rule, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <Title>
                        <Link href={`/rules/${rule.id}`}>{rule.title}</Link>
                      </Title>
                    </td>
                    <td>{rule.description?.substring(0, 150)}...</td>
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
