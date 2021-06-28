const fs = require('fs');
const { createReadStream, createWriteStream } = fs;
const consoleError = () => {
   process.stderr.write('not found file');
   process.exit(1);
}

function createRead(input) {
   return input ? createReadStream(input).on('error', consoleError) : process.stdin;
}

function createWrite(output) {
   try {
      if(output) {
         fs.readFileSync(output, "utf8");
      }
      return output ? createWriteStream(output, { flags: 'a' }).on('error', consoleError) : process.stdout;
   }
   catch {
      consoleError();
   }
}

module.exports = {
   createRead,
   createWrite
};