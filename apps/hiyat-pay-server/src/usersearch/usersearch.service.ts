import { Injectable } from "@nestjs/common";
import { SearchResultDto } from "../userSearch/SearchResultDto";

@Injectable()
export class UserSearchService {
  constructor() {}
  async SearchHiyatPayUsers(args: string): Promise<SearchResultDto[]> {
    throw new Error("Not implemented");
  }
}
