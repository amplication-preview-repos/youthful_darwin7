import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FreelanceCategoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="categoryName" source="categoryName" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
