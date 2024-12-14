import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const SavingsAccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="balance" source="balance" />
        <DateTimeInput label="dateOpened" source="dateOpened" />
        <NumberInput label="rainyDayFund" source="rainyDayFund" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Edit>
  );
};
