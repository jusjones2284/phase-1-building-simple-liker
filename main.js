// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector("#modal")
// Your JavaScript code goes here!
document.addEventListener("DomContentLoaded", ()=> {
  console.log("DOM CONTENT HAS LOADED")
  
  errorModal.classList.add("hidden")
  // console.log(document.querySelector("#modal"))

  /* When a user clicks on an empty heart: Invoke mimicServerCall to simulate making a server requst

*/

// findLikes()

clickListener()

});

function hideError(){
  errorModal.classList.add("hidden")
}

// function findLikes(){

//   const likeArr = document.querySelectorAll(".like-glyph")

//   likeArr.forEach((singularLike) => {

//     singularLike.addEventListener("click", ()=> console.log("YOU FOUND ME! LIKE!"))

//   })
// }

// function findLikes(){

//   const likeArr = document.querySelectorAll(".like-glyph")

//   likeArr.forEach((singularLike) => {

//     singularLike.addEventListener("click", ()=> console.log("You Found me!"))
//   })
// }
// console.log(document.querySelector("#modal").innerText)

// function clickListener(){

//   document.addEventListener('click', (event)=> console.log(event.target))
// }

  
// clickListener()


// function clickListner(){
//   document.addEventListener('click', (event) => {

//     if(event.target.classList.value === 'like-glyph'){

//     }
//   })
// }



// function clickListener(){

//   document.addEventListener('click', (event)=>{

//     console.log(event.target.classList.value)

//     if(event.target.classList === 'like-glyph'){

//       console.log("YOU FOUND ME! LIKE!")
//     }
//   })
// }
  //if I click on the heart then console.log("You Found Me! Like!")otherwise do nothing

 document.addEventListener("click", (event)=> {

  if(event.target.classList[0] === "like-glyph"){


    mimicServerCall()
      .then((resp) => {

        const activated = event.target.classList.contains("activated-heart");
        if(activated){
          event.target.classList.remove("activated-heart");
          event.target.innerHTML = EMPTY_HEART;
        }else{
          event.target.classList.add("activated-heart");
          event.target.innerHTML = FULL_HEART
        }

        activated
      })
      .catch((error) => {
        console.log(error);
        errorModal.remove("hidden");
        setTimeout(() => {
          hideError();
        }, 3000);
      })
  }
 })



// function clickListener(){

//   document.addEventListener('click', (event)=> console.log(event.target))

//   clickListener()
// }

// function clickListner(){

//   document.addEventListener('click', (event)=> console.log(event.target))
// }
  
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
