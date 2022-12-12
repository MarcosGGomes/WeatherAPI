const key = key;
const inputCity = document.querySelector('.inputCity');
const btn = document.querySelector('.btn');
const cityName = document.querySelector('.cityName');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');


async function getWeatherData(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=pt_bt`;
    const res = await fetch(apiURL);
    const data = await res.json();
    cityName.innerHTML = data.name;
    for(let des of data.weather) {
        description.innerHTML = des.description;
    }
    temp.innerHTML = data.main.temp + " C°";
}

function showWeatherData(city) {
    getWeatherData(city);
}

btn.addEventListener('click', (e) => {
    e.preventDefault;
    const city = inputCity.value;
    showWeatherData(city);
   
});



