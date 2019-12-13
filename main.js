// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let errorModal = document.querySelector("#modal")
errorModal.classList += "hidden"
/////////

/// MAKE THE ADD EVENT LISTENER FOR ALL OF THE 
////LIKE BUTTONS OR ELSE DELEGATE SO THAT IT DOES IT BY EVT!!!!

///////
let likeLi = document.querySelector("li.like")
let likeSpan = likeLi.querySelector("span.like-glyph")



likeLi.addEventListener('click', (evt) => {
  // console.log(evt.target.innerText) == heart
  mimicServerCall(url="http://mimicServer.example.com", config={})
  .then( () => {
    if (likeSpan.innerText === EMPTY_HEART) {
      likeSpan.innerText = FULL_HEART
      likeSpan.classList += "activated-heart"
    } else if (likeSpan.innerText === FULL_HEART) {
      likeSpan.innerText = EMPTY_HEART
      likeSpan.classList.remove("activated-heart")
    }
  })
  .catch(function(error) {
    errorModal.classList.remove("hidden")
    setTimeout(() => {
      errorModal.classList += "hidden"
    }, 5000)
    let errorMessageP = document.querySelector("#modal-message")
    errorMessageP.innerText = error
  })
  
  
  // if (evt.target.innerText === EMPTY_HEART) {
  //   evt.target.innerText = FULL_HEART
  // } else if (evt.target.innerText === FULL_HEART) {
  //   evt.target.innerText = EMPTY_HEART
  // }


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
