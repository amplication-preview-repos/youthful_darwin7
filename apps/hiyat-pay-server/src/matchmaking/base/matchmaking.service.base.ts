/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Matchmaking as PrismaMatchmaking } from "@prisma/client";

export class MatchmakingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MatchmakingCountArgs, "select">
  ): Promise<number> {
    return this.prisma.matchmaking.count(args);
  }

  async matchmakings(
    args: Prisma.MatchmakingFindManyArgs
  ): Promise<PrismaMatchmaking[]> {
    return this.prisma.matchmaking.findMany(args);
  }
  async matchmaking(
    args: Prisma.MatchmakingFindUniqueArgs
  ): Promise<PrismaMatchmaking | null> {
    return this.prisma.matchmaking.findUnique(args);
  }
  async createMatchmaking(
    args: Prisma.MatchmakingCreateArgs
  ): Promise<PrismaMatchmaking> {
    return this.prisma.matchmaking.create(args);
  }
  async updateMatchmaking(
    args: Prisma.MatchmakingUpdateArgs
  ): Promise<PrismaMatchmaking> {
    return this.prisma.matchmaking.update(args);
  }
  async deleteMatchmaking(
    args: Prisma.MatchmakingDeleteArgs
  ): Promise<PrismaMatchmaking> {
    return this.prisma.matchmaking.delete(args);
  }
}