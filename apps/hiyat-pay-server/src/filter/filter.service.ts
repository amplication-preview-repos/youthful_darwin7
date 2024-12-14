import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FilterServiceBase } from "./base/filter.service.base";

@Injectable()
export class FilterService extends FilterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
