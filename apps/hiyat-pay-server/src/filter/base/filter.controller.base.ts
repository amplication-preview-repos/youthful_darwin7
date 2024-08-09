/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FilterService } from "../filter.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FilterCreateInput } from "./FilterCreateInput";
import { Filter } from "./Filter";
import { FilterFindManyArgs } from "./FilterFindManyArgs";
import { FilterWhereUniqueInput } from "./FilterWhereUniqueInput";
import { FilterUpdateInput } from "./FilterUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FilterControllerBase {
  constructor(
    protected readonly service: FilterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Filter })
  @nestAccessControl.UseRoles({
    resource: "Filter",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFilter(@common.Body() data: FilterCreateInput): Promise<Filter> {
    return await this.service.createFilter({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        avatar: true,
        createdAt: true,
        emoji: true,
        id: true,
        photo: true,
        photoDuration: true,
        photoSharingDuration: true,
        profileColor: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        userProfileColor: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Filter] })
  @ApiNestedQuery(FilterFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Filter",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async filters(@common.Req() request: Request): Promise<Filter[]> {
    const args = plainToClass(FilterFindManyArgs, request.query);
    return this.service.filters({
      ...args,
      select: {
        avatar: true,
        createdAt: true,
        emoji: true,
        id: true,
        photo: true,
        photoDuration: true,
        photoSharingDuration: true,
        profileColor: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        userProfileColor: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Filter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Filter",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async filter(
    @common.Param() params: FilterWhereUniqueInput
  ): Promise<Filter | null> {
    const result = await this.service.filter({
      where: params,
      select: {
        avatar: true,
        createdAt: true,
        emoji: true,
        id: true,
        photo: true,
        photoDuration: true,
        photoSharingDuration: true,
        profileColor: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        userProfileColor: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Filter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Filter",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFilter(
    @common.Param() params: FilterWhereUniqueInput,
    @common.Body() data: FilterUpdateInput
  ): Promise<Filter | null> {
    try {
      return await this.service.updateFilter({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          avatar: true,
          createdAt: true,
          emoji: true,
          id: true,
          photo: true,
          photoDuration: true,
          photoSharingDuration: true,
          profileColor: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          userProfileColor: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Filter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Filter",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFilter(
    @common.Param() params: FilterWhereUniqueInput
  ): Promise<Filter | null> {
    try {
      return await this.service.deleteFilter({
        where: params,
        select: {
          avatar: true,
          createdAt: true,
          emoji: true,
          id: true,
          photo: true,
          photoDuration: true,
          photoSharingDuration: true,
          profileColor: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          userProfileColor: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
