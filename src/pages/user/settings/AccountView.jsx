import { Box, Container } from "@material-ui/core";
import React from "react";
import { SEO } from "../../../components/layout";
import { APP } from "../../../config/index";

import {AccountForm} from '../../../components/forms'

export default function AccountView() {
  return (
    <Container>
      <SEO title={APP.title} description={APP.description} />
      
      <AccountForm />
    </Container>
  );
}
