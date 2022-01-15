const router = require("express").Router();
const { User, Post } = require("../../models");

// Show homepage with all posts
router.get("/", async (req, res) => {
  try {
    res.json({ message: "here is the homepage" });
    // const postData = await Post.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ["user_name"],
    //     },
    //   ],
    // });

    // const posts = postData.map((post) => post.get({ plain: true }));
    // res.render("homepage", {
    //   posts,
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
