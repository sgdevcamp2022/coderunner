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
  const { name } = req.body;
  const { user_id } = req.body;
  db.query(query.createChannel(name, null), (error, rows) => {
    if (error) throw error;
    res.send("ok");
  });
};

module.exports.getUserList = async (req, res) => {
  const id = req.params.id;
  db.query(query.getUserList(id), (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
};

module.exports.addUser = async (req, res) => {
  const { user_id } = req.body;
  const id = req.params.id;
  db.query(query.addUser(user_id, id), (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
};

module.exports.getPosts = async (req, res) => {
  const id = req.params.id;
  db.query(query.getPosts(id), (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
};

module.exports.writePosts = async (req, res) => {
  const { id, user_id, content } = req.body;
  db.query(query.writePosts(id, user_id, content), (error, rows) => {
    if (error) throw error;
    res.send("ok");
  });
};
