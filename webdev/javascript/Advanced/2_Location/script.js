const button = document.getElementById('btn');
button.addEventListener('click', async() => {
    navigator.geolocation.getCurrentPosition(showlocation,showerror);
});

async function showlocation(position){
    const weather = await getWeather(position.coords.latitude, position.coords.longitude);
    console.log(weather);
    const body=document.querySelector('body');
    const div=document.createElement('div');
    div.innerHTML=`
    <p>Area=${weather.location.name}
    </br>
    Country= ${weather.location.country}
    </br>
    Temperature= ${weather.current.temp_c}°C
    </br>
    PM2.5= ${weather.current.air_quality.pm2_5}</p>
    `;
    body.appendChild(div);
}

function showerror(error){
    console.log('User denied the request for Geolocation.');
}


async function getWeather(lat,lon) {
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=b7a7e173bfce4fd990a172821240812&q=${lat},${lon}&aqi=yes`);
    return await data.json();
}