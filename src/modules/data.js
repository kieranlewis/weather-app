const API_KEY = 'ec5427fc5c18d77908e4106eaa68d676';

async function getJson(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        const json = await response.json();
        return json;
    } catch(error) {
        console.log(error);
    }
}

async function processJson(city) {
    try {
        const json = await getJson(city);
        const weather = {
            city: city,
            weather: json.weather[0].main,
            temp: Math.floor(json.main.temp)
        }

        return weather;
    } catch(error) {
        console.log(error);
    }
}

export { getJson, processJson };