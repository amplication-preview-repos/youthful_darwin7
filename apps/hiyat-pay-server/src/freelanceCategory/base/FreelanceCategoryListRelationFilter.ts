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
import { FreelanceCategoryWhereInput } from "./FreelanceCategoryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FreelanceCategoryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FreelanceCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => FreelanceCategoryWhereInput)
  @IsOptional()
  @Field(() => FreelanceCategoryWhereInput, {
    nullable: true,
  })
  every?: FreelanceCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => FreelanceCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => FreelanceCategoryWhereInput)
  @IsOptional()
  @Field(() => FreelanceCategoryWhereInput, {
    nullable: true,
  })
  some?: FreelanceCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => FreelanceCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => FreelanceCategoryWhereInput)
  @IsOptional()
  @Field(() => FreelanceCategoryWhereInput, {
    nullable: true,
  })
  none?: FreelanceCategoryWhereInput;
}
export { FreelanceCategoryListRelationFilter as FreelanceCategoryListRelationFilter };