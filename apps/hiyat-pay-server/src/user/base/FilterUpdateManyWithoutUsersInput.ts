/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FilterWhereUniqueInput } from "../../filter/base/FilterWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FilterUpdateManyWithoutUsersInput {
  @Field(() => [FilterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FilterWhereUniqueInput],
  })
  connect?: Array<FilterWhereUniqueInput>;

  @Field(() => [FilterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FilterWhereUniqueInput],
  })
  disconnect?: Array<FilterWhereUniqueInput>;

  @Field(() => [FilterWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FilterWhereUniqueInput],
  })
  set?: Array<FilterWhereUniqueInput>;
}

export { FilterUpdateManyWithoutUsersInput as FilterUpdateManyWithoutUsersInput };
