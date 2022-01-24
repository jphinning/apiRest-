/*
Callback funtions for app.get(), app.post() that are
being treated in their respective routes
*/

const post = (req, res) => {
  res.status(201).send('POST Route');
};

const get = (req, res) => {
  res.status(200).send('GET Route');
};

const getByID = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`GET route with ID -> ${id}`);
};

const put = (req, res) => {
  const { id } = req.params;
  res.status(201).send(`PUT route with id -> ${id}`);
};

const deleteHttp = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`DELETE Route with id -> ${id}`);
};

module.exports = {
  post,
  get,
  getByID,
  put,
  deleteHttp,
};
