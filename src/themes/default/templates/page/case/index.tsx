import { FC, useEffect, useState } from "react";
import { Template } from "@4i4/theme-registry";
import { GenericObject } from "~/lib/default.types";

const Home: FC<{ case: GenericObject }> = ({ case: _case }) => {
  const [profile, setProfile] = useState<GenericObject[]>([]);
  const [accounts, setAccounts] = useState<GenericObject[]>([]);

  useEffect(() => {
    fetch(`/api/profile/${_case.profile}`)
      .then(res => res.json())
      .then(setProfile);
    fetch(`/api/profile/${_case.profile}/accounts`)
      .then(res => res.json())
      .then(setAccounts);
  }, []);

  return (
    <Template template="dashboard" context="component">
      <Template
        template="case--profile"
        context="widget"
        profile={profile}
        case={_case}
        accounts={accounts}
      />
      <Template
        template="account--sample"
        context="widget"
        title="Widget 2.A"
      />
      <Template
        template="account--sample"
        context="widget"
        title="Widget 2.B"
      />
      <Template template="case--sample" context="widget" title="Widget 3" />
      <Template template="case--tech" context="widget" profile={profile} />
      <Template template="rules" context="widget" />
      <Template template="case--alerts" context="widget" account={_case} />
      <Template template="case--action" context="widget" account={_case} />
    </Template>
  );
};

export default Home;
