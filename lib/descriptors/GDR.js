const readInt32BE = require('../readInt32BE');

module.exports = {
  rVDRhead: readInt32BE,
  zVDRhead: readInt32BE,
  ADRhead: readInt32BE,
  eof: readInt32BE,
  NrVars: readInt32BE,
  NumAttr: readInt32BE,
  rMaxRec: readInt32BE,
  rNumDims: readInt32BE,
  NzVars: readInt32BE,
  UIRhead: readInt32BE,
  rfuC: readInt32BE,
  rfuD: readInt32BE,
  rfuE: readInt32BE,
  rDimSizes: readInt32BE,
};
