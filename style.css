//Testing connection
// alert('Connected successfully');

//Load DOM before script
document.addEventListener('DOMContentLoaded', () => {
    
    //Get html element
    // const searchbtn = document.getElementById('searchBtn').disabled = true;
    const location = document.getElementById('location');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const longitude = document.getElementById('longitude');
    const latitude = document.getElementById('latitude');
    const icons = document.getElementById('icon')
    const form = document.querySelector('form');

    function weather(){

        // const img = 'http://openweathermap.org/img/w/';
        // const png = '.png';
        //Store input value
        let userInput = document.querySelector('#searchInput').value;
        
        //store api key into a variable
        const apiKEY = '5cb2d25bcf3179ae6823dff05d61557b';
        
        //Condition for input field
        if(userInput != ''){

        document.getElementById('message').innerHTML = 'Location';
        //Fetch api
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + apiKEY)
        .then(function (response) {
            return response.json()
        })
        .then(function (data){

            location.innerHTML = data.name;
            temperature.innerHTML = data.main.temp;
            description.innerHTML = data.weather[0].description;
            longitude.innerHTML = data.coord.lon;
            latitude.innerHTML = data.coord.lat;
          
            const iconCode = data.weather[0].icon;
            icons.src = `http://openweathermap.org/img/w/${iconCode}.png`
            console.log(iconCode)
            // icons.innerHTML = 
            // console.log(data)
        })
        .catch(function() {
            console.log('Error')
        })}else{
            document.getElementById('message').innerHTML = 'Invalid input'
        }
    }

    //event listener for form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        //invoking weather function upon submission
        weather();
        
    })
})
