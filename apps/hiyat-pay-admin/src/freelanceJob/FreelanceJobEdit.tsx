import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const FreelanceJobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
