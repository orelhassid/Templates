import React, { useContext, useEffect, useState } from "react";
import Form from "../partials/Form";
import Joi from "joi";
import {UserContext} from '../../../contexts/UserContext'
import { updateUser } from "../../../actions/user";
import {userPack, userSchemaPack } from '../fields/fieldsData'


export default function AccountForm() {
  const [formState, setFormState] = useState({
    name: "",
    firstName: "",
    lastName: "",
    headline: "",
    email: "",
    phone: "",
  });
  const { user, dispatchUser } = useContext(UserContext)
  useEffect(() => {
    // const {name, firstName, lastName} = user

    // for (const [key, value] of Object.entries(user)) {
    //   console.log(`Key and Value - ${key}: ${value}`)
    // }
    setFormState({
      name: user?.name,
      firstName: user?.firstName,
      lastName: user?.lastName,
      headline: user?.headline,
      email: user?.email,
      phone: user?.phone,
    })
    
  },[user])

  // console.log("FormState", formState)
  const onSubmit = async () => {
    console.log("AccountForm: onSubmit", formState);
    try {
      await dispatchUser(updateUser({...user, ...formState}))
    } catch (error) {
      
    }
  };
  const onError = () => {};
  const fields = [
    ...userPack
  ];

  const schema = React.useMemo(
    () =>
      Joi.object({...userSchemaPack}),
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
        title: "Account Form",
      }}
      submitLabel="Save"
    >
    </Form>
  );
}
