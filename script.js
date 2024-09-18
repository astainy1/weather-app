//Testing connection
// alert('Connected successfully');

//Load DOM before script
document.addEventListener('DOMContentLoaded', () => {

    //Get html elements
    const location = document.getElementById('location');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const longitude = document.getElementById('longitude');
    const latitude = document.getElementById('latitude');
    const icons = document.getElementById('icon');
    const form = document.querySelector('form');

    function weather() {

        //Store input value
        let userInput = document.querySelector('#searchInput').value;

        //Store API key into a variable
        const apiKEY = '5cb2d25bcf3179ae6823dff05d61557b';

        //Condition for input field
        if (userInput != '') {

            document.getElementById('message').innerHTML = 'Location';

            //Fetch API with 'units=metric' for Celsius
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + apiKEY + '&units=metric')
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {

                    location.innerHTML = data.name;

                    // Display temperature in Celsius with °C symbol
                    temperature.innerHTML = `${data.main.temp}°C`;

                    description.innerHTML = data.weather[0].description;
                    longitude.innerHTML = data.coord.lon;
                    latitude.innerHTML = data.coord.lat;

                    const iconCode = data.weather[0].icon;
                    icons.src = `http://openweathermap.org/img/w/${iconCode}.png`;
                    console.log(iconCode);
                })
                .catch(function () {
                    console.log('Error');
                });
        } else {
            document.getElementById('message').innerHTML = 'Invalid input';
        }
    }

    //Event listener for form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        //Invoking weather function upon submission
        weather();
    });
});
