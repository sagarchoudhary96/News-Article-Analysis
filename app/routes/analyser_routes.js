// Analyser base route
const baseRoute = '/analyse'

// controller for analyser
const analyser = require('../controllers/analyser_controller')

module.exports = (app) => {
    app.get(baseRoute + '/test', analyser.getTestPage)
    app.post(baseRoute, analyser.getResult)
}