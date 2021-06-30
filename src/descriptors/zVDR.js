const readInt32BE = require('../readInt32BE');
const readText = require('../readText');

const readName = readText(64);

module.exports = {
  // The file offset of the next VDR. Beginning with CDF V2.1 the last VDR will
  // containa a file offset of 0x00000000 in this field (to indicate the end of
  // the VDRs). Prior to CDF V2.1 this file offset is undefined in the last VDR.
  VDRnext: readInt32BE,

  // The data type of this entry. The possible data type internal values are
  // described in Section 5.3
  DataType: readInt32BE,

  // The maximum record number written to this variable. Variable records are
  // numbered beginning at zero (0). If no records have been written to this
  // variable, this field will contain negative one (-1).
  MaxRec: readInt32BE,

  // The file offset of the first VariableIndexRecord (VXR). VXRs are used in
  // single-file CDFs to store the locations of VariableValueRecords (VVRs).
  // VVRs are used to store variable records in single-file CDFs. VXRs are
  // described in Section 2.7 and VVRs are described in Section 2.8. The first
  // VXR contains the file offset of the next VXR and so on. The last VXR contains
  // a file offset of 0x00000000 forthe file offset of the next VXR (to indicate
  // the end of the VXRs). In single-file CDFs, if no records have been written
  // to this variable, this field will contain a file offset of 0x00000000.
  // For multi-file CDFs variable records are stored in separate files and this
  // field will always contain a file offset of 0x00000000. The variable files of
  // a multi-file CDF are described in Chapter 3.
  VXRhead: readInt32BE,

  // The file offset of the last VXR. See the VXR head field above for a description
  // of VXRs
  VXRtail: readInt32BE,

  // Boolean flags, one per bit, describing some aspect of this variable. Bit
  // numbering is described in Chapter 5. The meaning of each bit is as follows...
  // 0. The record variance of this variable. Set indicates a TRUE record variance.
  // Clear indicates a FALSE record variance.
  // 1. Whether or not a pad value is specified for this variable. Set indicates
  // that a pad value has been specified. Clear indicates that a pad value has
  // not been specified. The PadValue field described below is only present if a
  // pad value has been specified.
  // 2. Whether or not a compression method is applied to this variable. Set
  // indicates that a compression has been used. Clear indicates that a
  // compression has not been used. The CPR or SPR offset field described below
  // provides the offset of the CompressedParametersRecord if this compression
  // bit is set
  // 3-31. Reserved for future use.These bits are always clear.
  Flags: readInt32BE,

  // Type of sparserecords: no sparserecords, padded sparserecords, or previous
  // sparserecords.
  sRecords: readInt32BE,

  // Reserved for future use. Always set to zero (0).
  rfuB: readInt32BE,

  // Reserved for future use. Always set to negative one (-1).
  rfuC: readInt32BE,

  // Reserved for future use. Always set to negative one (-1).
  rfuF: readInt32BE,

  // The number of elements of the data type (specified by the DataType field)
  // for this variable at each value
  NumElems: readInt32BE,

  // This variable's number. Variables are numbered beginning with zero (0).
  // Note that rVariables and zVariables are each numbered beginning with zero
  // (0) and are considered two separate groups of variables.
  Num: readInt32BE,

  // CPR/SPR offset depending on bits set in 'Flags'. If neither compression nor
  // sparsearrays, set to 0xFFFFFFFF.
  CPRorSPRoffset: readInt32BE,

  // Blocking factor for this variable.
  BlockingFactor: readInt32BE,

  // The name of this variable. This field is always 64 bytes in length. If the
  // number of characters in the name is less than 64, a NUL character (0x00)
  // will be used to terminate the string. In that case, the characters beyond
  // the NUL-terminator (up to the size of this field) are undefined.
  Name: readText(64),

  // The number of dimensions for this zVariable. This field will not be present
  // if this is an rVDR (rVariable).
  zNumDims: readInt32BE,

  // Zero or more contiguous dimension sizes for this zVariable depending on the
  // value of the zNumDims field. This field will not bepresent if this is an
  // rVDR (rVariable).
  zDimSizes: (data, offset, record) => {
    const zDimSizes = [];

    for (let i = 0; i < record.zNumDims; i += 1) {
      zDimSizes.push(readInt32BE(data, offset + i * 4));
    }

    return {
      value: zDimSizes,
      length: record.zNumDims * 4,
    };
  }

  // Zero or more contiguous dimension variances. If this is an rVDR, the number
  // of dimension variances will correspond to the value of the rNumDims field
  // of the GDR. If this is a zVDR, the number of dimension variances will
  // correspond to the value of the zNumDims field in this zVDR. A value of
  // negative one (-1) indicates a TRUE dimension variance and a value of zero
  // (0) indicates a FALSE dimension variance.
  // DimVarys: (data, offset) =>
};
