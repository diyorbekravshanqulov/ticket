import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("User (e2e)", () => {
  let app: INestApplication;
  let token: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    // Perform signin to get the token for authorization
    const response = await request(app.getHttpServer())
      .post("/auth/signin")
      .send({
        email: "katimjond@gmail.com",
        login: "karim0011",
      });
    token = response.body.token;
  });

  describe("GET /users", () => {
    it("should return 200 OK with valid token", () => {
      return request(app.getHttpServer())
        .get("/admin")
        .set("Authorization", `Bearer ${token}`)
        .expect("Content-Type", /json/)
        .expect(200);
    });

    it("should return 401 Unauthorized without token", () => {
      return request(app.getHttpServer())
        .get("/admin")
        .expect("Content-Type", /json/)
        .expect(401);
    });
  });

  describe("POST /auth/signup", () => {
    it("should create a new user and return 201 Created", async () => {
      return request(app.getHttpServer())
        .post("/auth/signup")
        .send({
          name: "user30303",
          email: "user101@gmail.com",
          login: "100/1Aa@",
        })
        .expect("Content-Type", /json/)
        .expect(201)
        .then((response) => {
          expect(response.body).toHaveProperty("token");
        });
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
