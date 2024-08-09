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
import { BankTransferWhereInput } from "./BankTransferWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BankTransferListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BankTransferWhereInput,
  })
  @ValidateNested()
  @Type(() => BankTransferWhereInput)
  @IsOptional()
  @Field(() => BankTransferWhereInput, {
    nullable: true,
  })
  every?: BankTransferWhereInput;

  @ApiProperty({
    required: false,
    type: () => BankTransferWhereInput,
  })
  @ValidateNested()
  @Type(() => BankTransferWhereInput)
  @IsOptional()
  @Field(() => BankTransferWhereInput, {
    nullable: true,
  })
  some?: BankTransferWhereInput;

  @ApiProperty({
    required: false,
    type: () => BankTransferWhereInput,
  })
  @ValidateNested()
  @Type(() => BankTransferWhereInput)
  @IsOptional()
  @Field(() => BankTransferWhereInput, {
    nullable: true,
  })
  none?: BankTransferWhereInput;
}
export { BankTransferListRelationFilter as BankTransferListRelationFilter };