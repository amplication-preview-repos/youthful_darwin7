import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MatchmakingServiceBase } from "./base/matchmaking.service.base";

@Injectable()
export class MatchmakingService extends MatchmakingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
