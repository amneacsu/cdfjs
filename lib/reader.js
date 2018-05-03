const descriptors = require('./descriptors');

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

function extractIR(buf, offset) {
  const RecordSize = buf.readInt32BE(offset + 0);
  const RecordType = buf.readInt32BE(offset + 4);

  const descriptor = descriptors[RecordType];

  if (descriptor === undefined) {
    throw new Error(`Unexpected RecordType ${RecordType}!`);
  }

  const result = { RecordSize, RecordType };
  let index = 8;

  for (key in descriptor) {
    const fieldValue = descriptor[key].read(buf, offset + index);
    result[key] = fieldValue;
    index += descriptor[key].length;
  }

  return result;
}

module.exports = {
  readInt32BE,
  readText,
  extractIR,
};
