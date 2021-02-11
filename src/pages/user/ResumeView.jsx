import { Box, Container } from "@material-ui/core";
import React from "react";
import { SEO } from "../../components/layout";

import { APP } from "../../config/index";

export default function ResumeView() {
  return (
    <Container>
      <SEO title={APP.title} description={APP.description} />
      <h1>ResumeView Page</h1>
    </Container>
  );
}
