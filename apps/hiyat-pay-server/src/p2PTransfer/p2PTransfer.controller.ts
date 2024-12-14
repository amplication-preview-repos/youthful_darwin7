import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { P2PTransferService } from "./p2PTransfer.service";
import { P2PTransferControllerBase } from "./base/p2PTransfer.controller.base";

@swagger.ApiTags("p2PTransfers")
@common.Controller("p2PTransfers")
export class P2PTransferController extends P2PTransferControllerBase {
  constructor(
    protected readonly service: P2PTransferService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
