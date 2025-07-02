import Registry from "@4i4/registry";

import defaultTheme from "@theme://default/registry";

const themes = new Registry();

themes.set("default", defaultTheme);

export default themes;
