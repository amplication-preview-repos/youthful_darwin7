import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FreelanceCategoryModuleBase } from "./base/freelanceCategory.module.base";
import { FreelanceCategoryService } from "./freelanceCategory.service";
import { FreelanceCategoryController } from "./freelanceCategory.controller";
import { FreelanceCategoryResolver } from "./freelanceCategory.resolver";

@Module({
  imports: [FreelanceCategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [FreelanceCategoryController],
  providers: [FreelanceCategoryService, FreelanceCategoryResolver],
  exports: [FreelanceCategoryService],
})
export class FreelanceCategoryModule {}
