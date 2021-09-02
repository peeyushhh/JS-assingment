let place=document.querySelector("#place");
const btn=document.querySelector("#btn");
let area=document.querySelector("#area");
const temp=document.querySelector(".temp");
const description=document.querySelector(".description");
const tempmin_max=document.querySelector(".tempmin_max");
const wind_pressure=document.querySelector(".wind_pressure");
const info=document.querySelector(".info");
const coords=document.querySelector(".coords");
const weathercon=document.querySelector("#weathercon");
const err=document.querySelector(".error");
function fetchData(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place.value.toLowerCase()}&appid=baa283088470ebe31f2f01503359868f&units=metric`).then((res)=>res.json()).then((data)=>{
            if(data.message==="city not found")
            {
            info.style.display="none";
    alert("Enter a valid city please.");
    err.style.display="flex";
    err.innerText="Please Enter a Valid Name";
            }
        else
        {
            place.focus();
            info.style.display="flex";
            err.style.display="none";
            const tempStatus =data.weather[0].main;
            console.log(tempStatus);
            if (tempStatus == "Clear") {
                weathercon.innerHTML =
                  "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
              } else if (tempStatus ==="Clouds") {
                weathercon.innerHTML =
                  "<i class='fas  fa-cloud' style='color:black;'></i>";
              } else if (tempStatus ==="Rain") {
                weathercon.innerHTML =
                  "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
              } 
              else if(tempStatus==="Haze")
              {
                weathercon.innerHTML =
                  "<i class='fas fa-smog' style='color: #black;'></i>";  
              }
              else if(tempStatus==="Mist")
              {
                weathercon.innerHTML =
                  "<i class='fas fa-cloud-showers-heavy' style='color: #black;'></i>";  
              }
              else {
                weathercon.innerHTML =
                  "<i class='fas  fa-cloud-sun' style='color:black;'></i>";
              }
          area.innerText = `${data.name},${data.sys.country}`;
          temp.innerText=data.main.temp+"°C";
          tempmin_max.innerText=`Min ${data.main.temp_min}°C || Max ${data.main.temp_max}°C`;
          description.innerText=data.weather[0].description;
          wind_pressure.innerText=`Wind ${data.wind.speed} || Pressure ${data.main.pressure} || Humidity ${data.main.humidity}`;
          coords.innerText=`Lon ${data.coord.lon} || Lat ${data.coord.lat}`;
        }
        place.value="";

    }); 
}
btn.addEventListener("click",(e)=>{
    fetchData();
});
document.addEventListener("keypress",(e)=>{
    if(e.which===13)
    fetchData();
});
