
import fs from 'fs';

function currentDate(){
    const now = new Date();
    const formattedDate = now.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).replace(',', '');
    return formattedDate;
}

async function exportTextFile(){
    const studentsArray = await getData();
    const header = `Relatório Gerado para FATEC - ${currentDate()}`;
    const students = studentsArray.join('\n');

    const text = `${header}\n\n${students}`;
    
    fs.writeFile('export_relatorio.txt', text, 'utf-8', (error) => {
        if(error){
            return console.error('Erro ao gerar o arquivo: ', error.message);
        }
        console.log("Relatório exportado com sucesso!")
    });
}

async function getData(){
    const pathFile = "./estudantes.csv";
    const file = await fs.promises.readFile(pathFile, 'utf-8');

    let regex = /[^\n]+,\d+/gmi;
    const arrayResults = [];

    let temp;
    while ((temp = regex.exec(file)) != null){
        arrayResults.push(temp[0]);
    }
    return arrayResults.length === 0 ? "Não há dados!" : arrayResults;
}


// Exportando arquivo .csv para .txt
exportTextFile();

