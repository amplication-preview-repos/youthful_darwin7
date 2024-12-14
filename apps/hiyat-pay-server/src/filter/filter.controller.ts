import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FilterService } from "./filter.service";
import { FilterControllerBase } from "./base/filter.controller.base";

@swagger.ApiTags("filters")
@common.Controller("filters")
export class FilterController extends FilterControllerBase {
  constructor(
    protected readonly service: FilterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
