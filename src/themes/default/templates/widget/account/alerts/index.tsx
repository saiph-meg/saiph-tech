import { FC, useCallback, useEffect, useState } from "react";
import TimeAgo from "react-timeago";
import { Card, Status, Time, TimeValue, Title, Wrap } from "./widget.styles";
import { GenericObject } from "~/lib/default.types";
import Link from "next/link";

const Widget: FC<any> = ({ account }) => {
  const [alerts, setAlerts] = useState<GenericObject[]>([]);

  useEffect(() => {
    fetch(`/api/account/${account.id}/alerts`)
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

  const buildFooter = (
    <div className="text-center">
      <Link href={`/account/${account.id}/alerts`}>
        <a className="btn btn-primary-link">
          <strong>Check all alerts</strong>
        </a>
      </Link>
    </div>
  );

  return (
    <Wrap>
      <Card title="Alert history" footer={buildFooter}>
        <table>
          <tbody>
            {alerts.map((alert, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">
                    <TimeAgo date={alert.date} formatter={formatter} />
                  </td>
                  <td>
                    <Title>
                      <Link href={`/account/${alert.account}`}>
                        {alert.title}
                      </Link>
                    </Title>
                    <Status className={alert.status}>{alert.status}</Status>
                  </td>
                  <td>{alert.description?.substring(0, 100)}...</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </Wrap>
  );
};

export default Widget;
