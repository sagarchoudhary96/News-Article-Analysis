// import apiUtils
const apiUtils = require("../app/utils/api")

// testApi
describe("testing Api", () => {
    test("Should return successful response", () => {
        return apiUtils.analyseText("Hello World!").then((res) => {
            expect(res.text).toEqual("Hello World!")
            expect(res.polarity).toEqual("neutral")
            expect(res.subjectivity).toEqual("subjective")
            expect(res.polarity_confidence).toBe(0.5079214572906494)
            expect(res.subjectivity_confidence).toBe(1)
        })
    })
})