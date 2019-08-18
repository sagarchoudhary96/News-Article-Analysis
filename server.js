// Import our app module
const app = require("./app")

// port to run our server
const port = 3000

// start server
app.listen(port, () => console.log(`starting server on port: ${port}`))