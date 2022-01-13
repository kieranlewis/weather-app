import { printWeather } from "../index";

const formButton = document.querySelector('.submit-btn');
const form = document.forms[0];

formButton.addEventListener('click', (e) => {
    e.preventDefault();
    const city = form.elements.city.value;
    printWeather(city);
    form.reset();
});

export { };