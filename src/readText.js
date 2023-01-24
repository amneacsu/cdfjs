export const readText = (length) => {
  return (data, offset) => {
    return {
      value: data.slice(offset, offset + length).toString().replace(/\u0000/g, ''),
      length,
    };
  };
};
