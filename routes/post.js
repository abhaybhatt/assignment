const express = require("express");
const router = express.Router();
const { createPost, getAllPostScores } = require("../controllers/post");
router.post("/post", createPost);
router.get("/post", getAllPostScores);

module.exports = router;
