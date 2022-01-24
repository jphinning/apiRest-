const userController = require('../controllers/userController');

const userRoutes = (app) => {
  app.post('/users', userController.post);
  app.get('/users', userController.get);
  app.get('/users/:id', userController.getByID);
  app.put('/users/:id', userController.put);
  app.delete('/users/:id', userController.deleteHttp);
};

module.exports = userRoutes;
