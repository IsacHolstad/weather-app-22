const myApi = "https://goweather.herokuapp.com/weather/{oslo}";
console.log(myApi);

const weatherContainer = document.querySelector(".weather-container");

async function weatherData() {
    try{
        const response = await fetch(myApi);
        console.log(response);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const weatherDetail = responseJSON.data;
        console.log(weatherDetail);

    }
    catch(error) {
        weatherContainer.innerHTML = `<h1>404</h1>`;
        console.log(error);
    }
}
weatherData();