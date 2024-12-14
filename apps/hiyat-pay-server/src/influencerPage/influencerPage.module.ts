import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InfluencerPageModuleBase } from "./base/influencerPage.module.base";
import { InfluencerPageService } from "./influencerPage.service";
import { InfluencerPageController } from "./influencerPage.controller";
import { InfluencerPageResolver } from "./influencerPage.resolver";

@Module({
  imports: [InfluencerPageModuleBase, forwardRef(() => AuthModule)],
  controllers: [InfluencerPageController],
  providers: [InfluencerPageService, InfluencerPageResolver],
  exports: [InfluencerPageService],
})
export class InfluencerPageModule {}
