const userController = require ('../controllers/userController')

const userRoutes = (app) => {
	app.post('/user', userController.post)
	app.get('/user', userController.get)
	app.get('/user/:id', userController.getByID)
	app.put('user/:id', userController.put)
	app.delete('user/:id', userController.deleteHttp)
}

module.exports = userRoutes