import { FC, useEffect, useState } from "react";
// import TimeAgo from "react-timeago";
import {
  Card,
  // Footer,
  Headline,
  // Status,
  // Time,
  // TimeValue,
  Wrap
} from "./widget.styles";
import { GenericObject } from "~/lib/default.types";
import { Template } from "@4i4/theme-registry";

const Widget: FC<any> = () => {
  const [cases, setCases] = useState<GenericObject[]>([]);

  useEffect(() => {
    fetch("/api/cases/active")
      .then(res => res.json())
      .then(setCases);
  }, []);

  cases.sort((a, b) => (a.date < b.date ? 1 : -1));

  // const formatter = useCallback(
  //   (value: number, unit: string, suffix: string) => {
  //     return (
  //       <Time>
  //         <TimeValue>{value}</TimeValue>
  //         {unit} {suffix == "from now" ? "left" : suffix}
  //       </Time>
  //     );
  //   },
  //   []
  // );

  // const buildFooter = (item: any) => {
  //   const date: any = new Date(item.date);
  //   date.setDate(date.getDate() + 7);
  //   const now: any = new Date();
  //   const diffDays = Math.ceil(Math.abs(date - now) / (1000 * 60 * 60 * 24));
  //   const status: string =
  //     diffDays > 5 ? "ok" : diffDays > 2 ? "warning" : "danger";
  //   return (
  //     <Footer>
  //       <div className={status}>
  //         <Template template="bell" context="icon" />
  //         <TimeAgo date={date} formatter={formatter} />
  //       </div>
  //       <Status className={status}>{status}</Status>
  //     </Footer>
  //   );
  // };

  return (
    <Wrap>
      <Headline>Activities</Headline>
      <Card title="Weekly Quests">
        <Template
          template="progress-bar"
          context="component"
          title="Integer vulputate"
          total={10}
          progress={3}
          className="bg-primary"
        />
        <Template
          template="progress-bar"
          context="component"
          title="Nam sed"
          total={15}
          progress={10}
          className="bg-success"
        />
        <Template
          template="progress-bar"
          context="component"
          title="Quisque ultricies"
          total={8}
          progress={4}
          className="bg-warning"
        />
      </Card>
      <Template template="row" context="grid">
        <Template template="col" context="grid" className="xs-12 md-6">
          <Card>
            <Template
              template="progress-pie"
              context="component"
              title="Quisque ultricies"
              total={8}
              progress={4}
              className="bg-primary">
              <Template template="alert" context="icon" />
            </Template>
            <br />
            <div className="text-center">
              <h5>50%</h5>
              <p>Alert conversions</p>
            </div>
          </Card>
        </Template>
        <Template template="col" context="grid" className="xs-12 md-6">
          <Card>
            <Template
              template="progress-pie"
              context="component"
              title="Quisque ultricies"
              total={10}
              progress={8}
              className="bg-primary">
              <Template template="folder-open" context="icon" />
            </Template>
            <br />
            <div className="text-center">
              <h5>82%</h5>
              <p>Closed cases</p>
            </div>
          </Card>
        </Template>
      </Template>
      <Card title="Learn more">
        <table>
          <tbody>
            <tr>
              <td>
                <Template template="file" context="icon" />
              </td>
              <td>
                <p>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#">
                    <strong>Ut mollis. </strong>
                  </a>
                </p>
                <p>
                  Vestibulum feugiat, nulla ut vehicula dignissim, sem ex
                  molestie urna, sed elementum massa sapien et sem.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </Wrap>
  );
};

export default Widget;
