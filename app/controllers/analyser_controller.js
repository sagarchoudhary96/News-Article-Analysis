// import api util
const apiUtils = require("../utils/api")

// Home Page
exports.getHomePage = (req, res) => {
    return res.send("Hello World!")
}