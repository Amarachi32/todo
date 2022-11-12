const express = require("express");
const post = require("../models/posts.model");
const postRouter = express.Router();
const {
  retrieveTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/postControllers");

// for crud operations

postRouter.get("/store/:id", retrieveTodo);
postRouter.post("/posts/store", addTodo);
postRouter.post("/update_id/:id", updateTodo);
// delete action
postRouter.delete("/delete_post/:id", deleteTodo);

// postRouter.get("/readall", async (req, res) => {
//   const posts = await post.find({});
//   res.render("readall", { posts });
// });

// postRouter.post("/readall/:human", async (req, res) => {
//   const posts = await post.find({
//     "&or": [{ title: { $regex: req.query.human } }],
//   });
//   res.render("readone", { posts });
// });

module.exports = { postRouter };
