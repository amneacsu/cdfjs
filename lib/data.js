const readInt32BE = {
  length: 4,
  read: (data, offset) => {
    return data.readInt32BE(offset);
  },
};

const readText = (length) => {
  return {
    length,
    read: (data, offset) => {
      const val = data.slice(offset, offset + length);
      return val.toString().replace(/\u0000/g, '');
    },
  };
};

const readLinkedList = readInt32BE;

module.exports = {
  readInt32BE,
  readText,
  readLinkedList,
};
