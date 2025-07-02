import { FC, PropsWithChildren } from "react";
import { Bar, Progress, Status, Title, Wrap } from "./bar.styles";

const Index: FC<
  PropsWithChildren<{ title: string; total: number; progress: number }>
> = ({ title, total, progress, ...props }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      <Bar title={`${progress}/${total}`}>
        <Progress
          style={{ width: `${(progress * 100) / total}%` }}
          {...props}
        />
      </Bar>
      <Status>
        <div>0</div>
        <div>{total}</div>
      </Status>
    </Wrap>
  );
};

export default Index;
