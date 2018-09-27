const readInternalRecord = require('./readInternalRecord');

module.exports = function(data) {
  const MN1 = data.readUInt32BE(0).toString(16);
  const MN2 = data.readUInt32BE(4).toString(16);

  const CDR = readInternalRecord(data, 8);
  const GDR = readInternalRecord(data, CDR.GDRoffset);

  return {
    MN1,
    MN2,
    CDR,
    GDR,
  };
};
