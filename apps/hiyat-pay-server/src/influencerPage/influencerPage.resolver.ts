import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { InfluencerPageResolverBase } from "./base/influencerPage.resolver.base";
import { InfluencerPage } from "./base/InfluencerPage";
import { InfluencerPageService } from "./influencerPage.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InfluencerPage)
export class InfluencerPageResolver extends InfluencerPageResolverBase {
  constructor(
    protected readonly service: InfluencerPageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
