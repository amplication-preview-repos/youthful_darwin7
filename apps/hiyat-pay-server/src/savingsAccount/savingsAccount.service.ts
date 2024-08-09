import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SavingsAccountServiceBase } from "./base/savingsAccount.service.base";

@Injectable()
export class SavingsAccountService extends SavingsAccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
