import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SavingsAccountService } from "./savingsAccount.service";
import { SavingsAccountControllerBase } from "./base/savingsAccount.controller.base";

@swagger.ApiTags("savingsAccounts")
@common.Controller("savingsAccounts")
export class SavingsAccountController extends SavingsAccountControllerBase {
  constructor(
    protected readonly service: SavingsAccountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
