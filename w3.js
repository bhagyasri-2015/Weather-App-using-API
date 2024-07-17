document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `
                    <div>City: ${data.name}</div>
                    <div>Temperature: ${data.main.temp} °C</div>
                    <div>Weather: ${data.weather[0].description}</div>
                `;
            } else {
                alert('City not found');
            }
        })
        .catch(error => console.error('Error:', error));
});
