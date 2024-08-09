import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BitcoinTransactionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bitcoinAmount" source="bitcoinAmount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="transactionType" source="transactionType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user" source="user" />
      </SimpleShowLayout>
    </Show>
  );
};
