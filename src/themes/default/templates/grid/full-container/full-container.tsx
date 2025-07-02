import React, { FC } from "react";
import cn from "classnames";

import { ContainerProps } from "./full-container.types";
import { Wrap } from "./full-container.styles";

const FullContainer: FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Wrap {...props} className={cn(className, "container")}>
      {children}
    </Wrap>
  );
};

export default FullContainer;
