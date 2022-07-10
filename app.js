require('colors');
const { inquirerMenu, inquirerPausa } = require('./helpers/inquirer');




const main = async () => {

    let opcion = '';

    do {
        opcion = await inquirerMenu();
        //console.log({ opcion })

        console.log('\n')
        if(opcion !== '0') await inquirerPausa();
        
    } while (opcion !== '0');
}

main();