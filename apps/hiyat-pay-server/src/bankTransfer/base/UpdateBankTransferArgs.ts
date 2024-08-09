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
import { BankTransferWhereUniqueInput } from "./BankTransferWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BankTransferUpdateInput } from "./BankTransferUpdateInput";

@ArgsType()
class UpdateBankTransferArgs {
  @ApiProperty({
    required: true,
    type: () => BankTransferWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BankTransferWhereUniqueInput)
  @Field(() => BankTransferWhereUniqueInput, { nullable: false })
  where!: BankTransferWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BankTransferUpdateInput,
  })
  @ValidateNested()
  @Type(() => BankTransferUpdateInput)
  @Field(() => BankTransferUpdateInput, { nullable: false })
  data!: BankTransferUpdateInput;
}

export { UpdateBankTransferArgs as UpdateBankTransferArgs };