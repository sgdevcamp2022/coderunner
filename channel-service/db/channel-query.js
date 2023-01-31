const getChannelList = "select name from channel";
const getChannelInfo = (id) => {
  return `select * from channel where channel_id=${id}`;
};
const createChannel = (name, outline, private) => {
  return `insert into channel (name,outline,private) values (${name},${outline},${private})`;
};
const getUserList = (id) => {
  return `select user_id from user_channel where channel_id=${id}`;
};
const addUser = (user_id, id) => {
  return `insert into user_channel (user_id,channel_id) values (${user_id}, ${id}) `;
};
module.exports = {
  getChannelList,
  getChannelInfo,
  createChannel,
  getUserList,
  addUser,
};
