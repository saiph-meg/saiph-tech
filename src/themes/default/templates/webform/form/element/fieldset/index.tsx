import { FC } from "react";

const Textfield: FC<any> = ({ children }) => {
  return (
    <fieldset>
      <legend>fieldset</legend>
      <div>{children}</div>
    </fieldset>
  );
};

export default Textfield;
