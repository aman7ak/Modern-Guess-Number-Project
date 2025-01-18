let timestamp = document.getElementById("timestamp");
let restart = document.getElementById("restart");

let input = document.getElementById("input");
let inputVal;

let submit = document.getElementById("submit");
let guessNum = document.getElementById("guessNum");
let guessAttempt = document.getElementById("guessAttempt");
let result = document.getElementById("result");
let reloadMess = document.getElementById("reloadMess");

// generating computer value
let comp = Math.round(Math.random() * 100 + 1);
console.log(comp);
let attempt = 0;

// compare function for compairing of computer and user value
const compare = (comp, inputVal) => {
  inputVal = Number.parseInt(inputVal);
  guessNum.innerText = inputVal;
  attempt++;
  guessAttempt.innerText = attempt;
  if (comp == inputVal) {
    result.innerText = "Number is matched!";
    input.value = "";
    input.setAttribute("readonly", true);
    input.style.cursor = "no-drop";
    clearInterval(timerId);
  } else if (comp > inputVal) {
    result.innerText = "Too small!";
    input.value = "";
  } else {
    result.innerText = "Too large!";
    input.value = "";
  }
};

// function for submit button
submit.addEventListener("click", (e) => {
  e.preventDefault();
  inputVal = input.value;
  if (inputVal == "") {
    result.innerText = "Enter number...";
  } else {
    compare(comp, inputVal);
  }
});

// function for reloading
const reload = () => {
  window.location = "http://127.0.0.1:5500/Project2/index.html";
};

// function for restart button
restart.addEventListener("click", reload);

let newDate = new Date();
let count = 10;
let setmilisec = 0;
let milisec;

let time;

// function for time counter
const timerCount = () => {
  if (count == 10) {
    newDate.setSeconds(10);
    newDate.setMilliseconds(setmilisec);
    time = newDate.getUTCSeconds() + " : 0" + newDate.getUTCMilliseconds();
  } else if (count < 10) {
    count = 10;
    newDate.setSeconds(0);
    newDate.setMilliseconds(count - setmilisec);
    time =
      "0" + newDate.getUTCSeconds() + " : 0" + newDate.getUTCMilliseconds();
  }
  setmilisec++;
  count = 9;
  timestamp.style.border = "2px solid lawngreen";
  timestamp.style.color = "lawngreen";
  if (setmilisec == 10) {
    time = "00 : 00";
    input.setAttribute("readonly", true);
    input.style.cursor = "no-drop";
    result.innerText = "Please Restart!";
    timestamp.style.border = "2px solid red";
    timestamp.style.color = "red";
    // console.log(time);
    clearInterval(timerId);
  }
  
  timestamp.innerText = time;
};

// taking interval id
let timerId = setInterval(timerCount, 1000);
