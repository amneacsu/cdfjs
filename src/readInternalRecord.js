import descriptors from './descriptors';

export const readInternalRecord = (buf, offset) => {
  const RecordSize = buf.readInt32BE(offset + 0);
  const RecordType = buf.readInt32BE(offset + 4);

  const descriptor = descriptors[RecordType];

  if (descriptor === undefined) {
    throw new Error(`Unexpected RecordType ${RecordType}!`);
  }

  const result = { RecordSize, RecordType };
  let index = 8;

  for (key in descriptor) {
    const { value, length } = descriptor[key](buf, offset + index, result);
    result[key] = value;
    index += length;
  }

  return result;
};
