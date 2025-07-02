import { FC } from "react";
import { Body, Card, Footer, Head, Icon, Title, Wrap } from "./widget.styles";
import { Template } from "@4i4/theme-registry";
import Link from "next/link";

const Profile: FC<any> = ({ profile }) => {
  return (
    <Wrap>
      <Card>
        <Head>
          <Title className="h5">
            Last Access
            <small>-</small>
          </Title>
          <Icon>
            <Template template="wifi" context="icon" />
          </Icon>
        </Head>
        <Body>Last updated: -</Body>
        <Footer>
          <Link href={`/profile/${profile?.id}/access`}>
            <a className="btn btn-primary btn-block">Check previous access</a>
          </Link>
        </Footer>
      </Card>
      <Card>
        <Head>
          <Title className="h5">
            Branch
            <small>-</small>
          </Title>
          <Icon>
            <Template template="bank" context="icon" />
          </Icon>
        </Head>
        <Body>Last visit: -</Body>
        <Footer>
          <Link href={`/profile/${profile?.id}/branch`}>
            <a className="btn btn-primary btn-block">See more</a>
          </Link>
        </Footer>
      </Card>
      <Card>
        <Head>
          <Title className="h5">
            Telephone
            <small>{profile?.telephone ?? "-"}</small>
          </Title>
          <Icon>
            <Template template="phone-alt" context="icon" />
          </Icon>
        </Head>
        <Body>Last updated: -</Body>
        <Footer>
          <Link href={`call:${profile?.telephone}`}>
            <a className="btn btn-primary btn-block">Call</a>
          </Link>
        </Footer>
      </Card>
      <Card>
        <Head>
          <Title className="h5">
            Email
            <small>{profile?.mail ?? "-"}</small>
          </Title>
          <Icon>
            <Template template="envelope" context="icon" />
          </Icon>
        </Head>
        <Body>Last updated: -</Body>
        <Footer>
          <Link href={`mailto:${profile?.mail}`}>
            <a className="btn btn-primary btn-block">Send a message</a>
          </Link>
        </Footer>
      </Card>
    </Wrap>
  );
};

export default Profile;
