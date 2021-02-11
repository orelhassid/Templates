import React, { useContext, useState } from "react";
import Form from "./partials/Form";
import Joi from "joi";
import GoogleAuth from "./GoogleLogin";
import { UserContext } from "../../contexts/UserContext";
import { createProject } from "../../actions/projects";
import { useHistory } from "react-router-dom";
import { RT_PROJECTS } from "../../config/routes";
// import defaultImage from "../../assets/images/defaultImage.js";

export default function NewProjectForm() {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    tags: [],
    image: "",
  });

  const { dispatchProjects } = useContext(UserContext);
  const history = useHistory();
  const onSubmit = async () => {
    console.log("LoginForm: onSubmit", formState);
    try {
      formatData();
      await dispatchProjects(createProject(formState));
      history.push(RT_PROJECTS);
    } catch (error) {
      console.error(error);
    }
  };
  const onError = () => {};

  const formatData = () => {
    let tags = formState.tags.replace(/\s/g, "").split(",");
    tags = tags.filter((tag) => tag !== "");
    formState.tags = tags;

    if (!formState.image) {
      // formState.file = defaultImage;
    }
  };

  const fields = [
    {
      type: "text",
      name: "title",
      label: "title",
      placeholder: "title",
      help: "title",
    },
    {
      type: "text",
      name: "description",
      label: "description",
      placeholder: "description",
      help: "description",
    },
    {
      type: "text",
      name: "tags",
      label: "tags",
      placeholder: "tags",
      help: "tags",
    },
    {
      type: "file",
      name: "image",
      label: "upload an image",
      placeholder: "image",
      help: "image",
    },
  ];

  const schema = React.useMemo(
    () =>
      Joi.object({
        title: Joi.string(),
        description: Joi.string(),
        tags: Joi.string(),
        image: Joi.string(),
      }),
    []
  );

  return (
    <Form
      formState={formState}
      setFormState={setFormState}
      fields={fields}
      schema={schema}
      onSubmit={onSubmit}
      onError={onError}
      header={{
        title: "New Project Form",
      }}
      submitLabel="CREATE"
    ></Form>
  );
}
