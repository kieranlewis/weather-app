import "@babel/polyfill";
import "./styles.css";
import * as Data from './modules/data';

async function printWeather() {
    const weather = await Data.processJson('Wellington');
    console.log(weather);
}

printWeather();


