/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, BankTransfer as PrismaBankTransfer } from "@prisma/client";

export class BankTransferServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.BankTransferCountArgs, "select">
  ): Promise<number> {
    return this.prisma.bankTransfer.count(args);
  }

  async bankTransfers(
    args: Prisma.BankTransferFindManyArgs
  ): Promise<PrismaBankTransfer[]> {
    return this.prisma.bankTransfer.findMany(args);
  }
  async bankTransfer(
    args: Prisma.BankTransferFindUniqueArgs
  ): Promise<PrismaBankTransfer | null> {
    return this.prisma.bankTransfer.findUnique(args);
  }
  async createBankTransfer(
    args: Prisma.BankTransferCreateArgs
  ): Promise<PrismaBankTransfer> {
    return this.prisma.bankTransfer.create(args);
  }
  async updateBankTransfer(
    args: Prisma.BankTransferUpdateArgs
  ): Promise<PrismaBankTransfer> {
    return this.prisma.bankTransfer.update(args);
  }
  async deleteBankTransfer(
    args: Prisma.BankTransferDeleteArgs
  ): Promise<PrismaBankTransfer> {
    return this.prisma.bankTransfer.delete(args);
  }
}