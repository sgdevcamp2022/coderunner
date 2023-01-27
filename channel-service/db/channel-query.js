const getChannelList = "select name from channel";
const getChannelInfo = (id) => {
  return `select * from channel where channel_id is ${id}`;
};
const createChannel = (name, outline, private) => {
  return `insert into channel (name,outline,private) values (${name},${outline},${private})`;
};

module.exports = { getChannelList, getChannelInfo, createChannel };
