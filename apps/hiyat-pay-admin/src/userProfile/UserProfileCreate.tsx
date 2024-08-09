import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const UserProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <TextInput label="comments" multiline source="comments" />
        <div />
        <SelectInput
          source="emojiSettings"
          label="emojiSettings"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="heartColor"
          label="heartColor"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="heartEmojiColor"
          label="heartEmojiColor"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="isBlocked" source="isBlocked" />
        <BooleanInput label="isSpam" source="isSpam" />
        <NumberInput step={1} label="likes" source="likes" />
        <BooleanInput label="messageRequests" source="messageRequests" />
        <SelectInput
          source="privacy"
          label="privacy"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <SelectInput
          source="profilePrivacy"
          label="profilePrivacy"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="tagName" source="tagName" />
        <SelectInput
          source="userEmojiSettings"
          label="userEmojiSettings"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
