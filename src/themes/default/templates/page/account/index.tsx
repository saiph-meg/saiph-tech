import { FC, useEffect, useState } from "react";
import { Template } from "@4i4/theme-registry";
import { GenericObject } from "~/lib/default.types";

const Home: FC<{ account: GenericObject }> = ({ account }) => {
  const [profiles, setProfiles] = useState<GenericObject[]>([]);

  useEffect(() => {
    fetch(`/api/account/${account.id}/profiles`)
      .then(res => res.json())
      .then(setProfiles);
  }, []);

  const main = profiles.find((profile: any) => profile.main);

  return (
    <Template template="dashboard" context="component">
      <Template
        template="account--profile"
        context="widget"
        profiles={profiles}
        account={account}
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
      <Template template="account--sample" context="widget" title="Widget 3" />
      <Template template="account--tech" context="widget" profile={main} />
      <Template template="rules" context="widget" />
      <Template template="account--alerts" context="widget" account={account} />
      <Template template="account--action" context="widget" account={account} />
    </Template>
  );
};

export default Home;
