import React, { FC } from "react";

import { RowProps } from "./row.types";
import { Wrap } from "./row.styles";

const Row: FC<RowProps> = ({ children, ...props }) => (
  <Wrap {...props}>{children}</Wrap>
);

export default Row;
