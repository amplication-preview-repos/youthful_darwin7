import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const SavingsAccountCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="balance" source="balance" />
        <DateTimeInput label="dateOpened" source="dateOpened" />
        <NumberInput label="rainyDayFund" source="rainyDayFund" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Create>
  );
};
