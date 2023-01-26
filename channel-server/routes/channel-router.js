const db = require("../db/connection");
const router = require("express").Router();
const channelController = require("../controllers/channel-controller");

router.get("/get", channelController.getAllChannel);
router.get("/:id/get", channelController.getOneChannel);
router.post("/:id/post", channelController.postChannel);

module.exports = router;
