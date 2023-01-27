const db = require("../db/connection");
const query = require("../db/channel-query");

module.exports.getChannelList = async (req, res) => {
  try {
    db.query(query.getChannelList);
  } catch {
    return res.status(500).json(err);
  }
};
module.exports.getChannelInfo = async (req, res) => {
  const id = req.params.id;
  try {
    const rows = db.query(query.getChannelInfo(id));
    return res.json(rows[0]);
  } catch {
    return res.status(500).json(err);
  }
};
module.exports.createChannel = async (req, res) => {
  const { name, outline, private } = req.body;
  try {
    db.query(query.createChannel(name, outline, private));
    return res.json({ message: "created!" });
  } catch {
    return res.status(500).json(err);
  }
};
