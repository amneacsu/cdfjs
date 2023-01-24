export const readInt32BE = (data, offset) => {
  return {
    value: data.readInt32BE(offset),
    length: 4,
  };
};
