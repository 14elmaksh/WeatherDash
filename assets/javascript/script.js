// when city is entered in search box that will show the city conditions
// make sure buttons do something when clicked on


var tp = document.getElementById("temperature");

var wi = document.getElementById("windy");

var hu = document.getElementById("humid");

var uv = document.getElementById("uvi");

var d1 = document.getElementById("date1")
var d2 = document.getElementById("date2")
var d3 = document.getElementById("date3")
var d4 = document.getElementById("date4")
var d5 = document.getElementById("date5")

var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")
var img3 = document.getElementById("img3")
var img4 = document.getElementById("img4")
var img5 = document.getElementById("img5")

var temp1 = document.getElementById("temp1")
var temp2 = document.getElementById("temp2")
var temp3 = document.getElementById("temp3")
var temp4 = document.getElementById("temp4")
var temp5 = document.getElementById("temp5")

var wind1 = document.getElementById("wind1")
var wind2 = document.getElementById("wind2")
var wind3 = document.getElementById("wind3")
var wind4 = document.getElementById("wind4")
var wind5 = document.getElementById("wind5")

var humid1 = document.getElementById("humid1")
var humid2 = document.getElementById("humid2")
var humid3 = document.getElementById("humid3")
var humid4 = document.getElementById("humid4")
var humid5 = document.getElementById("humid5")








var input = document.getElementById("citydata");

var searchnow = document.getElementById("searchbutton");

function getInfoForApi(){
    var cityName = input.value
   
     fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=b706b30d5a9004ce9fc4cd192307da81",{})
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        var loc = {
            lat: data[0].lat,
            lon: data[0].lon
        }
        return loc;
     })
     .then(function(location){
        return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + location.lat +  "&lon=" + location.lon + "&units=Imperial&appid=b706b30d5a9004ce9fc4cd192307da81",{})
     }) 
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);

            var temp = data.current.temp
            tp.textContent += temp

            var wind = data.current.wind_speed
            wi.textContent += wind

            var uvi = data.current.uvi
            uv.textContent += uvi

            var humidity = data.current.humidity
            hu.textContent += humidity
            
          
            d1.textContent = data.daily[1].dt
            img1.setAttribute("src" , "http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + "@2x.png")
            temp1.textContent = data.daily[1].temp.day
            wind1.textContent = data.daily[1].wind_speed
            humid1.textContent = data.daily[1].humidity

            date2.textContent = data.daily[2].dt
            img2.setAttribute("src" , "http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + "@2x.png")
            temp2.textContent = data.daily[2].temp.day
            wind2.textContent =  data.daily[2].wind_speed
            humid2.textContent = data.daily[2].humidity

            date3.textContent = data.daily[3].dt
            img3.setAttribute("src" , "http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + "@2x.png") 
            temp3.textContent = data.daily[3].temp.day
            wind3.textContent =  data.daily[3].wind_speed
            humid3.textContent = data.daily[3].humidity

            date4.textContent = data.daily[4].dt
            img4.setAttribute("src" , "http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + "@2x.png")
            temp4.textContent = data.daily[4].temp.day
            wind4.textContent =  data.daily[4].wind_speed
            humid4.textContent = data.daily[4].humidity

            date5.textContent = data.daily[5].dt
            img5.setAttribute("src" , "http://openweathermap.org/img/wn/" + data.daily[5].weather[0].icon + "@2x.png")
            temp5.textContent = data.daily[5].temp.day
            wind5.textContent = data.daily[5].wind_speed
            humid5.textContent = data.daily[5].humidity

            
        
            

        })
}














searchnow.addEventListener("click", getInfoForApi);

