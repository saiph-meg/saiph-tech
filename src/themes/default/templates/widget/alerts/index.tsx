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

const Widget: FC<any> = () => {
  const [alerts, setAlerts] = useState<GenericObject[]>([]);

  useEffect(() => {
    fetch("/api/alerts/new")
      .then(res => res.json())
      .then(setAlerts);
  }, []);

  alerts.sort((a, b) => (a.date < b.date ? 1 : -1));

  const formatter = useCallback(
    (value: number, unit: string, suffix: string) => {
      return (
        <Time>
          <TimeValue>{value}</TimeValue>
          {unit} {suffix}
        </Time>
      );
    },
    []
  );

  const buildFooter = (alert: any) => (
    <Footer>
      <TimeAgo date={alert.date} formatter={formatter} />
      <Status className={alert.status}>{alert.status}</Status>
    </Footer>
  );

  return (
    <Wrap>
      <Headline>Alerts</Headline>
      {alerts.map((alert, index) => {
        return (
          <Card footer={buildFooter(alert)} key={index}>
            <Title>
              <Link href={`/account/${alert.account}`}>{alert.title}</Link>
            </Title>
            <p>{alert.description?.substring(0, 150)}...</p>
          </Card>
        );
      })}
      <Card>
        <div className="text-center">
          <Link href="/alerts">
            <a className="btn btn-primary-link">
              <strong>Check all alerts</strong>
            </a>
          </Link>
        </div>
      </Card>
    </Wrap>
  );
};

export default Widget;
