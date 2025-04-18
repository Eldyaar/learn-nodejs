const Router = require('../framework/Router')
const controller = require('./user-controller')

const router = new Router()

router.get('/users', controller.getUser)
router.post('/users', controller.createUser)

module.exports = router
