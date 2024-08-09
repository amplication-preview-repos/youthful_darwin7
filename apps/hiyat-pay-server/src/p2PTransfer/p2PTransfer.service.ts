import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { P2PTransferServiceBase } from "./base/p2PTransfer.service.base";

@Injectable()
export class P2PTransferService extends P2PTransferServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
