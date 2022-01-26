const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
});

const Blogs = model('Blogs', blogSchema);

module.exports = Blogs;
