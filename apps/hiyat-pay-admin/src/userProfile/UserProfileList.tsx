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
        <TextField label="comments" source="comments" />
        <TextField label="coverPhoto" source="coverPhoto" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="emojiSettings" source="emojiSettings" />
        <TextField label="heartColor" source="heartColor" />
        <TextField label="heartEmojiColor" source="heartEmojiColor" />
        <TextField label="ID" source="id" />
        <BooleanField label="isBlocked" source="isBlocked" />
        <BooleanField label="isSpam" source="isSpam" />
        <TextField label="likes" source="likes" />
        <BooleanField label="messageRequests" source="messageRequests" />
        <TextField label="privacy" source="privacy" />
        <TextField label="profilePicture" source="profilePicture" />
        <TextField label="profilePrivacy" source="profilePrivacy" />
        <TextField label="tagName" source="tagName" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userEmojiSettings" source="userEmojiSettings" />
        <TextField label="username" source="username" />
      </Datagrid>
    </List>
  );
};
