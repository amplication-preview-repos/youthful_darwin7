import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BitcoinTransactionResolverBase } from "./base/bitcoinTransaction.resolver.base";
import { BitcoinTransaction } from "./base/BitcoinTransaction";
import { BitcoinTransactionService } from "./bitcoinTransaction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BitcoinTransaction)
export class BitcoinTransactionResolver extends BitcoinTransactionResolverBase {
  constructor(
    protected readonly service: BitcoinTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
