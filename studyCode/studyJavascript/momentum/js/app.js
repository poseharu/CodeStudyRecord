/**
 * 로드 순서 정리
 */

window.addEventListener('DOMContentLoaded', function(){
  initBackground();
  initLogInOut();
  initMusic();
  initTodayInfo();
  // initWeather();
  initTodo();

  commonEventListener();
});
  
function commonEventListener(){
  //각 영역 제목 토글 클릭 이벤트

  const musicToggle = document.querySelector("#musicArea .titleBtn");
  const todayToggle = document.querySelector("#todayInfoArea .titleBtn");
  const todoToggle = document.querySelector("#todoArea .titleBtn");

  musicToggle.addEventListener("click", ()=>{
    const arrowEl = musicToggle.lastElementChild;
    arrowEl.classList.toggle("on");
    document.querySelector("#musicArea").classList.toggle("commonClose");
  });

  todayToggle.addEventListener("click", ()=>{
    const arrowEl = todayToggle.lastElementChild;
    arrowEl.classList.toggle("on");
    document.querySelector("#todayInfoArea").classList.toggle("commonClose");
  });

  todoToggle.addEventListener("click", ()=>{
    const arrowEl = todoToggle.lastElementChild;
    arrowEl.classList.toggle("on");
    document.querySelector("#todoArea").classList.toggle("commonClose");
  });

}