const dateInfo = document.querySelector("div#dateInfo");
const clockInfo = document.querySelector("div#clockInfo");

function getClock(){
  const date = new Date();
  const hours = convertNumberToString(date.getHours(), 2);
  const minutes = convertNumberToString(date.getMinutes(), 2);
  const seconds = convertNumberToString(date.getSeconds(), 2);
  clockInfo.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function getDateInfo(){
  const date = new Date();
  const year = date.getFullYear();
  const month = convertNumberToString(date.getMonth(), 2);
  const day = convertNumberToString(date.getDate(), 2);
  dateInfo.innerHTML = `${year}/${month}/${day}(${getDayOfTheWeek(date.getDay())})`;
}

function initTodayInfo(){
  getDateInfo();
  getClock();
  setInterval(getClock, 1000);
}