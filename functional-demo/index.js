const fs = require('fs-extra');
const path = require('path');
const processor = require('./processor');

const data = fs.readJsonSync(path.join(__dirname, '../data/zips-fixed.json'));

const output = path.join(__dirname, 'out/output.json')

fs.writeJsonSync(output, processor.process(data));