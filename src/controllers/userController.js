/*
Callback funtions for app.get(), app.post() that are
being treated in their respective routes
*/
const blogModel = require('../models/blogs');

const post = async (req, res, next) => {
  try {
    const addBlog = await blogModel.create(req.body);
    res.json(addBlog);
  } catch (error) {
    next(error);
  }
};

const get = async (req, res, next) => {
  try {
    const allBlogs = await blogModel.find({});
    res.json(allBlogs);
  } catch (error) {
    next(error);
  }
};

const getByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneBlog = await blogModel.findById(id);
    res.json(oneBlog);
  } catch (error) {
    next(error);
  }
};

const put = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBlog = await blogModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedBlog);
  } catch (error) {
    next(error);
  }
};

const deleteHttp = async (req, res, next) => {
  try {
    const { id } = req.params;
    await blogModel.findByIdAndDelete(id);
    res.status(200).send(`DELETED from database with id -> ${id}`);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  post,
  get,
  getByID,
  put,
  deleteHttp,
};
