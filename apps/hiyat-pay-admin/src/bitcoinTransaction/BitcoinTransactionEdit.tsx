import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const BitcoinTransactionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="bitcoinAmount" source="bitcoinAmount" />
        <DateTimeInput label="date" source="date" />
        <SelectInput
          source="transactionType"
          label="transactionType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Edit>
  );
};
