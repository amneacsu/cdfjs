module.exports = {
  length: 4,
  read: (data, offset) => {
    return data.readInt32BE(offset);
  },
};
