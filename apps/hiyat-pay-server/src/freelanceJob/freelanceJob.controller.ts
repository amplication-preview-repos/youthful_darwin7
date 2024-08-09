import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FreelanceJobService } from "./freelanceJob.service";
import { FreelanceJobControllerBase } from "./base/freelanceJob.controller.base";

@swagger.ApiTags("freelanceJobs")
@common.Controller("freelanceJobs")
export class FreelanceJobController extends FreelanceJobControllerBase {
  constructor(
    protected readonly service: FreelanceJobService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
