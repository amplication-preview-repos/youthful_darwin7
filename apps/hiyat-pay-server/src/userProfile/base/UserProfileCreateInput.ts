/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsEnum,
  IsBoolean,
  IsInt,
  Min,
  Max,
} from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumUserProfileEmojiSettings } from "./EnumUserProfileEmojiSettings";
import { EnumUserProfileHeartColor } from "./EnumUserProfileHeartColor";
import { EnumUserProfileHeartEmojiColor } from "./EnumUserProfileHeartEmojiColor";
import { EnumUserProfilePrivacy } from "./EnumUserProfilePrivacy";
import { EnumUserProfileProfilePrivacy } from "./EnumUserProfileProfilePrivacy";
import { EnumUserProfileUserEmojiSettings } from "./EnumUserProfileUserEmojiSettings";

@InputType()
class UserProfileCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bio?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comments?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  coverPhoto?: InputJsonValue;

  @ApiProperty({
    required: false,
    enum: EnumUserProfileEmojiSettings,
  })
  @IsEnum(EnumUserProfileEmojiSettings)
  @IsOptional()
  @Field(() => EnumUserProfileEmojiSettings, {
    nullable: true,
  })
  emojiSettings?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumUserProfileHeartColor,
  })
  @IsEnum(EnumUserProfileHeartColor)
  @IsOptional()
  @Field(() => EnumUserProfileHeartColor, {
    nullable: true,
  })
  heartColor?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumUserProfileHeartEmojiColor,
  })
  @IsEnum(EnumUserProfileHeartEmojiColor)
  @IsOptional()
  @Field(() => EnumUserProfileHeartEmojiColor, {
    nullable: true,
  })
  heartEmojiColor?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isBlocked?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isSpam?: boolean | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  likes?: number | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  messageRequests?: boolean | null;

  @ApiProperty({
    required: false,
    enum: EnumUserProfilePrivacy,
  })
  @IsEnum(EnumUserProfilePrivacy)
  @IsOptional()
  @Field(() => EnumUserProfilePrivacy, {
    nullable: true,
  })
  privacy?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  profilePicture?: InputJsonValue;

  @ApiProperty({
    required: false,
    enum: EnumUserProfileProfilePrivacy,
  })
  @IsEnum(EnumUserProfileProfilePrivacy)
  @IsOptional()
  @Field(() => EnumUserProfileProfilePrivacy, {
    nullable: true,
  })
  profilePrivacy?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  tagName?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumUserProfileUserEmojiSettings,
  })
  @IsEnum(EnumUserProfileUserEmojiSettings)
  @IsOptional()
  @Field(() => EnumUserProfileUserEmojiSettings, {
    nullable: true,
  })
  userEmojiSettings?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string | null;
}

export { UserProfileCreateInput as UserProfileCreateInput };
