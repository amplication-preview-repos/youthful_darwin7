import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const MatchmakingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="age" source="age" />
        <TextField label="city" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="educationLevel" source="educationLevel" />
        <TextField label="eyeColor" source="eyeColor" />
        <TextField label="height" source="height" />
        <TextField label="ID" source="id" />
        <BooleanField label="isBlocked" source="isBlocked" />
        <TextField label="race" source="race" />
        <TextField label="relationshipType" source="relationshipType" />
        <TextField label="state" source="state" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user" source="user" />
        <TextField label="weight" source="weight" />
        <TextField label="zipCode" source="zipCode" />
      </SimpleShowLayout>
    </Show>
  );
};
