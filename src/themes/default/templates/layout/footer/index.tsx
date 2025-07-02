import { FC } from "react";
import { Wrap } from "./footer.styles";

const Header: FC = () => {
  return (
    <Wrap>
      <div>© {new Date().getFullYear()} Saiph Tech</div>
    </Wrap>
  );
};

export default Header;
