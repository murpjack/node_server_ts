const request = require("supertest");
import app from "../app";

describe("Setup", () => {
  it("is just testing.", () => {
    expect(1).toBe(1);
  });
});

describe("API", () => {
	it('gets the test endpoint', async done => {
	  const response = await request(app).get('/api/test')
	  expect(response.status).toBe(200);
	  expect(response.body.message).toBe('pass!');
	  done()
	})

	it("should create a new user.", () => {
	  expect(1).toBe(2);
	});

	it("should NOT create a new user with duplicate userID.", () => {
	  expect(1).toBe(2);
	});

	it("should return a list from DB.", () => {
	  expect(1).toBe(2);
	});

	it("should UPDATE details of an existing user.", () => {
	  expect(1).toBe(2);
	});

	it("should DELETE an existing user from DB.", () => {
	  expect(1).toBe(2);
	});

});