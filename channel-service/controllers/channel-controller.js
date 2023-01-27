const db = require("../db/connection");
const query = require("../db/channel-query");

module.exports.getChannelList = async (req, res) => {
  try {
    db.query(query.getChannelList);
  } catch {}
};
module.exports.getChannelInfo = async (req, res) => {
  try {
    db.query(query.getChannelInfo(id));
  } catch {}
};
module.exports.createChannel = async (req, res) => {
  try {
    db.query(query.createChannel(name, outline, private));
  } catch {}
};
