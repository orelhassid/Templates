import React, { useContext, useState, useEffect } from "react";
import { Box, Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { ActionsBar, SEO } from "../../components/layout";

import { APP } from "../../config/index";
import { UserContext } from "../../contexts/UserContext";
import ProfileLayout from "../user/ProfileLayout";
import { RT_PROJECTS } from "../../config/routes";

const actions = [
  {
    label: "Back",
    to: RT_PROJECTS,
  },
];

export default function Project() {
  const { project: projectSlug } = useParams();
  const [project, setProject] = useState({});
  const { projects } = useContext(UserContext);

  useEffect(() => {
    let currentProject = projects.find(
      (project) => project.slug === projectSlug
    );
    setProject(currentProject);
  }, [projects, projectSlug]);
  return (
    <ProfileLayout>
      <Container>
        <SEO title={APP.title} description={APP.description} />
        <ActionsBar actions={actions} />
        <h1>{project.title}</h1>
        <Box display="flex" justifyContent="center" width="100%">
          <img src={project.image} alt="" width="100%" />
        </Box>
      </Container>
    </ProfileLayout>
  );
}
