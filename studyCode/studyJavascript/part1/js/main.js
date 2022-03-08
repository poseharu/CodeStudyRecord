window.onload = () => {
  let inputYear = document.getElementById("inputYear");
  let yearInputBtn = document.getElementById("btn4");
  let yearCheckMessage = document.getElementById("yearCheckMessage");
  let noteAear = document.getElementById("noteAnser");


  inputYear.addEventListener("change", () => {
    let year = inputYear.value;

    if(isNaN(year) && parseInt(year) > 0){
      yearCheckMessage.style.display = "block";
      yearCheckMessage.innerHTML = "숫자만 4자리를 입력해 주세요.";
    }
    else {
      yearCheckMessage.style.display = "none";
    }
  });

  inputYear.addEventListener("focus", function (){
    noteAear.style.display = "none";
  })

  yearInputBtn.addEventListener("click", function (){
    let flag = yearCheckMessage.style.display;

    if(flag === "none"){
      noteAear.style.display = "block";
      noteAear.innerHTML = transChineseZodiac(parseInt(inputYear.value));
    }
    else{
      alert("에러메세지를 확인해주세요!");
      inputYear.focus();
    }
  })
};

function transChineseZodiac(year) {
  let chineseZodiac = "";

  // console.log(2020 % 12);
  switch(year % 12){
    case 4: chineseZodiac = "쥐"; break;
    case 5: chineseZodiac = "소"; break;
    case 6: chineseZodiac = "호랑이"; break;
    case 7: chineseZodiac = "토끼"; break;
    case 8: chineseZodiac = "용"; break;
    case 9: chineseZodiac = "뱀"; break;
    case 10: chineseZodiac = "말"; break;
    case 11: chineseZodiac = "양"; break;
    case 0: chineseZodiac = "원숭이"; break;
    case 1: chineseZodiac = "닭"; break;
    case 2: chineseZodiac = "개"; break;
    case 3: chineseZodiac = "돼지"; break;
  }
  //console.log(year + "년도는 " + chineseZodiac + "띠 입니다.");

  return year + "년도는 " + chineseZodiac + "띠 입니다.";
  
}