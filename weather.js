const weatherConatiner = document.querySelector(".js-weather");

const COORDINATION = 'coordination';
const API_KEY = "1df503c9d7ecb6ca31c511ac381b7472";


function saveCoordinatio(coordinationObj){
    localStorage.setItem(COORDINATION, JSON.stringify(coordinationObj));
}

function handleGeoFail(){
    console.log("Can't get geo location");
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordinationObj ={
        latitude,
        longitude
    }
    saveCoordinatio(coordinationObj);    
    getWeather(latitude,longitude);
}

function askCoordination(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFail)
}

function getWeather(lat,long){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = Math.round(json.main.temp);
        const place = json.name;
        weatherConatiner.innerText = `${temperature} °C \n${place}`;
    });
}

function getCoordination(){
    const position = localStorage.getItem(COORDINATION);
    if(position === null){
        askCoordination();
    }else{
        const parseCoordination = JSON.parse(position);
        getWeather(parseCoordination.latitude, parseCoordination.longitude);
    }  
}


function init(){
    getCoordination();
}
init();