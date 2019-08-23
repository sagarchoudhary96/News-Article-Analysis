// import api util
const apiUtils = require("../utils/api")

// Home Page
exports.getTestPage = (req, res) => {
    return res.send("Hello World!")
}