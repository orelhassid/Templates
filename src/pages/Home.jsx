import React from "react";
import { Layout, SEO, Header, Content, Footer } from "../components/layout";
import { APP } from "../config/index";
import { ReactComponent as PortfolioImage } from "../assets/images/portfolio-amico.svg";
import { Box, Container, Grid } from "@material-ui/core";

export default function Home() {
  return (
    <Layout>
      <SEO title={APP.title} description={APP.description} />
      <Header title={APP.title} subtitle={APP.tagline} />
      <Content>
        <Box textAlign="center">
          <PortfolioImage style={{ maxWidth: 500 }} />
        </Box>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}
