import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankTransferServiceBase } from "./base/bankTransfer.service.base";

@Injectable()
export class BankTransferService extends BankTransferServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
