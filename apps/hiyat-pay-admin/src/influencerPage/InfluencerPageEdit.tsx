import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const InfluencerPageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="followers" source="followers" />
        <NumberInput step={1} label="gifts" source="gifts" />
        <BooleanInput label="isBlocked" source="isBlocked" />
        <NumberInput step={1} label="likes" source="likes" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
