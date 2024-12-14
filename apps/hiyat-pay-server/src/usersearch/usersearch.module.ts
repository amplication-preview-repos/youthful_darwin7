import { Module } from "@nestjs/common";
import { UserSearchService } from "./usersearch.service";
import { UserSearchController } from "./usersearch.controller";
import { UserSearchResolver } from "./usersearch.resolver";

@Module({
  controllers: [UserSearchController],
  providers: [UserSearchService, UserSearchResolver],
  exports: [UserSearchService],
})
export class UserSearchModule {}
