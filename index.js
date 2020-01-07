/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(string){
  let time = string.split(':')
  let hour = parseInt(time[0])
  if(hour >= 0 && hour < 12){
    return "Good Morning"
  } else if(hour >= 12 && hour < 17){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(string){
  const text = document.querySelector('#greeting')
  text.innerText = 'TEST'
}