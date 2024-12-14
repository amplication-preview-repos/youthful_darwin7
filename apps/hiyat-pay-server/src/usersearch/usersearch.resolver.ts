import * as graphql from "@nestjs/graphql";
import { SearchResultDto } from "../userSearch/SearchResultDto";
import { UserSearchService } from "./usersearch.service";

export class UserSearchResolver {
  constructor(protected readonly service: UserSearchService) {}

  @graphql.Query(() => [SearchResultDto])
  async SearchHiyatPayUsers(
    @graphql.Args("args")
    args: string
  ): Promise<SearchResultDto[]> {
    return this.service.SearchHiyatPayUsers(args);
  }
}
