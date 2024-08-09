/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { FreelanceCategory } from "./FreelanceCategory";
import { FreelanceCategoryCountArgs } from "./FreelanceCategoryCountArgs";
import { FreelanceCategoryFindManyArgs } from "./FreelanceCategoryFindManyArgs";
import { FreelanceCategoryFindUniqueArgs } from "./FreelanceCategoryFindUniqueArgs";
import { CreateFreelanceCategoryArgs } from "./CreateFreelanceCategoryArgs";
import { UpdateFreelanceCategoryArgs } from "./UpdateFreelanceCategoryArgs";
import { DeleteFreelanceCategoryArgs } from "./DeleteFreelanceCategoryArgs";
import { FreelanceCategoryService } from "../freelanceCategory.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FreelanceCategory)
export class FreelanceCategoryResolverBase {
  constructor(
    protected readonly service: FreelanceCategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FreelanceCategory",
    action: "read",
    possession: "any",
  })
  async _freelanceCategoriesMeta(
    @graphql.Args() args: FreelanceCategoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FreelanceCategory])
  @nestAccessControl.UseRoles({
    resource: "FreelanceCategory",
    action: "read",
    possession: "any",
  })
  async freelanceCategories(
    @graphql.Args() args: FreelanceCategoryFindManyArgs
  ): Promise<FreelanceCategory[]> {
    return this.service.freelanceCategories(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FreelanceCategory, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FreelanceCategory",
    action: "read",
    possession: "own",
  })
  async freelanceCategory(
    @graphql.Args() args: FreelanceCategoryFindUniqueArgs
  ): Promise<FreelanceCategory | null> {
    const result = await this.service.freelanceCategory(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FreelanceCategory)
  @nestAccessControl.UseRoles({
    resource: "FreelanceCategory",
    action: "create",
    possession: "any",
  })
  async createFreelanceCategory(
    @graphql.Args() args: CreateFreelanceCategoryArgs
  ): Promise<FreelanceCategory> {
    return await this.service.createFreelanceCategory({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FreelanceCategory)
  @nestAccessControl.UseRoles({
    resource: "FreelanceCategory",
    action: "update",
    possession: "any",
  })
  async updateFreelanceCategory(
    @graphql.Args() args: UpdateFreelanceCategoryArgs
  ): Promise<FreelanceCategory | null> {
    try {
      return await this.service.updateFreelanceCategory({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FreelanceCategory)
  @nestAccessControl.UseRoles({
    resource: "FreelanceCategory",
    action: "delete",
    possession: "any",
  })
  async deleteFreelanceCategory(
    @graphql.Args() args: DeleteFreelanceCategoryArgs
  ): Promise<FreelanceCategory | null> {
    try {
      return await this.service.deleteFreelanceCategory(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}