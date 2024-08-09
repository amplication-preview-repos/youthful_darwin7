import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BitcoinTransactionModuleBase } from "./base/bitcoinTransaction.module.base";
import { BitcoinTransactionService } from "./bitcoinTransaction.service";
import { BitcoinTransactionController } from "./bitcoinTransaction.controller";
import { BitcoinTransactionResolver } from "./bitcoinTransaction.resolver";

@Module({
  imports: [BitcoinTransactionModuleBase, forwardRef(() => AuthModule)],
  controllers: [BitcoinTransactionController],
  providers: [BitcoinTransactionService, BitcoinTransactionResolver],
  exports: [BitcoinTransactionService],
})
export class BitcoinTransactionModule {}
