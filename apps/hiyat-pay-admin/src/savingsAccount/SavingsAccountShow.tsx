import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const SavingsAccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="balance" source="balance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateOpened" source="dateOpened" />
        <TextField label="ID" source="id" />
        <TextField label="rainyDayFund" source="rainyDayFund" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user" source="user" />
      </SimpleShowLayout>
    </Show>
  );
};
