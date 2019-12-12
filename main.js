// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

mimicServerCall()
  .then((res) => {
    let likeHeart = document.querySelectorAll('.like-glyph');

    likeHeart.forEach((spanWithHeart) => {
      spanWithHeart.innerText = FULL_HEART
    });

  })
  .catch((err) => {
    let errorModal = document.querySelector('#modal');
    errorModal.className = '';

    let modalMessage = document.querySelector("#modal-message");
    modalMessage.innerText = err;

    setTimeout(() => {
      errorModal.className = 'hidden';
    }, 5000);

  });


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
