const weatherDiv = document.querySelector('.weather-div');
const weatherUl = document.querySelector('.weather-ul')

function displayWeather(weather) {
    weatherUl.innerHTML = '';

    const cityLi = document.createElement('li');
    const weatherLi = document.createElement('li');
    const tempLi = document.createElement('li');

    cityLi.innerText = weather['city'];
    weatherLi.innerText = weather['weather'];
    tempLi.innerText = weather['temp'];

    weatherUl.appendChild(cityLi);
    weatherUl.appendChild(weatherLi);
    weatherUl.appendChild(tempLi);
}

export { displayWeather };