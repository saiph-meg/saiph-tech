import { FC } from "react";
import {
  Card,
  Controls,
  Description,
  ImageWrap,
  Info,
  Name,
  ProfileBox,
  Wrap
} from "./widget.styles";
import { Template } from "@4i4/theme-registry";
import Image from "next/image";
import Link from "next/link";

const Profile: FC<any> = ({ case: _case, profile, accounts }) => {
  return (
    <>
      <Wrap className="xs-12 md-8">
        <Card
          footer={
            <Template
              template="case--profile--footer"
              context="widget"
              profile={profile}
              case={_case}
            />
          }>
          <ProfileBox>
            <ImageWrap>
              <Image
                src="/images/profile.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </ImageWrap>
            <Info>
              <Name>{profile?.name ?? ""}</Name>
              <Description>{_case?.reason}</Description>
            </Info>
            <Controls></Controls>
          </ProfileBox>
        </Card>
      </Wrap>
      <Wrap className="xs-12 md-4">
        <Card title="Accounts">
          <table>
            <thead>
              <tr>
                <th style={{ width: 40 }}>ID</th>
                <th className="text-left">NAME</th>
                <th className="text-left">BALANCE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {accounts?.map((account: any) => (
                <tr key={account.id}>
                  <td className="text-center">{account.id}</td>
                  <td>{account.title}</td>
                  <td>-</td>
                  <td className="right">
                    <Link href={`/account/${account.id}`}>view</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </Wrap>
    </>
  );
};

export default Profile;
