import "@babel/polyfill";
import "./styles.css";
import * as Data from './modules/data';
import * as UI from './modules/ui';

async function printWeather(city) {
    try {
        const weather = await Data.processJson(city);
        console.log(weather);
        return weather;
    } catch(error) {
        console.log(error);
    } 
}

export { printWeather };

