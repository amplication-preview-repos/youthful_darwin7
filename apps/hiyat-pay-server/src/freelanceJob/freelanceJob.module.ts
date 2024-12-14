import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FreelanceJobModuleBase } from "./base/freelanceJob.module.base";
import { FreelanceJobService } from "./freelanceJob.service";
import { FreelanceJobController } from "./freelanceJob.controller";
import { FreelanceJobResolver } from "./freelanceJob.resolver";

@Module({
  imports: [FreelanceJobModuleBase, forwardRef(() => AuthModule)],
  controllers: [FreelanceJobController],
  providers: [FreelanceJobService, FreelanceJobResolver],
  exports: [FreelanceJobService],
})
export class FreelanceJobModule {}
