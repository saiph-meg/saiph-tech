import { FC } from "react";
import {
  Content,
  Description,
  Icon,
  Item,
  Label,
  List,
  MenuItem,
  Title
} from "./menu.styles";
import { Template } from "@4i4/theme-registry";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectPageState } from "@store://slices/pageSlice";
import cn from "classnames";

const CaseMenu: FC<any> = () => {
  const { route, type } = useSelector(selectPageState);

  return (
    <List>
      <Item>
        <Label>Main</Label>
        <List>
          <Item>
            <Link href="/" passHref>
              <MenuItem className={cn({ active: route == "/" })}>
                <Icon>
                  <Template template="home" context="icon" />
                </Icon>
                <Content>
                  <Title>Dashboard</Title>
                  <Description>New alerts, open cases, etc</Description>
                </Content>
              </MenuItem>
            </Link>
          </Item>
          <Item>
            <Link href="/alerts" passHref>
              <MenuItem className={cn({ active: route == "/alerts" })}>
                <Icon>
                  <Template template="alert" context="icon" />
                </Icon>
                <Content>
                  <Title>Alert History</Title>
                  <Description>Check all alerts</Description>
                </Content>
              </MenuItem>
            </Link>
          </Item>
          <Item>
            <Link href="/cases" passHref>
              <MenuItem className={cn({ active: route == "/cases" })}>
                <Icon>
                  <Template template="folder-open" context="icon" />
                </Icon>
                <Content>
                  <Title>Cases</Title>
                  <Description>Active investigations</Description>
                </Content>
              </MenuItem>
            </Link>
          </Item>
          <Item>
            <Link href="/rules" passHref>
              <MenuItem className={cn({ active: route == "/rules" })}>
                <Icon>
                  <Template template="filter" context="icon" />
                </Icon>
                <Content>
                  <Title>Rules</Title>
                  <Description>Rules for the alerts</Description>
                </Content>
              </MenuItem>
            </Link>
          </Item>
          <Item>
            <Link href="/learning" passHref>
              <MenuItem className={cn({ active: route == "/rules" })}>
                <Icon>
                  <Template template="book" context="icon" />
                </Icon>
                <Content>
                  <Title>Knowledgebase</Title>
                  <Description>Latest articles and courses</Description>
                </Content>
              </MenuItem>
            </Link>
          </Item>
        </List>
      </Item>
      {type == "account" && (
        <Item>
          <Label>Account</Label>
          <List>
            <Item>
              <MenuItem>
                <Icon>
                  <Template template="user" context="icon" />
                </Icon>
                <Content>
                  <Title>View</Title>
                  <Description>Detailed view</Description>
                </Content>
              </MenuItem>
            </Item>
            <Item>
              <MenuItem>
                <Icon>
                  <Template template="stats" context="icon" />
                </Icon>
                <Content>
                  <Title>Balance</Title>
                  <Description>Check the balance history</Description>
                </Content>
              </MenuItem>
            </Item>
            <Item>
              <MenuItem>
                <Icon>
                  <Template template="alert" context="icon" />
                </Icon>
                <Content>
                  <Title>Alert History</Title>
                  <Description>All alerts for the account</Description>
                </Content>
              </MenuItem>
            </Item>
          </List>
        </Item>
      )}
    </List>
  );
};

export default CaseMenu;
