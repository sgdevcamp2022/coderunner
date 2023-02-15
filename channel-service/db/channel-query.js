const getChannelList = "select channel_id,name from channel";
const getChannelInfo = (id) => {
  return `select * from channel where channel_id=${id}`;
};
const createChannel = (name, id) => {
  return `insert into channel (name,channel_id) values ("${name}",${id})`;
};
const getUserList = (id) => {
  return `select * from user join user_channel on user.user_id = user_channel.user_id join channel on channel.channel_id = user_channel.channel_id where channel.name="${id}"`;
};
const addUser = (user_id, id) => {
  return `insert into user_channel (user_id,channel_id) values (${user_id}, ${id}) `;
};
const writePosts = (id, user_id, content) => {
  return `insert into channel_post (channel_id,user_id,content,created_at) values (${id},${user_id},${content},now())`;
};
const getPosts = (id) => {
  return `select user.nickname,channel_post.content,channel_post.created_at from channel_post left join user on channel_post.user_id=user.user_id where channel_post.channel_id=${id}`;
};
module.exports = {
  getChannelList,
  getChannelInfo,
  createChannel,
  getUserList,
  addUser,
  writePosts,
  getPosts,
};
