import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InfluencerPageService } from "./influencerPage.service";
import { InfluencerPageControllerBase } from "./base/influencerPage.controller.base";

@swagger.ApiTags("influencerPages")
@common.Controller("influencerPages")
export class InfluencerPageController extends InfluencerPageControllerBase {
  constructor(
    protected readonly service: InfluencerPageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
