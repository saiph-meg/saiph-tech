import React, { FC } from "react";
import cn from "classnames";

import { TextContainerProps } from "./text-container.types";
import { Wrap } from "./text-container.styles";

const TextContainer: FC<TextContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Wrap {...props} className={cn(className, "text-container")}>
      {children}
    </Wrap>
  );
};

export default TextContainer;
