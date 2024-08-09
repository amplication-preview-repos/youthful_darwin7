import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const UserProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bio" source="bio" />
        <TextField label="comments" source="comments" />
        <TextField label="coverPhoto" source="coverPhoto" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateOfBirth" source="dateOfBirth" />
        <TextField label="educationLevel" source="educationLevel" />
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
        <TextField label="relationshipStatus" source="relationshipStatus" />
        <TextField label="tagName" source="tagName" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userEducationLevel" source="userEducationLevel" />
        <TextField label="userEmojiSettings" source="userEmojiSettings" />
        <TextField label="userProfilePrivacy" source="userProfilePrivacy" />
        <TextField
          label="userRelationshipStatus"
          source="userRelationshipStatus"
        />
        <TextField label="username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
