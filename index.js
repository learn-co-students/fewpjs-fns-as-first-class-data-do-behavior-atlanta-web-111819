/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(inTime){
  const splitTime = inTime.split(":");
  let hour = parseInt(splitTime[0]);
  let minute = parseInt(splitTime[1]);

  console.log(hour)
  switch(true){
    case hour < 12:
      return "Good Morning";
      break;
    case hour >= 12 && hour < 17:
      return "Good Afternoon";
      break;
    case hour >= 17:
      return "Good Evening";
      break;
  }

}

function displayMessage(message){
  console.log(message);
  const greet = document.getElementById('greeting');
  console.log(greet);
  greet.innerText = message;
}
