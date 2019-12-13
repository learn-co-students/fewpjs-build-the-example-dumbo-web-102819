// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errDiv = document.querySelector("#modal")
const errText = errDiv.querySelector("h2")

// Your JavaScript code goes here!
let likes = document.querySelectorAll(".like")
likes.forEach((like) => {
  like.addEventListener("click", (evt) => {
    mimicServerCall()
    .then((r) => {
      let like = evt.target
      if (like.innerText == EMPTY_HEART){
        like.innerText = FULL_HEART
        like.style.color = "red"
      } else {
        like.innerText = EMPTY_HEART
        like.style.color = ""
      }
    })
    .catch((err) => {
      errDiv.classList.remove("hidden");
      errText.innerText = err;
      setTimeout(() => {
        errDiv.classList.add("hidden")
      }, 5000)
    })
  })
})



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
