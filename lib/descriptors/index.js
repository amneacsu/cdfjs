const CDR = require('./CDR');
const GDR = require('./GDR');
const ADR = require('./ADR');

const IR_TYPE_CDR = 1;
const IR_TYPE_GDR = 2;

const IR_TYPE_ADR = 4;

module.exports = {
  [IR_TYPE_CDR]: CDR,
  [IR_TYPE_GDR]: GDR,
  [IR_TYPE_ADR]: ADR,
};
