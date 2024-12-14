import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const MatchmakingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Matchmakings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
