import React from "react";
import {
  Layout,
  Content,
  Footer,
  ProfileHeader,
} from "../../components/layout";
import { useParams } from "react-router-dom";

export default function ProfileLayout({ children }) {
  return (
    <Layout>
      <ProfileHeader />
      <Content>{children}</Content>
      <Footer></Footer>
    </Layout>
  );
}
