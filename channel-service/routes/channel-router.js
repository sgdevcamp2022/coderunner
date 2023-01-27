const router = require("express").Router();
const channelController = require("../controllers/channel-controller");

router.get("/get", channelController.getChannelList);
router.get("/:id/get", channelController.getChannelInfo);
router.post("/post", channelController.createChannel);

module.exports = router;
