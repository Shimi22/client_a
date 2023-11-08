const dotenv = require('dotenv');
const fs = require('fs');
const message = require('./message');

dotenv.config();

const name = process.env.NAME;
const number = process.env.NUMBER;
const result = message.create(name, number);

console.log(result);

fs.writeFileSync('result.txt', result, 'utf-8');
