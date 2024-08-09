import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const MatchmakingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="age" source="age" />
        <TextInput label="city" source="city" />
        <TextInput label="educationLevel" source="educationLevel" />
        <TextInput label="eyeColor" source="eyeColor" />
        <NumberInput step={1} label="height" source="height" />
        <TextInput label="race" source="race" />
        <SelectInput
          source="relationshipType"
          label="relationshipType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="state" source="state" />
        <TextInput label="user" source="user" />
        <NumberInput step={1} label="weight" source="weight" />
        <TextInput label="zipCode" source="zipCode" />
      </SimpleForm>
    </Create>
  );
};
