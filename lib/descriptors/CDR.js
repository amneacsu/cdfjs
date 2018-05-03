const {
  readInt32BE,
  readText,
} = require('../reader');

module.exports = () => ({
  GDRoffset: readInt32BE,
  Version: readInt32BE,
  Release: readInt32BE,
  Encoding: readInt32BE,
  Flags: readInt32BE,
  rfuA: readInt32BE,
  rfuB: readInt32BE,
  Increment: readInt32BE,
  rfuD: readInt32BE,
  rfuE: readInt32BE,
  Copyright: readText(256),
});
