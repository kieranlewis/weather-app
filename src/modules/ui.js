import * as Data from './data';

const weatherUl = document.querySelector('.weather-ul');
let conversion = 'celsius';

function displayWeather(weather) {
    weatherUl.innerHTML = '';

    const cityLi = document.createElement('li');
    const weatherLi = document.createElement('li');
    const iconLi = document.createElement('li');
    const tempLi = document.createElement('li');

    cityLi.innerText = weather['city'];
    weatherLi.innerText = weather['weather'];
    iconLi.innerHTML = `<img src="${weather['iconUrl']}">`;

    if(conversion == 'farenheit') {
        tempLi.innerText = Data.cToF(weather['temp']) + '°F';
    } else {
        tempLi.innerText = weather['temp'] + '°C';
    }
    

    cityLi.classList.add('first');
    weatherLi.classList.add('second');
    iconLi.classList.add('third');
    tempLi.classList.add('fourth');

    weatherUl.appendChild(cityLi);
    weatherUl.appendChild(weatherLi);
    weatherUl.appendChild(iconLi)
    weatherUl.appendChild(tempLi);
}

function changeConversion(conversionString) {
    console.log('you are trting to change the temp to', conversionString);
    conversion = conversionString;
}



export { displayWeather, changeConversion };