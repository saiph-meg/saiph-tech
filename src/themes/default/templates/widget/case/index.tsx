import { FC, useCallback, useEffect, useState } from "react";
import TimeAgo from "react-timeago";
import {
  Card,
  Footer,
  Headline,
  Status,
  Time,
  TimeValue,
  Title,
  Wrap
} from "./widget.styles";
import { GenericObject } from "~/lib/default.types";
import Link from "next/link";
import { Template } from "@4i4/theme-registry";

const Widget: FC<any> = () => {
  const [cases, setCases] = useState<GenericObject[]>([]);

  useEffect(() => {
    fetch("/api/cases/active")
      .then(res => res.json())
      .then(setCases);
  }, []);

  cases.sort((a, b) => (a.date < b.date ? 1 : -1));

  const formatter = useCallback(
    (value: number, unit: string, suffix: string) => {
      return (
        <Time>
          <TimeValue>{value}</TimeValue>
          {unit} {suffix == "from now" ? "left" : suffix}
        </Time>
      );
    },
    []
  );

  const buildFooter = (item: any) => {
    const date: any = new Date(item.date);
    date.setDate(date.getDate() + 7);
    const now: any = new Date();
    const diffDays = Math.ceil(Math.abs(date - now) / (1000 * 60 * 60 * 24));
    const status: string =
      diffDays > 5 ? "ok" : diffDays > 2 ? "warning" : "danger";
    return (
      <Footer>
        <div className={status}>
          <Template template="bell" context="icon" />
          <TimeAgo date={date} formatter={formatter} />
        </div>
        <Status className={status}>{status}</Status>
      </Footer>
    );
  };

  return (
    <Wrap>
      <Headline>Active cases</Headline>
      {cases.map((item, index) => {
        return (
          <Card footer={buildFooter(item)} key={index}>
            <Title>
              <Link href={`/case/${item.id}`}>
                <a>Case {item.id}</a>
              </Link>
            </Title>
            <p>{item.reason?.substring(0, 150)}...</p>
          </Card>
        );
      })}
      <Card>
        <div className="text-center">
          <Link href="/cases">
            <a className="btn btn-primary-link">
              <strong>Check all cases</strong>
            </a>
          </Link>
        </div>
      </Card>
    </Wrap>
  );
};

export default Widget;
