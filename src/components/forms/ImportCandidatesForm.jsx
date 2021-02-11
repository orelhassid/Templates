import React, { useContext, useState } from "react";
import Form from "./partials/Form";
import Joi from "joi";
import { UserContext } from "../../contexts/UserContext";
import { loginRoom } from "../../actions/user";
import { useHistory } from "react-router-dom";
import { RT_DEMO_ROOM } from "../../config/routes";
import { getRepos } from "../../actions/repos";

export default function ImportCandidatesForm() {
  const [formState, setFormState] = useState({
    username: "",
  });
  const { dispatchRepos } = useContext(UserContext);
  const history = useHistory();

  const onSubmit = async () => {
    try {
      await dispatchRepos(getRepos(formState.username));
    } catch (error) {
      console.error(error);
    }
  };
  const onError = () => {};

  const fields = [
    {
      type: "text",
      name: "username",
      label: "Username",
      placeholder: "orelhassid",
      help: "Enter your GitHub Repository username",
    },
  ];

  const schema = React.useMemo(
    () =>
      Joi.object({
        username: Joi.string(),
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
        title: "Import Candidates",
      }}
      submitLabel="Import"
    ></Form>
  );
}
