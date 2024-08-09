import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const FilterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="avatar" source="avatar" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="emoji" source="emoji" />
        <TextField label="ID" source="id" />
        <TextField label="photo" source="photo" />
        <TextField label="photoDuration" source="photoDuration" />
        <TextField label="photoSharingDuration" source="photoSharingDuration" />
        <TextField label="profileColor" source="profileColor" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="userProfileColor" source="userProfileColor" />
      </SimpleShowLayout>
    </Show>
  );
};
