import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FreelanceCategoryService } from "./freelanceCategory.service";
import { FreelanceCategoryControllerBase } from "./base/freelanceCategory.controller.base";

@swagger.ApiTags("freelanceCategories")
@common.Controller("freelanceCategories")
export class FreelanceCategoryController extends FreelanceCategoryControllerBase {
  constructor(
    protected readonly service: FreelanceCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
