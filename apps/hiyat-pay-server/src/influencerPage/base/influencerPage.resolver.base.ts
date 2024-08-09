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
import { InfluencerPage } from "./InfluencerPage";
import { InfluencerPageCountArgs } from "./InfluencerPageCountArgs";
import { InfluencerPageFindManyArgs } from "./InfluencerPageFindManyArgs";
import { InfluencerPageFindUniqueArgs } from "./InfluencerPageFindUniqueArgs";
import { CreateInfluencerPageArgs } from "./CreateInfluencerPageArgs";
import { UpdateInfluencerPageArgs } from "./UpdateInfluencerPageArgs";
import { DeleteInfluencerPageArgs } from "./DeleteInfluencerPageArgs";
import { InfluencerPageService } from "../influencerPage.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InfluencerPage)
export class InfluencerPageResolverBase {
  constructor(
    protected readonly service: InfluencerPageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "InfluencerPage",
    action: "read",
    possession: "any",
  })
  async _influencerPagesMeta(
    @graphql.Args() args: InfluencerPageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [InfluencerPage])
  @nestAccessControl.UseRoles({
    resource: "InfluencerPage",
    action: "read",
    possession: "any",
  })
  async influencerPages(
    @graphql.Args() args: InfluencerPageFindManyArgs
  ): Promise<InfluencerPage[]> {
    return this.service.influencerPages(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => InfluencerPage, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "InfluencerPage",
    action: "read",
    possession: "own",
  })
  async influencerPage(
    @graphql.Args() args: InfluencerPageFindUniqueArgs
  ): Promise<InfluencerPage | null> {
    const result = await this.service.influencerPage(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => InfluencerPage)
  @nestAccessControl.UseRoles({
    resource: "InfluencerPage",
    action: "create",
    possession: "any",
  })
  async createInfluencerPage(
    @graphql.Args() args: CreateInfluencerPageArgs
  ): Promise<InfluencerPage> {
    return await this.service.createInfluencerPage({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => InfluencerPage)
  @nestAccessControl.UseRoles({
    resource: "InfluencerPage",
    action: "update",
    possession: "any",
  })
  async updateInfluencerPage(
    @graphql.Args() args: UpdateInfluencerPageArgs
  ): Promise<InfluencerPage | null> {
    try {
      return await this.service.updateInfluencerPage({
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

  @graphql.Mutation(() => InfluencerPage)
  @nestAccessControl.UseRoles({
    resource: "InfluencerPage",
    action: "delete",
    possession: "any",
  })
  async deleteInfluencerPage(
    @graphql.Args() args: DeleteInfluencerPageArgs
  ): Promise<InfluencerPage | null> {
    try {
      return await this.service.deleteInfluencerPage(args);
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
