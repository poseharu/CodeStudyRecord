//X 자리수까지 표현하기위해 모자란 자리수 만큼 앞에 "0"으로 채움.
function convertNumberToString(number, digit){
  return String(number).padStart(digit, "0"); 
}

//문자 요일을 반환
function getDayOfTheWeek(num){
  const stringDayOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];
  return stringDayOfTheWeek[num];
}

//초를 분:초 형태로 변환
function makeDigitalTime(musicTime){
  const time = Math.floor(musicTime);
  const minutes = convertNumberToString(Math.floor(time / 60), 2);
  const seconds = convertNumberToString(time % 60, 2);
  return `${minutes}:${seconds}`;
}