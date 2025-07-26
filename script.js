/**
 * @name: Assignement1
 * @Course Code: SODV1201
 * @class: Software Development Diploma program.
 * @author: 457647 - Yosita Jasamut
 */ 

const fetchData = fetch('https://www.meteosource.com/api/v1/free/point?place_id=calgary&sections=current%2Chourly&language=en&units=auto&key=xl67daernnvf1kayx4rj0jfxjvjx2v3929yogkj2');

var summary;
var temperature;
var wind;

fetchData.then(Response => Response.json())
    .then((data) => {
        console.log(data);
        summary = data.current.summary;
        temperature = data.current.temperature;
        wind = data.current.wind.speed+' / '+data.current.wind.angle+' / '+data.current.wind.dir ;
        document.getElementById('temperature').innerHTML += temperature + '';
        document.getElementById('summary').innerHTML += summary;
        document.getElementById('wind').innerHTML += wind;
    });

