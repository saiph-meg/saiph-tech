import { FC } from "react";
import {
  Card,
  ConnectedAddress,
  ConnectedName,
  Controls,
  ImageWrap,
  Info,
  Name,
  NoConenctedProfiles,
  ProfileBox,
  Wrap
} from "./widget.styles";
import { Template } from "@4i4/theme-registry";
import Image from "next/image";
import cn from "classnames";

const Profile: FC<any> = ({ account, profiles }) => {
  const main = profiles.find((profile: any) => profile.main);
  const others = profiles.filter((profile: any) => !profile.main);

  return (
    <>
      <Wrap className="xs-12 md-8">
        <Card
          footer={
            <Template
              template="account--profile--footer"
              context="widget"
              profile={main}
              account={account}
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
              <Name>{main?.name ?? ""}</Name>
            </Info>
            <Controls></Controls>
          </ProfileBox>
        </Card>
      </Wrap>
      <Wrap className="xs-12 md-4">
        <Card
          title="Connected profiles"
          className={cn({ "no-results": !others.length })}>
          {others.length > 0 && (
            <table>
              <tbody>
                {others.map((profile: any) => (
                  <tr key={profile.id}>
                    <td className="connected-profile-image">
                      <Image src="/images/profile.jpg" width={50} height={50} />
                    </td>
                    <td>
                      <ConnectedName>{profile.name}</ConnectedName>
                      <ConnectedAddress>
                        {profile.address.address}, {profile.address.city}
                      </ConnectedAddress>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {!others.length && (
            <NoConenctedProfiles>
              The account does not have additional connected profiles
            </NoConenctedProfiles>
          )}
        </Card>
      </Wrap>
    </>
  );
};

export default Profile;
