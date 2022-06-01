const myApi = "https://goweather.herokuapp.com/weather/{oslo}";
console.log(myApi);

const weatherContainer = document.querySelector(".weather-container");

async function weatherData() {
    try{

    }
    catch(error) {
        weatherContainer.innerHTML += `<h1>404</h1>`;
        console.log(error)
    }
}
weatherData();