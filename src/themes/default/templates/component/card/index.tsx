import { FC, PropsWithChildren } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "./card.styles";

const Index: FC<
  PropsWithChildren<{ title?: string; footer?: JSX.Element | string }>
> = ({ children, title, footer, ...props }) => {
  return (
    <Card {...props}>
      {title && (
        <CardHeader>{title && <h2 className="h5">{title}</h2>}</CardHeader>
      )}
      <CardBody className="card-body">{children}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default Index;
