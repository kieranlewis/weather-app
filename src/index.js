import "@babel/polyfill";
import "./styles.css";
import * as Data from './modules/data';

async function printWeather() {
    const json = await Data.getJson('Wellington');
    console.log(json.weather);
}

printWeather();
