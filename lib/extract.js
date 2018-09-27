const descriptors = require('./descriptors');

module.exports = (buf, offset) => {
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
};
