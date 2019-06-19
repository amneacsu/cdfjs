const CDR = require('./CDR');
const GDR = require('./GDR');
const ADR = require('./ADR');
const zVDR = require('./zVDR');

const IR_TYPE_CDR = 1;
const IR_TYPE_GDR = 2;

const IR_TYPE_ADR = 4;
const IR_TYPE_zVDR = 8;

module.exports = {
  [IR_TYPE_CDR]: CDR,
  [IR_TYPE_GDR]: GDR,
  [IR_TYPE_ADR]: ADR,
  [IR_TYPE_zVDR]: zVDR,
};
