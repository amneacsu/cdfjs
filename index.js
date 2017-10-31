const fs = require('fs');
const cdfjs = require('./lib');

const data = fs.readFileSync('./samples/genesis_3dl2_gim_20040101_v01.cdf');
const out = cdfjs(data);
console.log(out);
