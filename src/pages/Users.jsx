import { Box, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getUsers } from "../api/user";
import { Layout, SEO, Header, Content, Footer } from "../components/layout";
import { APP } from "../config/index";

export default function Login() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetch() {
      try {
        console.log("Fetch Users");
        const { data } = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetch();
  }, []);
  return (
    <Layout>
      <SEO title={APP.title} description={APP.description} />
      <Header title="Users Page" subtitle="" />
      <Content>
        <Box>
          {users.map(({ name, email }) => (
            <Paper>
              <Box p={2}>
                <Typography>{name}</Typography>
                <Typography>{email}</Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Content>
      <Footer></Footer>
    </Layout>
  );
}
