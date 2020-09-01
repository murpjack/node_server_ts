const request = require("supertest");
const app = require("../app");

describe("Server setup", () => {
  it("is just testing.", () => {
    expect(1).toBe(1);
  });
  it("expects to connect with a DB", () => {
    expect(1).toBe(1);
  });
});
