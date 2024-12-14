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
import { P2PTransfer } from "./P2PTransfer";
import { P2PTransferCountArgs } from "./P2PTransferCountArgs";
import { P2PTransferFindManyArgs } from "./P2PTransferFindManyArgs";
import { P2PTransferFindUniqueArgs } from "./P2PTransferFindUniqueArgs";
import { CreateP2PTransferArgs } from "./CreateP2PTransferArgs";
import { UpdateP2PTransferArgs } from "./UpdateP2PTransferArgs";
import { DeleteP2PTransferArgs } from "./DeleteP2PTransferArgs";
import { P2PTransferService } from "../p2PTransfer.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => P2PTransfer)
export class P2PTransferResolverBase {
  constructor(
    protected readonly service: P2PTransferService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "P2PTransfer",
    action: "read",
    possession: "any",
  })
  async _p2PTransfersMeta(
    @graphql.Args() args: P2PTransferCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [P2PTransfer])
  @nestAccessControl.UseRoles({
    resource: "P2PTransfer",
    action: "read",
    possession: "any",
  })
  async p2PTransfers(
    @graphql.Args() args: P2PTransferFindManyArgs
  ): Promise<P2PTransfer[]> {
    return this.service.p2PTransfers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => P2PTransfer, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "P2PTransfer",
    action: "read",
    possession: "own",
  })
  async p2PTransfer(
    @graphql.Args() args: P2PTransferFindUniqueArgs
  ): Promise<P2PTransfer | null> {
    const result = await this.service.p2PTransfer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => P2PTransfer)
  @nestAccessControl.UseRoles({
    resource: "P2PTransfer",
    action: "create",
    possession: "any",
  })
  async createP2PTransfer(
    @graphql.Args() args: CreateP2PTransferArgs
  ): Promise<P2PTransfer> {
    return await this.service.createP2PTransfer({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => P2PTransfer)
  @nestAccessControl.UseRoles({
    resource: "P2PTransfer",
    action: "update",
    possession: "any",
  })
  async updateP2PTransfer(
    @graphql.Args() args: UpdateP2PTransferArgs
  ): Promise<P2PTransfer | null> {
    try {
      return await this.service.updateP2PTransfer({
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

  @graphql.Mutation(() => P2PTransfer)
  @nestAccessControl.UseRoles({
    resource: "P2PTransfer",
    action: "delete",
    possession: "any",
  })
  async deleteP2PTransfer(
    @graphql.Args() args: DeleteP2PTransferArgs
  ): Promise<P2PTransfer | null> {
    try {
      return await this.service.deleteP2PTransfer(args);
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
