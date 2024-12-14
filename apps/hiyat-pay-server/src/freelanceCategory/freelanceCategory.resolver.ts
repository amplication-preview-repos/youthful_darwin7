import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FreelanceCategoryResolverBase } from "./base/freelanceCategory.resolver.base";
import { FreelanceCategory } from "./base/FreelanceCategory";
import { FreelanceCategoryService } from "./freelanceCategory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FreelanceCategory)
export class FreelanceCategoryResolver extends FreelanceCategoryResolverBase {
  constructor(
    protected readonly service: FreelanceCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
