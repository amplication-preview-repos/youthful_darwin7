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
import { MatchmakingController } from "../matchmaking.controller";
import { MatchmakingService } from "../matchmaking.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  age: 42,
  city: "exampleCity",
  createdAt: new Date(),
  educationLevel: "exampleEducationLevel",
  eyeColor: "exampleEyeColor",
  height: 42,
  id: "exampleId",
  isBlocked: "true",
  race: "exampleRace",
  state: "exampleState",
  updatedAt: new Date(),
  user: "exampleUser",
  weight: 42,
  zipCode: "exampleZipCode",
};
const CREATE_RESULT = {
  age: 42,
  city: "exampleCity",
  createdAt: new Date(),
  educationLevel: "exampleEducationLevel",
  eyeColor: "exampleEyeColor",
  height: 42,
  id: "exampleId",
  isBlocked: "true",
  race: "exampleRace",
  state: "exampleState",
  updatedAt: new Date(),
  user: "exampleUser",
  weight: 42,
  zipCode: "exampleZipCode",
};
const FIND_MANY_RESULT = [
  {
    age: 42,
    city: "exampleCity",
    createdAt: new Date(),
    educationLevel: "exampleEducationLevel",
    eyeColor: "exampleEyeColor",
    height: 42,
    id: "exampleId",
    isBlocked: "true",
    race: "exampleRace",
    state: "exampleState",
    updatedAt: new Date(),
    user: "exampleUser",
    weight: 42,
    zipCode: "exampleZipCode",
  },
];
const FIND_ONE_RESULT = {
  age: 42,
  city: "exampleCity",
  createdAt: new Date(),
  educationLevel: "exampleEducationLevel",
  eyeColor: "exampleEyeColor",
  height: 42,
  id: "exampleId",
  isBlocked: "true",
  race: "exampleRace",
  state: "exampleState",
  updatedAt: new Date(),
  user: "exampleUser",
  weight: 42,
  zipCode: "exampleZipCode",
};

const service = {
  createMatchmaking() {
    return CREATE_RESULT;
  },
  matchmakings: () => FIND_MANY_RESULT,
  matchmaking: ({ where }: { where: { id: string } }) => {
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

describe("Matchmaking", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MatchmakingService,
          useValue: service,
        },
      ],
      controllers: [MatchmakingController],
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

  test("POST /matchmakings", async () => {
    await request(app.getHttpServer())
      .post("/matchmakings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /matchmakings", async () => {
    await request(app.getHttpServer())
      .get("/matchmakings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /matchmakings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/matchmakings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /matchmakings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/matchmakings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /matchmakings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/matchmakings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/matchmakings")
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
