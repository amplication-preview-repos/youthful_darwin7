import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <DateTimeInput label="postedDate" source="postedDate" />
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Create>
  );
};
