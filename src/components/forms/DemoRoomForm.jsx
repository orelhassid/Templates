import React, { useContext, useState } from "react";
import Form from "./partials/Form";
import Joi from "joi";
import { UserContext } from "../../contexts/UserContext";
import { loginRoom } from "../../actions/user";
import { useHistory } from "react-router-dom";
import { RT_DEMO_ROOM } from "../../config/routes";

export default function DemoRoomForm() {
  const [formState, setFormState] = useState({
    roomId: "",
  });
  const { dispatchUser } = useContext(UserContext);
  const history = useHistory();

  const onSubmit = async () => {
    try {
      await dispatchUser(loginRoom(formState));
      history.push(RT_DEMO_ROOM);
    } catch (error) {
      console.error(error);
    }
  };
  const onError = () => {};

  const fields = [
    {
      type: "text",
      name: "roomId",
      label: "Room ID",
      placeholder: "12345",
      help: "Enter your room ID",
    },
  ];

  const schema = React.useMemo(
    () =>
      Joi.object({
        roomId: Joi.string(),
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
        title: "Demo Room Login",
      }}
      submitLabel="Enter"
    ></Form>
  );
}
