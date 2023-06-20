const fs = require('fs');
const colors = require('colors');

const createFile = async(base = 5, list = false, until = 10 ) => {

    try {

        let exit  = '';
        let print = '';
        
        for( let i = 1; i <= until; i++ ) {
            exit  += `${ base } x ${ i } = ${ base * i }\n`;
            print += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
        }

        if ( list ) {
            console.log('===================='.yellow);
            console.log('   Table of:'.yellow, colors.blue( base ) );
            console.log('===================='.yellow);

            console.log(print);
        }
        

        fs.writeFileSync( `./output/table-${ base }.txt`, exit );


        return `table-${ base }.txt`;
        
    } catch (err) {
        throw err;
    }



}

module.exports = {
    createFile
}
