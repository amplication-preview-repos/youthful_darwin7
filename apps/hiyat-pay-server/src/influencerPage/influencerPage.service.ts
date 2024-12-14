import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InfluencerPageServiceBase } from "./base/influencerPage.service.base";

@Injectable()
export class InfluencerPageService extends InfluencerPageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
