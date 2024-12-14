import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SavingsAccountResolverBase } from "./base/savingsAccount.resolver.base";
import { SavingsAccount } from "./base/SavingsAccount";
import { SavingsAccountService } from "./savingsAccount.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SavingsAccount)
export class SavingsAccountResolver extends SavingsAccountResolverBase {
  constructor(
    protected readonly service: SavingsAccountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
