import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const FreelanceJobCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <BooleanInput label="isBlocked" source="isBlocked" />
        <TextInput label="jobDescription" multiline source="jobDescription" />
        <TextInput label="jobTitle" source="jobTitle" />
        <SelectInput
          source="paymentMethod"
          label="paymentMethod"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="postedDate" source="postedDate" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Create>
  );
};
