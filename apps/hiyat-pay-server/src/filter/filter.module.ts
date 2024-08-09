import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FilterModuleBase } from "./base/filter.module.base";
import { FilterService } from "./filter.service";
import { FilterController } from "./filter.controller";
import { FilterResolver } from "./filter.resolver";

@Module({
  imports: [FilterModuleBase, forwardRef(() => AuthModule)],
  controllers: [FilterController],
  providers: [FilterService, FilterResolver],
  exports: [FilterService],
})
export class FilterModule {}
