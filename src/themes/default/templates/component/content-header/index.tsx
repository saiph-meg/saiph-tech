import { Template } from "@4i4/theme-registry";
import { FC } from "react";
import { Bottom, Breadcrumbs, Title, Top, Wrap } from "./header.styles";
import { useSelector } from "react-redux";
import { selectPageState } from "@store://slices/pageSlice";
import Link from "next/link";

const ContentHeader: FC<any> = () => {
  const { title, breadcrumbs } = useSelector(selectPageState);

  return (
    <Wrap>
      <Top>
        <Title>{title}</Title>
      </Top>
      <Bottom>
        <Breadcrumbs>
          <li>
            <Template template="home" context="icon" />
          </li>
          {breadcrumbs?.map((item, index) => (
            <li key={index}>
              {item.link && <Link href={item.link}>{item.title}</Link>}
              {!item.link && item.title}
            </li>
          ))}
        </Breadcrumbs>
      </Bottom>
    </Wrap>
  );
};

export default ContentHeader;
