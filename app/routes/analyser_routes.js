// Analyser base route
const baseRoute = '/'

// controller for analyser
const analyser = require('../controllers/analyser_controller')

module.exports = (app) => {
    app.get(baseRoute, analyser.getHomePage)
}