// import api util
const apiUtils = require("../utils/api")

// Home Page
exports.getTestPage = (req, res) => {
    return res.send("Hello World!")
}

// fetch api data
exports.getResult = (req, res) => {
    const body = req.body
    const data = body.isUrl === true ? {"url": body.text} : {"text": body.text}

    apiUtils.analyseText(data).then((result) => {
        res.send(result)
    }).catch(err => {
        res.status(400).send({"error": err.message})
    })
}