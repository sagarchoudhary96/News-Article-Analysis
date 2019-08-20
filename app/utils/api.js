// Import aylien Textapi  
const aylien = require("aylien_textapi")

// Instance of aylien app
const textApi = new aylien({
    application_id: "YOUR_APP_ID",
    application_key: "YOUR_APP_KEY"
})

// Analyse text using aylien apii
exports.analyseText = (text) => {
    return new Promise((resolve, reject) => {
        textApi.sentiment({"text": text}, (err, response) => {
            if(err === null) {
                resolve(response)
            } else {
                reject($err)
            }
        })
    })
}