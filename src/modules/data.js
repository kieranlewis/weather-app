const API_KEY = 'ec5427fc5c18d77908e4106eaa68d676';

function print() {
    console.log('you are trying to print something');
}

async function getJson(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    //const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=city&appid=${API_KEY}`);
    const json = await response.json();
    console.log(json);
}

export { print, getJson };