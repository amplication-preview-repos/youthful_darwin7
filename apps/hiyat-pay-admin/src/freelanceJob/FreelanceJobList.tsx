import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FreelanceJobList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FreelanceJobs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="jobDescription" source="jobDescription" />
        <TextField label="jobTitle" source="jobTitle" />
        <TextField label="paymentMethod" source="paymentMethod" />
        <TextField label="postedDate" source="postedDate" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user" source="user" />
      </Datagrid>
    </List>
  );
};
