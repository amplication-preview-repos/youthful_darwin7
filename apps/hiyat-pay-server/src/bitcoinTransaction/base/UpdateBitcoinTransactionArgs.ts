/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BitcoinTransactionWhereUniqueInput } from "./BitcoinTransactionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BitcoinTransactionUpdateInput } from "./BitcoinTransactionUpdateInput";

@ArgsType()
class UpdateBitcoinTransactionArgs {
  @ApiProperty({
    required: true,
    type: () => BitcoinTransactionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BitcoinTransactionWhereUniqueInput)
  @Field(() => BitcoinTransactionWhereUniqueInput, { nullable: false })
  where!: BitcoinTransactionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BitcoinTransactionUpdateInput,
  })
  @ValidateNested()
  @Type(() => BitcoinTransactionUpdateInput)
  @Field(() => BitcoinTransactionUpdateInput, { nullable: false })
  data!: BitcoinTransactionUpdateInput;
}

export { UpdateBitcoinTransactionArgs as UpdateBitcoinTransactionArgs };