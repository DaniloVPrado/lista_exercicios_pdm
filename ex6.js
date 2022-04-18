// 6. Refaça o exercício 5 usando a construção async/await.

const axios = require("axios").default;
const prompt = require("prompt-sync")();
require("dotenv").config();
// const { API_ID, UNITS} = process.env;
const appTemp = async (lat, lon) => {
    let acessoAPI = await axios.get(process.env.WEATHER_API, {params: {lat: lat, lon: lon, appid: process.env.API_KEY, units: process.env.UNITS}});
    return acessoAPI.data;
}
const api = async () => {
    var op
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