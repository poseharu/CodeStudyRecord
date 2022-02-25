const API_KEY = "56ff797fdc57228a7d42c18f08e6e542";
const COORDS_KEY = "coords";

//바람 방향 구하기
function windDeg(num){
  let wind = "";

  if(22.5<num || num<= 67.5){
    wind = "북동풍";
  } else if(67.5<num || num<= 112.5){
    wind = "동풍";
  } else if(112.5<num || num<= 157.5){
    wind = "남동풍";
  } else if(157.5<num || num<= 202.5){
    wind = "남풍";
  } else if(202.5<num || num<= 247.5){
    wind = "남서풍";
  } else if(247.5<num || num<= 292.5){
    wind = "서풍";
  } else if(292.5<num || num<= 337.5){
    wind = "북서풍";
  } else if(337.5<num || num<= 22.5){
    wind = "북풍";
  }

  return wind;
}

//위치정보를 통해 현재 날씨 가져와 화면에 출력하기
function printWeather(coords){
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric&lang=kr`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const info1 = document.querySelector("div#countryInfo");
      info1.innerText = `${data.sys.country}(${data.name})`;

      const info2 = document.querySelector("div#weatherInfo");
      info2.innerText = "";

      const addTag_p = document.createElement("p");
      addTag_p.innerText = `${data.weather[0].description}`;
      
      const addTag_img = document.createElement("img");
      addTag_img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      addTag_img.alt = "날씨";
      
      info2.appendChild(addTag_p);
      info2.appendChild(addTag_img);

      const info3 = document.querySelector("div#tempInfo");
      info3.innerText = `${data.main.temp}°`;

      const info4 = document.querySelector("div#humidityInfo");
      info4.innerText = `${data.main.humidity}%`;

      const info5 = document.querySelector("div#windInfo");
      info5.innerText = `${windDeg(data.wind.deg)} ${data.wind.speed}m/s`;
    });
}

//위치정보 가져오기 성공
function onGeoOk(position){
  const coords = {
    lat: position.coords.latitude,
    lon: position.coords.longitude
  }
  
  //localStorage에 위도, 경도 저장
  localStorage.setItem(COORDS_KEY, JSON.stringify(coords));
  printWeather(coords);
}

//위치 정보 가져오기 실패
function onGeoErroe(){
  alert("위치를 찾을 수 없어서 날씨를 제공할 수 없습니다.");
}

function initWeather(){
  const weatherBtn = document.querySelector("div#weatherBtn");
  weatherBtn.addEventListener("click", ()=>{
    //현재 위치 좌표 재설정
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErroe);
  });

  //최초 위치 정보 받아오기
  const getSaveCoords = localStorage.getItem(COORDS_KEY);
  if(getSaveCoords !== null){
    printWeather(JSON.parse(getSaveCoords));
  }else{
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErroe);
  }
}
