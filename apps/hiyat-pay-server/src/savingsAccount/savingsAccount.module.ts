import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SavingsAccountModuleBase } from "./base/savingsAccount.module.base";
import { SavingsAccountService } from "./savingsAccount.service";
import { SavingsAccountController } from "./savingsAccount.controller";
import { SavingsAccountResolver } from "./savingsAccount.resolver";

@Module({
  imports: [SavingsAccountModuleBase, forwardRef(() => AuthModule)],
  controllers: [SavingsAccountController],
  providers: [SavingsAccountService, SavingsAccountResolver],
  exports: [SavingsAccountService],
})
export class SavingsAccountModule {}
