import React from "react";
import { TextField as MUITextField } from "@material-ui/core";
import FieldWrapper from "./FieldWrapper";
import Input from "./Input";

export default function TextField({ field, value, onChange, error }) {
  const { label, multiline, labelSub, className, ...rest } = field;

  return (
    <FieldWrapper field={field} error={error}>
      {/* <MUITextField></MUITextField>; */}
      <Input field={field} onChange={onChange} value={value}></Input>
    </FieldWrapper>
  );
}
