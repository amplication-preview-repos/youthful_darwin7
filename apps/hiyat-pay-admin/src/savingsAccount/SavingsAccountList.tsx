import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SavingsAccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SavingsAccounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="balance" source="balance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateOpened" source="dateOpened" />
        <TextField label="ID" source="id" />
        <TextField label="rainyDayFund" source="rainyDayFund" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user" source="user" />
      </Datagrid>
    </List>
  );
};
