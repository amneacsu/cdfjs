module.exports = (length) => {
  return {
    length,
    read: (data, offset) => {
      const val = data.slice(offset, offset + length);
      return val.toString().replace(/\u0000/g, '');
    },
  };
};
