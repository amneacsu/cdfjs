import CDR from './CDR';
import GDR from './GDR';
import ADR from './ADR';
import zVDR from './zVDR';

const IR_TYPE_CDR = 1;
const IR_TYPE_GDR = 2;

const IR_TYPE_ADR = 4;
const IR_TYPE_zVDR = 8;

export default {
  [IR_TYPE_CDR]: CDR,
  [IR_TYPE_GDR]: GDR,
  [IR_TYPE_ADR]: ADR,
  [IR_TYPE_zVDR]: zVDR,
};
