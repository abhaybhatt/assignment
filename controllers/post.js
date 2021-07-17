const Post = require("../models/post");

exports.createPost = async (req, res) => {
  const post = new Post();
  post.user_viewed_post = [...new Set(req.body.user_viewed_post)];
  post.user_commented_post = [...new Set(req.body.user_commented_post)];
  post.user_shared_post = [...new Set(req.body.user_shared_post)];
  post.unique_views = post.user_viewed_post.length;
  post.unique_comments = post.user_commented_post.length;
  post.unique_shares = post.user_shared_post.length;
  await post.save((err, createdPost) => {
    if (err) {
      return res
        .status(400)
        .json({ error: "Not able to create user in database" });
    }
    return res.json({ createdPost });
  });
};

exports.getAllPostScores = async (req, res) => {
  var final_score_array = [];
  await Post.find().exec((err, post) => {
    if (err) {
      return res.status(400).json({ error: "No Post found" });
    } else {
      post.map((p) => {
        var final_score =
          0.25 * p.user_viewed_post.length +
          0.5 * p.user_commented_post.length +
          0.25 * p.user_shared_post.length;
        final_score_array.push({ "post id": p._id, final_score: final_score });
      });
      return res.json(final_score_array);
    }
  });
};

exports.getPostById = (req, res, next, id) => {
  Post.findById(id).exec((err, post) => {
    if (err || !post) {
      return res.status(400).json({
        error: "No post with this id was found in DB",
      });
    }
    req.post = post;
    next();
  });
};

exports.getPostDetails = (req, res) => {
  return res.json(req.post);
};
