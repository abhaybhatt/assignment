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
  unique_views: {
    type: Number,
    default: 0,
  },
  unique_comments: {
    type: Number,
    default: 0,
  },
  unique_shares: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("Post", postSchema);
