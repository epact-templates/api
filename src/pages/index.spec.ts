import app from "epact:app";
import request from "supertest";
import { expect, it } from "vitest";

it("GET /", async (): Promise<void> => {
  const res = await request(app).get("/");

  expect(res.body).toEqual({
    message: "Hello Epact!",
  });
});
