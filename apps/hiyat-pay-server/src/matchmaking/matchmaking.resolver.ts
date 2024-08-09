import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MatchmakingResolverBase } from "./base/matchmaking.resolver.base";
import { Matchmaking } from "./base/Matchmaking";
import { MatchmakingService } from "./matchmaking.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Matchmaking)
export class MatchmakingResolver extends MatchmakingResolverBase {
  constructor(
    protected readonly service: MatchmakingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
