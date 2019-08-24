// we will use supertest to test HTTP requests/responses
const request = require("supertest");

// requires app for routes
const app = require("../app")

// home page route test
describe("test Route: '/analyse/test'", () => {
    test("Should return Hello Word!", async () => {
        const response = await request(app).get("/analyse/test")
        expect(response.text).toEqual("Hello World!")
        expect(response.statusCode).toEqual(200)
    })
})

// api route test
describe("test Route: '/analyse'", () => {
    test("Should return 200 OK with response", async () => {
        const response = await request(app).post("/analyse").send({"text": "Hello World!", "isUrl": false})
        expect(response.statusCode).toEqual(200)
        expect(response.body.polarity).toEqual("neutral")
    })
})