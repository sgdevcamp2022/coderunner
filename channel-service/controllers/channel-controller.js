const db = require("../db/connection");
const query = require("../db/channel-query");

module.exports.getChannelList = async (req, res) => {
  db.query(query.getChannelList, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
};
module.exports.getChannelInfo = async (req, res) => {
  const id = req.params.id;

  db.query(query.getChannelInfo(id), (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
};
module.exports.createChannel = async (req, res) => {
  const { name, outline, private } = req.body;

  db.query(query.createChannel(name, outline, private), (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
};
