(function() {
  'use strict';
  // YOUR CODE HERE
  //remember DOM CONTENT LOADED
  document.addEventListener("DOMContentLoaded", function(event) {

  //how do i want to select and work with things?
  //individually?? is there a good way to add event listeners to the parent but make the children do different things within that even listener? how about a loop. aloop. or even better....add it to the parent.

  var go = document.getElementById('goButton')
  console.log(go)

  go.addEventListener('click', function(event){
      go.classList.toggle("go");
    var greenLight = document.getElementById('goLight')
    console.log(greenLight, "greenLight")
      greenLight.classList.toggle("go")
      //okay so this work for one? how to make it more efficient?
  })

var slow = document.getElementById('slowButton')
console.log(slow, "slow")

slow.addEventListener('click', function(event){
  slow.classList.toggle('slow')

  var yellowLight = document.getElementById('slowLight')
  console.log('yellowLight', yellowLight)
    yellowLight.classList.toggle('slow')

})

var stop = document.getElementById('stopButton')

stop.addEventListener("click", function(event){
  stop.classList.toggle('stop')

  var redLight = document.getElementById('stopLight')
    redLight.classList.toggle('stop')
})


// var controls = document.getElementById('controls')
// var lights = document.getElementById('traffic-light')
// //add overarching listener for buttons
//   controls.addEventListener('click', function (event) {
//       //overaching listener applied? now how to target individual buttons efficiently?









  //loop through and add individual event listeners?
  //decide if I want event as a parameter. most likely yes because this will give me the individuals buttons back instead of the object. but do I know why I want this?

// for (var i = 0; i < buttons.length; i++) {
//   buttons[i]
// }








//div.classList.toggle("visible", i < 10 ); toggly w/o jQuery...

//add event listeners to buttons. each button should have a different one.

//use classList.toggle() to toggle. when toggling I will probably want to add the correct class to the button to style it?

//remove the class when clicked again? ie div.classList.remove('go')

//is that it? seems to easy.



//




});
})();
