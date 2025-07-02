import React, { FC } from "react";
import cn from "classnames";

import { ContainerProps } from "./container.types";
import { Wrap } from "./container.styles";

const Container: FC<ContainerProps> = ({ children, className, ...props }) => (
  <Wrap {...props} className={cn(className, "container")}>
    {children}
  </Wrap>
);

export default Container;
