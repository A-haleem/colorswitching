
const buttons = document.querySelectorAll(".button")
console.log(buttons)
const body = document.querySelector("body");
//console.log(body)
const buttonArr = Array.from(buttons)
buttonArr.forEach(function(button){
  button.addEventListener("click",function(e){
    if(e.target.id=="grey"){
      body.style.backgroundColor = e.target.id;
    }if(e.target.id==="red"){
      body.style.backgroundColor=e.target.id
    }if(e.target.id==="yellow"){
      body.style.backgroundColor = e.target.id;
    }if(e.target.id==="green"){
      body.style.background = e.target.id;
    }
  })
})
