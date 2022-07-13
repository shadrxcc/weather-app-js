export const getWeather = (query) => {
    if (query) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=a01278173aeb0079dafd8ea6bf28bfb1`).then(function(response){
    response.json().then(function(data) {
        console.log(data);
        displayWeather(data);
    });
}).catch(function(error) {
    console.log('Fetch Error:', error);
});
    }
 
}

export const displayWeather = (data) => {
    const name = document.getElementById('city')
    const description = document.getElementById('description')
    const icon = document.getElementById('icon')
    const temp = document.querySelector('.deg');

    name.innerText = `Weather in ${data.name}`;
    description.innerText = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    temp.innerText = `${data.main.temp}°C`;

}