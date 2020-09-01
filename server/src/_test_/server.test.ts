// const request = require("supertest");
import app from "../app";

describe("Server setup", () => {
  it("is just testing.", () => {
    expect(1).toBe(1);
  });
  it("expects to connect with a DB", () => {
    expect(1).toBe(2);
  });
});
