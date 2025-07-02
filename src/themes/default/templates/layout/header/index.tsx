import { FC } from "react";
import { Account, Logo, Wrap } from "./header.styles";
import Link from "next/link";
import Image from "next/image";
import useUser from "@lib://useUser";
import { Template } from "@4i4/theme-registry";

const Header: FC = () => {
  const { user } = useUser();

  return (
    <Wrap>
      <Logo>
        <Image src="/logo.svg" width={40} height={40} />
        <Link href="/">Saiph Tech</Link>
      </Logo>
      {user?.isLoggedIn && (
        <Account>
          <Image src="/images/profile.jpg" width={30} height={30} />
          {user?.profile?.name}
          <Link href="/api/user/logout">
            <a title="logout">
              <Template template="lock" context="icon" />
            </a>
          </Link>
        </Account>
      )}
    </Wrap>
  );
};

export default Header;
