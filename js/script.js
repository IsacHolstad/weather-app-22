const myApi = "https://goweather.herokuapp.com/weather/{oslo}";
console.log(myApi);
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myApi;

const weatherContainer = document.querySelector(".weather-container");

async function weatherData() {
    try{
        const response = await fetch(corsFixUrl);
        console.log(response);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const weatherDetail = responseJSON.data;
        console.log(weatherDetail);
        for (let i = 0; weatherDetail.length; i++) {
            console.log(weatherDetail[i].temperature);
            
            weatherContainer.innerHTML += `<li>${weatherDetail[i]}</li>`
        }

    }
    catch(error) {
        weatherContainer.innerHTML = `<h1>404</h1>`;
        console.log(error);
    }
}
weatherData();