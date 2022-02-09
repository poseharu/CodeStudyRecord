const btn1Element = document.querySelector("div.btn1");
const btn2Element = document.querySelector("div.btn2");
const btn3Element = document.querySelector("div.btn3");

btn1Element.addEventListener("click", function(){
  const list = btn1Element.classList;

  if(list.contains('active')){
    list.remove('active');
  }
  else{
    list.add('active');
  }
})

btn2Element.addEventListener("click", function(){
  const list = btn2Element.classList;

  if(list.contains('active')){
    list.toggle('active', false);
  }
  else{
    list.toggle('active', true);
  }
})

btn3Element.addEventListener("click", function(){
  const list = btn3Element.classList;
  list.toggle('active');
});