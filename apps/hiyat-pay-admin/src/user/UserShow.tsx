import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Filter" target="userId" label="Filters">
          <Datagrid rowClick="show">
            <TextField label="avatar" source="avatar" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="emoji" source="emoji" />
            <TextField label="ID" source="id" />
            <TextField label="photo" source="photo" />
            <TextField label="photoDuration" source="photoDuration" />
            <TextField
              label="photoSharingDuration"
              source="photoSharingDuration"
            />
            <TextField label="profileColor" source="profileColor" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="userProfileColor" source="userProfileColor" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
