const getChannelList = "select channel_id,name from channel";
const getChannelInfo = (id) => {
  return `select * from channel where channel_id=${id}`;
};
const createChannel = (name) => {
  return `insert into channel (name) values ("${name}")`;
};
const getUserList = (id) => {
  return `select nickname from user join user_channel on user.user_id = user_channel.user_id where user.user_id= ${id}`;
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
