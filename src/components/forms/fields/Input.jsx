import React from "react";

import { Input as InputMUI, InputBase } from "@material-ui/core";
import useStyles from "./styles";

export default function Input({ field, value, onChange }) {
  const { name, placeholder, type, multiline, defaultValue, autoFocus } = field;

  const classes = useStyles();

  return (
    <InputBase
      classes={{ root: classes.input, focused: classes.inputFocused }}
      type={type}
      // defaultValue={defaultValue}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  );
}
/**
 *    
 * <InputBase
      classes={inputClasses}
      // defaultValue={defaultValue}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />

 *  <InputMUI
      classes={inputClasses}
      // defaultValue={defaultValue}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disableUnderline
      multiline={multiline}
    />
 * 
 */
