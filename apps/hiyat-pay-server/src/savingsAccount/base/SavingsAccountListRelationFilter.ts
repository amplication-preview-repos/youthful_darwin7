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
import { SavingsAccountWhereInput } from "./SavingsAccountWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SavingsAccountListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SavingsAccountWhereInput,
  })
  @ValidateNested()
  @Type(() => SavingsAccountWhereInput)
  @IsOptional()
  @Field(() => SavingsAccountWhereInput, {
    nullable: true,
  })
  every?: SavingsAccountWhereInput;

  @ApiProperty({
    required: false,
    type: () => SavingsAccountWhereInput,
  })
  @ValidateNested()
  @Type(() => SavingsAccountWhereInput)
  @IsOptional()
  @Field(() => SavingsAccountWhereInput, {
    nullable: true,
  })
  some?: SavingsAccountWhereInput;

  @ApiProperty({
    required: false,
    type: () => SavingsAccountWhereInput,
  })
  @ValidateNested()
  @Type(() => SavingsAccountWhereInput)
  @IsOptional()
  @Field(() => SavingsAccountWhereInput, {
    nullable: true,
  })
  none?: SavingsAccountWhereInput;
}
export { SavingsAccountListRelationFilter as SavingsAccountListRelationFilter };