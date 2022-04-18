// 5. O serviço Current weather data pode ser encontrado no link a seguir. Observe que ele
// não é o mesmo utilizado em aula.
// https://openweathermap.org/current
// Faça um programa que, utilizando promises e as funções then/catch, exibe a temperatura
// atual (atributo chamado temp). O programa deve ser um loop que exibe as seguintes
// opções para o usuário:
// 1- Digitar latitude e longitude
// 2- Sair
// O programa fica em loop até que o usuário digite 2. Ao digitar 1, o usuário deve
// informar os valores de latitude e longitude da localização da qual deseja saber a
// temperatura atual. Use um arquivo .env e o pacote dotenv para configurar uma variável
// de ambiente que indica qual unidade de medida de temperatura deve ser utilizada:
// Kelvin, Fahrenheit ou Celsius. Lembre-se de armazenar a chave de API no arquivo .env
// e de tomar o cuidado de não armazená-lo no sistema de controle de versão.

//*************************************************
// ***** CONCLUI APENAS POR ASYNC/AWAIT (EX 6)*****
//*************************************************

const axios = require("axios").default;
const prompt = require("prompt-sync")();
require("dotenv").config();
// const { API_ID, UNITS} = process.env;
const appTemp = async (lat, lon) => {
    let acessoAPI = await axios.get(process.env.API, {params: {lat: lat, lon: lon, appid: process.env.API_KEY, units: process.env.UNITS}});
    return acessoAPI.data;
}
const api = async () => {
    var op = 0;
    do {
        console.log("1- Encontrar temperatura");
        console.log("2- Sair");
        op = prompt("Selecione:");
        Number(op);
        switch (op) {
            case "1":   
                let lat = prompt("Latitude: ");
                Number(lat);
                let lon = prompt("Longitude: ");
                Number(lon);
                let data = await appTemp(lat, lon);    
                console.log(data.main.temp);     
                break;
            case "2":
                console.log("Saindo");
                break;
            default:
                console.log("Digite entre 1 e 2"); 
        }
    } while(op != 2);
}
api();