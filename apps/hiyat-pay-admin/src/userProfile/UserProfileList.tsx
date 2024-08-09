import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserProfiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="bio" source="bio" />
        <TextField label="coverPhoto" source="coverPhoto" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="profilePicture" source="profilePicture" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
      </Datagrid>
    </List>
  );
};
