const weatherDiv = document.querySelector('.weather-div');

function displayWeather(weather) {
    weatherDiv.innerHTML = '';
    const p = document.createElement('p');
    p.innerText = JSON.stringify(weather);
    weatherDiv.appendChild(p);
}

export { displayWeather };