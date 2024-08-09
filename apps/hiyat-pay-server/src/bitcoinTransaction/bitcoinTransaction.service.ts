import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BitcoinTransactionServiceBase } from "./base/bitcoinTransaction.service.base";

@Injectable()
export class BitcoinTransactionService extends BitcoinTransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
