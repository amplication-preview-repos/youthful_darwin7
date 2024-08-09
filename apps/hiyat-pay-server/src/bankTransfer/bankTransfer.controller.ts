import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BankTransferService } from "./bankTransfer.service";
import { BankTransferControllerBase } from "./base/bankTransfer.controller.base";

@swagger.ApiTags("bankTransfers")
@common.Controller("bankTransfers")
export class BankTransferController extends BankTransferControllerBase {
  constructor(
    protected readonly service: BankTransferService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
