https://cdf.gsfc.nasa.gov/html/cdf_docs.html
https://spdf.gsfc.nasa.gov/pub/software/cdf/doc/cdf370/cdf37ifd.pdf

[Genesis Sample return mission (2001-2004)](https://genesismission.jpl.nasa.gov/)
[The Genesis Ion Monitor (GIM)](https://genesismission.jpl.nasa.gov/gm2/spacecraft/flight.html#GIM)
ftp://cdaweb.gsfc.nasa.gov/pub/data/genesis/gim/3dl2_gim/2004/genesis_3dl2_gim_20040101_v01.cdf

1. magic numbers
 * 0xCDF26002 (4-byte, unsigned integer with big-endian byte ordering)
   (Pre-V2.6, it is 0x0000FFFF.)
 * 4-byte unsigned integer of 0x0000FFFF for a regular CDF file or
0xCCCC0001 for a compressed CDF file

2. Internal records (IRs)
  * CDF Descriptor Record (CDR) - at offset 0x00000008
    * RecordSize
    * RecordType
    * GDRoffset
    * Version
    * Release
    * Encoding
    * Flags
  * Global Descriptor Record (GDR) - offset is stored in CDR
    * field RecordSize - 4-byte unsigned integer
    * field RecordType - 4-byte signed integer
  * rVariable Descriptor Record (rVDR)
  * ... other fields/records
