// const express = require('express')
const post = require("../models/posts.model");
// const {  retrieveTodo } = express.Router()

const retrieveTodo = async (req, res) => {
  const id = req.params.id;
  await post
    .findById(id)
    .then((read) => {
      res.render("readone", { post: read });
      console.log(result);
    })
    .catch((error) => console.log("error"));
};

const addTodo = async (req, res) => {
  try {
    const posts = await post.create(req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  await post
    .findByIdAndUpdate(id, req.body)
    .then((result) => {
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;
  await post
    .findByIdAndDelete(id)
    .then((result) => {
      res.json({
        status: true,
        message: "post deleted",
        redirect: "/",
      });
    })
    .catch((error) => {
      res.json({
        status: false,
        message: "cannot delete",
      });
    });
};

module.exports = {
  retrieveTodo,
  addTodo,
  updateTodo,
  deleteTodo,
};
