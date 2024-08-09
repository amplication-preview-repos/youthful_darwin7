import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MatchmakingModuleBase } from "./base/matchmaking.module.base";
import { MatchmakingService } from "./matchmaking.service";
import { MatchmakingController } from "./matchmaking.controller";
import { MatchmakingResolver } from "./matchmaking.resolver";

@Module({
  imports: [MatchmakingModuleBase, forwardRef(() => AuthModule)],
  controllers: [MatchmakingController],
  providers: [MatchmakingService, MatchmakingResolver],
  exports: [MatchmakingService],
})
export class MatchmakingModule {}
