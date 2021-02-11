import React, { useState } from "react";
import {
  Layout,
  Content,
  Footer,
  ProfileHeader,
} from "../../components/layout";
import Tabs from "../../components/layout/Navigation/Tabs/Tabs";
import {
  RT_RESUME,
  RT_SNIPPETS,
  RT_FRIENDS,
  RT_SETTINGS,
  RT_PROJECTS,
} from "../../config/routes";
import FriendsView from "./FriendsView";
import SettingsView from "./SettingsView";
import SnippetsView from "./SnippetsView";
import ProjectsView from "./ProjectsView";
import ResumeView from "./ResumeView";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";

export default function ProfileLayout({ children }) {
  const [hide] = useState(false);
  const params = useParams();

  const tabs = React.useMemo(
    () => [
      { label: "Snippets", to: RT_SNIPPETS, view: <SnippetsView /> },
      { label: "Friends", to: RT_FRIENDS, view: <FriendsView /> },
      { label: "Settings", to: RT_SETTINGS, view: <SettingsView /> },
    ],
    [params]
  );
  return (
    <Layout>
      <ProfileHeader />
      <Content>
        <Tabs tabs={tabs} hide={hide} />

        {children}
      </Content>
      <Footer></Footer>
    </Layout>
  );
}
