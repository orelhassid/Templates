import React from "react";
import { Layout, SEO, Header, Content, Footer } from "../../components/layout";
import { APP } from "../../config/index";
import NewProjectForm from "../../components/forms/NewProjectForm";
export default function NewProject() {
  return (
    <Layout>
      <SEO title={APP.title} description={APP.description} />
      <Header title="Project Form Page" subtitle="Create a New Project" />
      <Content>
        <NewProjectForm />
      </Content>
      <Footer></Footer>
    </Layout>
  );
}
