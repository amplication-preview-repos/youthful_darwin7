import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const UserProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <div />
        <div />
        <TextInput label="tagName" source="tagName" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
