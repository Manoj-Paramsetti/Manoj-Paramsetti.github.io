var apiKey = "7aa99fca6a848c8f87838df4566fbf10"
const form = document.querySelector("#search")
const input = document.getElementById("text")
const error = document.getElementById("error")
const card = document.getElementById("card")
var a = 0
var data = undefined
function senData(){
    const inputVal = input.value
    funcName(apiKey,inputVal)
}

async function funcName(apiKey,location){
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+location+"&appid=7aa99fca6a848c8f87838df4566fbf10&units=metric")
    console.log(response)
    data = await response.json()
    document.getElementById("Condition").innerHTML = ""
    document.getElementById("Temperature").innerHTML = ""
    document.getElementById("Geolocation").innerHTML = ""
    console.log(data)
    if(data["cod"]==400||data["cod"]==404){
        error.innerHTML=data["message"]
        card.style.display= "none"
    }
    else if(data["cod"]==200){
        card.style.display= "block"
        var weatherReport = "longitude: "+data["coord"]["lon"]+"<br />Latitude: "+data["coord"]["lat"]+"<br /> Temperature: "+data["main"]["temp"]+"<br />Weather Condition: "+data["weather"][0]["main"]+"<br />Feels like: "+data["main"]["feels_like"]+"<br />Minimum Temperature: "+data["main"]["temp_min"]+"<br />Maximum Temperature: "+data["main"]["temp_max"]+"<br />Country: "+data["sys"]["country"]
        error.innerHTML= ""
    }
}
function Geolocation(){
    document.getElementById("Geolocation").innerHTML="Longitude: "+data["coord"]["lon"]+"<br />Latitude: "+data["coord"]["lat"]+"<br />Country: "+data["sys"]["country"]+"<br />Place: "+data["name"]
}
function Temperature(){
    document.getElementById("Temperature").innerHTML="Temperature: "+data["main"]["temp"]+"<br />Feels like: "+data["main"]["feels_like"]+"<br />Minimum Temperature: "+data["main"]["temp_min"]+"<br />Maximum Temperature: "+data["main"]["temp_max"]
}
function Condition(){
    document.getElementById("Condition").innerHTML="Weather Condition: "+data["weather"][0]["main"]+"<br />Pressure: "+data["main"]["pressure"]+"<br />Humidity: "+data["main"]["humidity"]+"<br />Visibility: "+data["visibility"]+"<br />wind speed: "+data["wind"]["speed"]+"<br />wind direction: "+data["wind"]["deg"]+" deg"+"<br />clouds: "+data["clouds"]["all"]+"%"
}
addEventListener("keydown",e=>{
  if (e["key"]=="Enter"){
    senData()
  }  
})