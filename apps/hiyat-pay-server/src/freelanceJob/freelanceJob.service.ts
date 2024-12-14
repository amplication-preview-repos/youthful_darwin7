import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FreelanceJobServiceBase } from "./base/freelanceJob.service.base";

@Injectable()
export class FreelanceJobService extends FreelanceJobServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
