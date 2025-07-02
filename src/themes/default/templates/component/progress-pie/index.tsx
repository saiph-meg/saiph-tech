import { FC, PropsWithChildren } from "react";
import { Wrap } from "./pie.styles";

const Index: FC<PropsWithChildren<{ total: number; progress: number }>> = ({
  children,
  total,
  progress
}) => {
  return <Wrap progress={(progress * 100) / total}>{children}</Wrap>;
};

export default Index;
