import { Grid, Container, useTheme, useMediaQuery } from "@material-ui/core";
import React from "react";
import { SEO, Tabs } from "../../components/layout";

import { APP } from "../../config/index";
import AccountView from "./settings/AccountView";
import PreferenceView from "./settings/PreferenceView";

import { RT_ACCOUNT, RT_PREFERENCES } from "../../config/routes";
import { useParams } from "react-router-dom";

export default function SettingsView() {
  const params = useParams();
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isMobile = useMediaQuery('(max-width:600px)')
  const tabs = React.useMemo(
    () => [
      {
        label: "Account",
        to: RT_ACCOUNT,
        parent: "settings",
        view: <AccountView />,
      },
      {
        label: "Preference",
        to: RT_PREFERENCES,
        parent: "settings",
        view: <PreferenceView />,
      },
    ],
    [params]
  );
console.log("isMobile", isMobile)
  return (
    <Container>
      <SEO title={APP.title} description={APP.description} />
      <Tabs tabs={tabs} orientation={isMobile ? "horizontal" : "vertical"} hide={false} />
      
    </Container>
  );
}
