

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const glyphs = document.getElementsByClassName("like-glyph")
let glyphStates = {
  '♡':'♥',
  '♥':'♡'
}
let colorStates = {
  "":"red",
  "red":""
}

// document.addEventListener("DOMContentLoaded", () {
// })
  


const likeFunctionality = (event) => {
  console.log(event.target)
  mimicServerCall()
  .then((json) => {
    event.target.innerText = glyphStates[event.target.innerText]
    event.target.style.color = colorStates[event.target.style.color]})
  .catch((error) => {
    console.log(error);
    document.getElementById('modal').className = ""
    setTimeout(() => document.getElementById('modal').className = "hidden",5000)
  })
}

for (let i = 0; i < glyphs.length; i++) {
  glyphs[i].addEventListener("click", likeFunctionality )
}
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
