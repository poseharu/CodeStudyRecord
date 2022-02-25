const signUpArea = document.querySelector("#signUpArea");
const signUpId = document.querySelector("#signUpId");
const signUpPw = document.querySelector("#signUpPw");
const signUpForm = document.querySelector("#signUpForm");

const logInArea = document.querySelector("#logInArea");
const logInId = document.querySelector("#logInId");
const logInPw = document.querySelector("#logInPw");
const logInForm = document.querySelector("#logInForm");

const todoArea = document.querySelector("#todoArea");
const greeting = document.querySelector("#greeting");
const menuSignUP = document.querySelector("#menuSignUP");
const menuLogIn = document.querySelector("#menuLogIn");
const menuLogOut = document.querySelector("#menuLogOut");

const todayInfoArea = document.querySelector("#todayInfoArea");
const musicArea = document.querySelector("#musicArea");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";
const ISLOGIN_KEY = "islogin";
const MAXID_LENGTH = 15;

function paintGreetings(userName){
  sessionStorage.setItem(ISLOGIN_KEY, userName);
  todoArea.classList.remove(HIDDEN_CLASSNAME);
  todayInfoArea.classList.remove(HIDDEN_CLASSNAME);
  musicArea.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  menuLogOut.classList.remove(HIDDEN_CLASSNAME);

  greeting.innerHTML = "";
  const gteetingText = document.createElement('p');
  gteetingText.innerText = "환영합니다.";
  const gteetingUser = document.createElement('p');
  gteetingUser.innerText = `${userName}님`;

  greeting.appendChild(gteetingUser);
  greeting.appendChild(gteetingText);
}

//저장된 유저정보와 로그인 정보를 비교하여 가져오기
function isUserData(userName){
  const saveUserList = localStorage.getItem(USERNAME_KEY);
  let userData = [];

  if(saveUserList !== null){
    const parsedTodos = JSON.parse(saveUserList);
    todoArray = parsedTodos;
    userData = parsedTodos.filter((user)=> user.name === userName);
  }
  return userData.length === 0?[]:userData[0];
}

logInForm.addEventListener("submit", (event)=>{
  //어떤 event의 기본 행동이든지 발생되지 않도록 막는다.
  event.preventDefault();

  const userReg = /^[가-힣0-9]+$/;
  const userName = logInId.value;
  const userPw = logInPw.value;
  
  const checkUser = isUserData(userName);

  if(!userReg.test(userName)){
    alert("한글, 숫자 조합으로 입력해 주시구려!");
    logInId.focus();
  }
  else if(userName.length >= MAXID_LENGTH){
    alert(MAXID_LENGTH + "자 이하로 입력해주시구려!");
    logInId.focus();
  }
  else if(userName !== checkUser.name){
    alert("등록되지 않은 유저이구려!");
    logInId.focus();
  }
  else if(userPw !== checkUser.pw){
    alert("틀린 패스워드이구려!");
    logInPw.focus();
  }
  else{
    logInArea.classList.add(HIDDEN_CLASSNAME);
    menuSignUP.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(userName);
    initTodo();
  }
});

signUpForm.addEventListener("submit", (event)=>{
  event.preventDefault();
  
  const userReg = /^[가-힣0-9]+$/gi;
  const userName = signUpId.value;
  const userPw = signUpPw.value;

  if(!userReg.test(userName)){
    alert("한글, 숫자 조합으로 입력해 주시구려!");
    signUpId.focus();
  }
  else if(userName.length >= MAXID_LENGTH){
    alert(MAXID_LENGTH + "자 이하로 입력해주시구려!");
    signUpId.focus();
  }
  else if(isUserData(userName).name === userName){
    alert("이미 존재하는 유저이구려!");
    signUpId.focus();
  }
  else{
    let totalUserList = JSON.parse(localStorage.getItem(USERNAME_KEY));
    if(totalUserList === null) totalUserList = [];
    const signUpuser = {
      name: userName,
      pw: userPw
    }
    totalUserList.push(signUpuser);
    localStorage.setItem(USERNAME_KEY, JSON.stringify(totalUserList));

    signUpArea.classList.add(HIDDEN_CLASSNAME);
    menuLogIn.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(userName);
    initTodo();
  }
});

menuLogOut.addEventListener("click", ()=>{
  todoArea.classList.add(HIDDEN_CLASSNAME);
  todayInfoArea.classList.add(HIDDEN_CLASSNAME);
  musicArea.classList.add(HIDDEN_CLASSNAME);
  greeting.innerHTML="";
  logInArea.classList.remove(HIDDEN_CLASSNAME);
  menuSignUP.classList.remove(HIDDEN_CLASSNAME);
  menuLogOut.classList.add(HIDDEN_CLASSNAME);
  logInId.value = "";
  logInPw.value = "";
  sessionStorage.removeItem(ISLOGIN_KEY);
});

menuLogIn.addEventListener("click", ()=>{
  signUpArea.classList.add(HIDDEN_CLASSNAME);
  logInArea.classList.remove(HIDDEN_CLASSNAME);
  menuSignUP.classList.remove(HIDDEN_CLASSNAME);
  menuLogIn.classList.add(HIDDEN_CLASSNAME);
  logInId.value = "";
  logInPw.value = "";
});

menuSignUP.addEventListener("click", ()=>{
  signUpArea.classList.remove(HIDDEN_CLASSNAME);
  logInArea.classList.add(HIDDEN_CLASSNAME);
  menuSignUP.classList.add(HIDDEN_CLASSNAME);
  menuLogIn.classList.remove(HIDDEN_CLASSNAME);
  signUpId.value = "";
  signUpPw.value = "";
});

function initLogInOut(){
  const islogin = sessionStorage.getItem(ISLOGIN_KEY);

  if(islogin === null){
    //저장된 유저정보가 없거나 유저가 로그아웃 상태 일때
    signUpArea.classList.remove(HIDDEN_CLASSNAME);
    menuLogIn.classList.remove(HIDDEN_CLASSNAME);
  }
  else{
    //저장된 유저정보가 있고, 로그인을 유지중 일때
    menuLogOut.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(islogin);
  }
}