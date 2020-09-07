const request = require("supertest");
import * as dbHandler from './db-handler';
import app from "../app";
const apiBaseUrl = "/api/user";

console.log(2,dbHandler);

describe("Setup", () => {
  it("is just testing.", () => {
    expect(1).toBe(1);
  });
});


/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await dbHandler.connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());


describe("API", () => {
	it("reaches route '/getallusers' and returns status true.", async done => {
	  const response = await request(app).get(apiBaseUrl + "/getallusers")
	  console.log(response);
	  expect(response.status).toBe(200);
	  expect(response.body.success).toBe(true);
	  done();
	})

	// it("should GET a list from DB.", async done => {
	//   const response = await request(app).get(apiBaseUrl + "/getallusers")
	//   expect(1).toBe(2);

	//   done();
	// });

	// it("should create a new user.", async done => {
	//   expect(1).toBe(2);
	//   done();
	// });

	// it("should NOT create a new user with duplicate userID.", () => {
	//   expect(1).toBe(2);
	// });

	// it("should UPDATE details of an existing user.", () => {
	//   expect(1).toBe(2);
	// });

	// it("should DELETE an existing user from DB.", () => {
	//   expect(1).toBe(2);
	// });

});