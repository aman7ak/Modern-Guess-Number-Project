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
    result.style.color = "lawngreen";
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
  window.location = "https://aman7ak.github.io/Modern-Guess-Number-Project/";
};

// function for restart button
restart.addEventListener("click", reload);

let newDate = new Date();
let count = 20;
let setmilisec = 0;
let milisec = 19;

let time;

// function for time counter
const timerCount = () => {
  if (count == 20) {
    newDate.setSeconds(20);
    newDate.setMilliseconds(setmilisec);
    time = newDate.getUTCSeconds() + " : 0" + newDate.getUTCMilliseconds();
    console.log(count, setmilisec, milisec);
  } else if (milisec < 20 && milisec > 10) {
    count = 20;
    milisec = count - setmilisec;
    newDate.setSeconds(0);
    newDate.setMilliseconds(milisec);
    time = "0" + newDate.getUTCSeconds() + " : " + newDate.getUTCMilliseconds();
    console.log(count, setmilisec, milisec);
  } else if (milisec == 10) {
    count = 20;
    milisec = count - setmilisec;
    newDate.setSeconds(0);
    newDate.setMilliseconds(milisec);
    time =
      "0" + newDate.getUTCSeconds() + " : 0" + newDate.getUTCMilliseconds();
    console.log(count, setmilisec, milisec);
  } else if (milisec < 10) {
    count = 20;
    milisec = count - setmilisec;
    newDate.setSeconds(0);
    newDate.setMilliseconds(milisec);
    time =
      "0" + newDate.getUTCSeconds() + " : 0" + newDate.getUTCMilliseconds();
    console.log(count, setmilisec, milisec);
  }
  setmilisec++;
  count = 19;
  timestamp.style.border = "2px solid lawngreen";
  timestamp.style.color = "lawngreen";

  if (milisec == 0) {
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
