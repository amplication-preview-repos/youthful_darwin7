import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <DateTimeInput label="postedDate" source="postedDate" />
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Edit>
  );
};
