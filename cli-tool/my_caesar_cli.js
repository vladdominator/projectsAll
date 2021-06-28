const commander = require('commander');
const { createRead, createWrite } = require('./files/streams');
const CaesarCipher = require('./files/caesar-cipher');
const through2 = require('through2');
commander.version('0.0.1');
commander
    .requiredOption('-a, --action <action>', 'actions encode/decode')
    .requiredOption('-s, --shift <number>', 'shift', (shift) => parseInt(shift))
    .option('-i, --input <filename>', 'a input file')
    .option('-o, --output <filename>', 'an output file')
    ;

commander.parse(process.argv);

const options = commander.opts();
if (options.action !== 'decode' && options.action !== 'encode') {
   process.stderr.write('Should have encode/decode');
   process.exit(1);
}
if (!options.input) console.log(`Please input the data you want to ${options.action}`);
if(options.input && options.input === options.output) {
   process.stderr.write(`Can't use the same file for input and output`);
   process.exit(1);
}

module.exports = {
   input: options.input,
   output: options.output
};

createRead(options.input)
   .pipe(through2(function (chunk, enc, callback) {
      chunk = CaesarCipher(chunk.toString(), +options.shift, options.action); 
      this.push(chunk);
      callback();
   }))
   .pipe(createWrite(options.output));
