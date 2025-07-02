import { FC, useEffect, useState } from "react";
import { Card, Description, Rule, Title, Wrap } from "./widget.styles";
import { GenericObject } from "~/lib/default.types";
import Link from "next/link";
import { Template } from "@4i4/theme-registry";

const Widget: FC<any> = () => {
  const [rules, setRules] = useState<GenericObject[]>([]);

  useEffect(() => {
    fetch("/api/rules/random")
      .then(res => res.json())
      .then(setRules);
  }, []);

  const buildFooter = (
    <div className="text-center">
      <Link href="/rules">
        <a className="btn btn-primary-link">
          <strong>See more</strong>
        </a>
      </Link>
    </div>
  );

  return (
    <Wrap>
      <Card title="Rules" footer={buildFooter}>
        <Template template="row" context="grid">
          {rules.map((rule, index) => {
            return (
              <Template
                template="col"
                context="grid"
                key={index}
                className="xs-12 md-6">
                <Rule>
                  <Title>
                    <Link href={`/rules/${rule.id}`}>{rule.title}</Link>
                  </Title>
                  <Description>
                    {rule.description?.substring(0, 150)}...
                  </Description>
                </Rule>
              </Template>
            );
          })}
        </Template>
      </Card>
    </Wrap>
  );
};

export default Widget;
