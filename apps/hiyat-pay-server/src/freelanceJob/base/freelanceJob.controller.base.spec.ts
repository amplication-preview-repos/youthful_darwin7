import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { FreelanceJobController } from "../freelanceJob.controller";
import { FreelanceJobService } from "../freelanceJob.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  category: "exampleCategory",
  createdAt: new Date(),
  id: "exampleId",
  jobDescription: "exampleJobDescription",
  jobTitle: "exampleJobTitle",
  postedDate: new Date(),
  updatedAt: new Date(),
  user: "exampleUser",
};
const CREATE_RESULT = {
  category: "exampleCategory",
  createdAt: new Date(),
  id: "exampleId",
  jobDescription: "exampleJobDescription",
  jobTitle: "exampleJobTitle",
  postedDate: new Date(),
  updatedAt: new Date(),
  user: "exampleUser",
};
const FIND_MANY_RESULT = [
  {
    category: "exampleCategory",
    createdAt: new Date(),
    id: "exampleId",
    jobDescription: "exampleJobDescription",
    jobTitle: "exampleJobTitle",
    postedDate: new Date(),
    updatedAt: new Date(),
    user: "exampleUser",
  },
];
const FIND_ONE_RESULT = {
  category: "exampleCategory",
  createdAt: new Date(),
  id: "exampleId",
  jobDescription: "exampleJobDescription",
  jobTitle: "exampleJobTitle",
  postedDate: new Date(),
  updatedAt: new Date(),
  user: "exampleUser",
};

const service = {
  createFreelanceJob() {
    return CREATE_RESULT;
  },
  freelanceJobs: () => FIND_MANY_RESULT,
  freelanceJob: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("FreelanceJob", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FreelanceJobService,
          useValue: service,
        },
      ],
      controllers: [FreelanceJobController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /freelanceJobs", async () => {
    await request(app.getHttpServer())
      .post("/freelanceJobs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        postedDate: CREATE_RESULT.postedDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /freelanceJobs", async () => {
    await request(app.getHttpServer())
      .get("/freelanceJobs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          postedDate: FIND_MANY_RESULT[0].postedDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /freelanceJobs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/freelanceJobs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /freelanceJobs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/freelanceJobs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        postedDate: FIND_ONE_RESULT.postedDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /freelanceJobs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/freelanceJobs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        postedDate: CREATE_RESULT.postedDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/freelanceJobs")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
