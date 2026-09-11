const fs = require("fs/promises");

function currentDate(){    
    const now = new Date();
    const formattedDate = now.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).replace(',', '');
    return formattedDate; 
}


async function registerLog(){
    const file = "log.txt";
    const log = `Novo acesso registrado em: ${currentDate()} \n`;
    try{
        await fs.appendFile(file, log, 'utf-8');
        console.log("Log registrado com sucesso!!")
    } catch(error){
        console.error(error.message);
    }

}

registerLog();