const fs = require('fs');
const cdfjs = require('../');

const data = fs.readFileSync('./samples/genesis_3dl2_gim_20040101_v01.cdf');
// const data = fs.readFileSync('./samples/dawn_helio1day_position_20070928_v01.cdf');
const out = cdfjs(data);
