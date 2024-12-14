import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BitcoinTransactionService } from "./bitcoinTransaction.service";
import { BitcoinTransactionControllerBase } from "./base/bitcoinTransaction.controller.base";

@swagger.ApiTags("bitcoinTransactions")
@common.Controller("bitcoinTransactions")
export class BitcoinTransactionController extends BitcoinTransactionControllerBase {
  constructor(
    protected readonly service: BitcoinTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
