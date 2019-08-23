// we will use supertest to test HTTP requests/responses
const request = require("supertest");

// requires app for routes
const app = require("../app")

// home page route test
describe("test Route: '/analyse'", () => {
    test("Should return Hello Word!", async () => {
        const response = await request(app).get("/analyse")
        expect(response.text).toEqual("Hello World!")
        expect(response.statusCode).toEqual(200)
    })
})