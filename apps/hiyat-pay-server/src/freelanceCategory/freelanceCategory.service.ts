import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FreelanceCategoryServiceBase } from "./base/freelanceCategory.service.base";

@Injectable()
export class FreelanceCategoryService extends FreelanceCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
