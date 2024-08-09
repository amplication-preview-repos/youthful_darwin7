import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const FreelanceJobShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="jobDescription" source="jobDescription" />
        <TextField label="jobTitle" source="jobTitle" />
        <TextField label="paymentMethod" source="paymentMethod" />
        <TextField label="postedDate" source="postedDate" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user" source="user" />
      </SimpleShowLayout>
    </Show>
  );
};
