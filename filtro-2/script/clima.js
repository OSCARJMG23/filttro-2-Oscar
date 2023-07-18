const apiKey = '6303eb0af53c3739b6586624f353c6a9'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon') 

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json()
    
    console.log(data)

    if(response.status == 404){
        /* alert('No existe esa ciudad') */
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    }else{

        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) +'ºc'
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
        document.querySelector('.wind').innerHTML = data.wind.speed + ' Km/h'
    
        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src= '../styles/images/clouds.png'
        }else if(data.weather[0].main == 'Clear'){
            weatherIcon.src= '../styles/images/clear.png'
        }else if(data.weather[0].main == 'Rain'){
            weatherIcon.src= '../styles/images/rain.png'
        }else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src= '../styles/images/drizzle.png'
        }else if(data.weather[0].main == 'Mist'){
            weatherIcon.src= '../styles/images/mist.png'
        }
        document.querySelector('.error').style.display = 'none'
        document.querySelector('.weather').style.display = 'block'
    }

}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value)
})
