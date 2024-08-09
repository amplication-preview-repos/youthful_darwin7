import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { P2PTransferResolverBase } from "./base/p2PTransfer.resolver.base";
import { P2PTransfer } from "./base/P2PTransfer";
import { P2PTransferService } from "./p2PTransfer.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => P2PTransfer)
export class P2PTransferResolver extends P2PTransferResolverBase {
  constructor(
    protected readonly service: P2PTransferService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
