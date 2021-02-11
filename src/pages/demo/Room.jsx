import React, { useContext, useState, useEffect } from "react";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { Layout, SEO, Header, Content, Footer } from "../../components/layout";
import ImportCandidatesForm from "../../components/forms/ImportCandidatesForm";

import { APP } from "../../config/index";
import { UserContext } from "../../contexts/UserContext";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../hooks/useTransactions";
import { getRepos } from "../../api/github";

export default function Room() {
  const { user, repos } = useContext(UserContext);

  const filteredRepos = repos.filter((repo) => repo.language !== null);

  const data = repos
    ? {
        labels: [...new Set(filteredRepos.map((repo) => repo.language || ""))],
        datasets: [
          {
            data: [10, 5, 3],
            backgroundColor: ["#FFCE56", "#36A2EB", "#FF6384"],
            hoverBackgroundColor: ["#FFCE56", "#36A2EB", "#FF6384"],
          },
        ],
      }
    : [];

  return (
    <Layout>
      <SEO title={APP.title} description={APP.description} />
      <Header title="Room Page" subtitle="Welcome to Hileo Room" />
      <Content>
        {/* <Typography>{user.name}</Typography> */}
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <ImportCandidatesForm />
          </Grid>
          <Grid item xs={6}>
            {/* <Paper> */}
            <Doughnut data={data} />
            {/* </Paper> */}
          </Grid>
        </Grid>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

/**
 *   const data = {
    labels: Object.keys(repos[0]),
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
 * 
 */
