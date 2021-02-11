import React from "react";
import DemoRoomForm from "../../components/forms/DemoRoomForm";
import { Layout, SEO, Header, Content, Footer } from "../../components/layout";
import { APP } from "../../config/index";
export default function DemoRoom() {
  return (
    <Layout>
      <SEO title={APP.title} description={APP.description} />
      <Header title="Demo Room Page" subtitle="Request a Demo" />
      <Content>
        <DemoRoomForm />
      </Content>
      <Footer></Footer>
    </Layout>
  );
}
