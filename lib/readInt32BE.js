module.exports = (data, offset) => {
  return {
    value: data.readInt32BE(offset),
    length: 4,
  };
};
