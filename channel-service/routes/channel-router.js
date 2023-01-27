const router = require("express").Router();
const channelController = require("../controllers/channel-controller");

router.get("/get", channelController.getChannelList);
router.get("/:id/get", channelController.getChannelInfo);
router.post("/:id/post", channelController.createChannel);

module.exports = router;
