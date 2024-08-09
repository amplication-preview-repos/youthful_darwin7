import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UserProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <div />
        <div />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
