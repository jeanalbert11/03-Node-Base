const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'This is the base number of the multiplication table'
    })
    .option('u', {
        alias: 'until',
        type: 'number',
        default: 10,
        describe: 'this is the limit of the multiplication table'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'this is the limit of the multiplication table'
    })
    .check( (argv, options) => {
        if( isNaN( argv.b ) ){
            throw 'this base must be a number'
        }
        return true;
    })
    .argv;


module.exports = argv;
