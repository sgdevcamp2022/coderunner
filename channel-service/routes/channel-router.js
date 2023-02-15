const router = require("express").Router();
const channelController = require("../controllers/channel-controller");

router.get("/get", channelController.getChannelList);
router.get("/:id/get", channelController.getChannelInfo);
router.post("/post", channelController.createChannel);
router.get("/:id/users/get", channelController.getUserList);
router.post("/:id/user/post", channelController.addUser);
router.get("/:id/posts/get", channelController.getPosts);
router.post("/posts/write", channelController.writePosts);

module.exports = router;
