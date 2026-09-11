const fs = require("fs/promises");

async function readJson(){
    const file = "config.json";

    try{
        await fs.readFile(file, 'utf8');
        console.log("Configuração carregada para o curso [CURSO] no campus [CAMPUS]");
    } catch(error){
        console.error(error.message);
    }

}

readJson();