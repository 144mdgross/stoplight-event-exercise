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
      //go.classList.toggle("go");
    var greenLight = document.getElementById('goLight')
    console.log(greenLight, "greenLight")
      greenLight.classList.toggle("go")
      //okay so this work for one? how to make it more efficient?
  })

var slow = document.getElementById('slowButton')
console.log(slow, "slow")

slow.addEventListener('click', function(event){
  //slow.classList.toggle('slow')

  var yellowLight = document.getElementById('slowLight')
  console.log('yellowLight', yellowLight)
    yellowLight.classList.toggle('slow')

})

var stop = document.getElementById('stopButton')

stop.addEventListener("click", function(event){
  //stop.classList.toggle('stop')

  var redLight = document.getElementById('stopLight')
    redLight.classList.toggle('stop')
})

//can one loop add two event listeners?

var test = document.getElementsByClassName('button')
console.log('test', test)
for (var i = 0; i < test.length; i++) {
  let eachButton = test[i]
  console.log(eachButton, "eachButton")

  eachButton.addEventListener("mouseenter", function(event) {
//   // highlight the mouseenter target
  //event.target.style.color = "purple";
  console.log("Entered " + eachButton.innerText + " button")

  eachButton.addEventListener("mouseout", function(event) {
    console.log("Left " + eachButton.innerText + "button")
  })

})
}

//BONUS. NOT THERE YET. 
// Add one DOM event listener and one handler to log the state of each bulb.
//
// When a user clicks a button that just turned on, log"<textContent> bulb on" to the console.
// When a user clicks a button that just turned off, log"<textContent> bulb off" to the console.
// TIP: A click on only a button should cause a message to be logged to the console.






});
})();
