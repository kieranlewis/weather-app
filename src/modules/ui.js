const weatherDiv = document.querySelector('.weather-div');
const weatherUl = document.querySelector('.weather-ul')

function displayWeather(weather) {
    weatherUl.innerHTML = '';

    const cityLi = document.createElement('li');
    const weatherLi = document.createElement('li');
    const iconLi = document.createElement('li');
    const tempLi = document.createElement('li');

    cityLi.innerText = weather['city'];
    weatherLi.innerText = weather['weather'];
    iconLi.innerText = 'N/A';
    tempLi.innerText = weather['temp'];

    cityLi.classList.add('first');
    weatherLi.classList.add('second');
    iconLi.classList.add('third');
    tempLi.classList.add('fourth');

    weatherUl.appendChild(cityLi);
    weatherUl.appendChild(weatherLi);
    weatherUl.appendChild(iconLi)
    weatherUl.appendChild(tempLi);
}

export { displayWeather };