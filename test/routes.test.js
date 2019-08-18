// we will use supertest to test HTTP requests/responses
const request = require("supertest");

// requires app for routes
const app = require("../app")

// home page route test
describe("test homePage Route: '/'", () => {
    test("Should return Hello Word!", async () => {
        const response = await request(app).get("/")
        expect(response.text).toEqual("Hello World!")
        expect(response.statusCode).toEqual(200)
    })
})