import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MatchmakingService } from "./matchmaking.service";
import { MatchmakingControllerBase } from "./base/matchmaking.controller.base";

@swagger.ApiTags("matchmakings")
@common.Controller("matchmakings")
export class MatchmakingController extends MatchmakingControllerBase {
  constructor(
    protected readonly service: MatchmakingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
