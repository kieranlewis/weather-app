import "@babel/polyfill";
import "./styles.css";
import * as Data from './modules/data';
import * as UI from './modules/ui';

const formButton = document.querySelector('.submit-btn');
const form = document.forms[0];

const celsiusButton = document.querySelector('.celsius-btn');
const farenheitButton = document.querySelector('.farenheit-btn');

async function printWeather(city) {
    try {
        const weather = await Data.processJson(city);
        UI.displayWeather(weather);
        return weather;
    } catch(error) {
        console.log(error);
    } 
}

formButton.addEventListener('click', (e) => {
    e.preventDefault();
    const city = form.elements.city.value;
    printWeather(city);
    form.reset();
});

export { printWeather };

