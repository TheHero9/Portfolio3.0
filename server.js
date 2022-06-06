//Parallax effect js
let sky = document.getElementById("sky")
let building = document.getElementById("building")
let canyon = document.getElementById("canyon")
let btn = document.getElementById("button")




window.addEventListener("scroll", function() {

  let value = window.scrollY;
  sky.style.left = value * 0.25 + "px";
  building.style.top = value * 0.70 + "px";
  canyon.style.top = value * 0 + "px";

})

//Flip animations
const card = document.querySelectorAll(".thecard")
const cardFront = document.querySelectorAll(".thefront")
console.log(card)

card.forEach((e)=>
  e.addEventListener('click', function(){
    e.classList.toggle("test");
  }))

// const imgTest = document.getElementById("certificatesimg")
//
// imgTest.addEventListener('click', function(){
//   console.log("ss")
//   // this.style.transform= "rotateY(180deg)";
//   this.classList.add= "test";
// })
