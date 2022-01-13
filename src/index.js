import "@babel/polyfill";
import "./styles.css";
import * as Data from './modules/data';
import * as UI from './modules/ui';

async function printWeather(city) {
    const weather = await Data.processJson('Wellington');
    console.log(weather);
}

export { printWeather };

