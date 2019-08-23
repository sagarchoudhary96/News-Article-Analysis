// Analyser base route
const baseRoute = '/analyse'

// controller for analyser
const analyser = require('../controllers/analyser_controller')

module.exports = (app) => {
    app.get(baseRoute, analyser.getTestPage)
}