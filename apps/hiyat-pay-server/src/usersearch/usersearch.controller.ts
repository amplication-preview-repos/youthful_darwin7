import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserSearchService } from "./usersearch.service";
import { SearchResultDto } from "../userSearch/SearchResultDto";

@swagger.ApiTags("userSearches")
@common.Controller("userSearches")
export class UserSearchController {
  constructor(protected readonly service: UserSearchService) {}

  @common.Get("/search")
  @swagger.ApiOkResponse({
    type: SearchResultDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SearchHiyatPayUsers(
    @common.Body()
    body: string
  ): Promise<SearchResultDto[]> {
        return this.service.SearchHiyatPayUsers(body);
      }
}
