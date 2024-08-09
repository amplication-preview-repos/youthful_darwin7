import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FreelanceJobResolverBase } from "./base/freelanceJob.resolver.base";
import { FreelanceJob } from "./base/FreelanceJob";
import { FreelanceJobService } from "./freelanceJob.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FreelanceJob)
export class FreelanceJobResolver extends FreelanceJobResolverBase {
  constructor(
    protected readonly service: FreelanceJobService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
