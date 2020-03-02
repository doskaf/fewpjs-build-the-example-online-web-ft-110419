// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let modal = document.getElementById('modal');
modal.className = "hidden";

document.querySelectorAll('.like').forEach(likeBtn => {
  likeBtn.addEventListener("click", function(){
    mimicServerCall()
    .then(function(response) {
      return response;
    })
    .then(function(json) {
      let heart = likeBtn.children[0];
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart";
      } else if (heart.innerText === FULL_HEART) {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      }
    })
    .catch(function(error) {
      modal.innerText = `ERROR: ${error}`;
      modal.className = "";
      setTimeout(function(){ modal.className = "hidden" }, 5000);
    });
  });
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
