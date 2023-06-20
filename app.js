const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');

require('colors');


console.clear();

createFile( argv.b, argv.l, argv.h )
    .then( file => console.log(file.rainbow, 'created') )
    .catch( err => console.log(err) );
