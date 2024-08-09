import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BankTransferModuleBase } from "./base/bankTransfer.module.base";
import { BankTransferService } from "./bankTransfer.service";
import { BankTransferController } from "./bankTransfer.controller";
import { BankTransferResolver } from "./bankTransfer.resolver";

@Module({
  imports: [BankTransferModuleBase, forwardRef(() => AuthModule)],
  controllers: [BankTransferController],
  providers: [BankTransferService, BankTransferResolver],
  exports: [BankTransferService],
})
export class BankTransferModule {}
