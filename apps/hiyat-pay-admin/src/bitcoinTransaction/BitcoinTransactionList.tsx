import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BitcoinTransactionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BitcoinTransactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="bitcoinAmount" source="bitcoinAmount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="transactionType" source="transactionType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user" source="user" />
      </Datagrid>
    </List>
  );
};
