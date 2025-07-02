import React, { FC } from "react";

import { ColProps } from "./col.types";
import { Wrap } from "./col.styles";

const Col: FC<ColProps> = ({ children, ...props }) => (
  <Wrap {...props}>{children}</Wrap>
);

export default Col;
