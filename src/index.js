const readInternalRecord = require('./readInternalRecord');

class CDF {
  constructor(data) {
    this.data = data;

    const MN1 = data.readUInt32BE(0).toString(16);
    const MN2 = data.readUInt32BE(4).toString(16);

    this.MN1 = MN1;
    this.MN2 = MN2;
  }

  get CDR() {
    return readInternalRecord(this.data, 8);
  }

  get GDR() {
    return readInternalRecord(this.data, this.CDR.GDRoffset);
  }

  get rVDRFirst() {
    const rVDRhead = this.GDR.rVDRhead;

    // console.log(rVDRhead);
  }

  get zVDRFirst() {
    const zVDRhead = this.GDR.zVDRhead;

    // TODO read
    // const x = readInternalRecord(this.data, zVDRhead);
  }
}

module.exports = function(data) {
  return new CDF(data);
};
