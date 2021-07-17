const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPostScores,
  getPostById,
  getPostDetails,
} = require("../controllers/post");

router.param("postId", getPostById);
router.post("/post", createPost);
router.get("/post", getAllPostScores);
router.get("/postDetail/:postId", getPostDetails);

module.exports = router;
