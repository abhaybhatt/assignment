const { Double } = require("mongodb");
const mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
  user_viewed_post: {
    type: Array,
    default: [],
  },
  user_commented_post: {
    type: Array,
    default: [],
  },
  user_shared_post: {
    type: Array,
    default: [],
  },
});
module.exports = mongoose.model("Post", postSchema);
