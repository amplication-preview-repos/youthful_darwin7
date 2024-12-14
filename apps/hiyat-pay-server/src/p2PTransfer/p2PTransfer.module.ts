import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { P2PTransferModuleBase } from "./base/p2PTransfer.module.base";
import { P2PTransferService } from "./p2PTransfer.service";
import { P2PTransferController } from "./p2PTransfer.controller";
import { P2PTransferResolver } from "./p2PTransfer.resolver";

@Module({
  imports: [P2PTransferModuleBase, forwardRef(() => AuthModule)],
  controllers: [P2PTransferController],
  providers: [P2PTransferService, P2PTransferResolver],
  exports: [P2PTransferService],
})
export class P2PTransferModule {}
