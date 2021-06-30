const readInt32BE = require('../readInt32BE');
const readText = require('../readText');

const readName = readText(64);

module.exports = {
  ADRnext: readInt32BE,
  AgrEDRhead: readInt32BE,
  Scope: readInt32BE,
  Num: readInt32BE,
  NgrEntries: readInt32BE,
  MAXgrEntry: readInt32BE,
  rfuA: readInt32BE,
  AzEDRhead: readInt32BE,
  NzEntries: readInt32BE,
  MAXzEntry: readInt32BE,
  rfuE: readInt32BE,
  Name: readText(64),
};
