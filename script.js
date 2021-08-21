const daysContainer = document.querySelector(".days-el");
const hoursContainer = document.querySelector(".hours-el");
const minContainer = document.querySelector(".min-el");
const secondsContainer = document.querySelector(".seconds-el");
const sumbitBtn = document.querySelector(".btn");
const optionsDay = document.querySelector(".options-day");
const optionsMonth = document.querySelector(".options-month");
const optionsYear = document.querySelector(".options-year");
const formContainer = document.querySelector(".form-div");
let timer;

const interval = function (date) {
  timer = setInterval(function () {
    countdown(date);
  }, 1000);
};

interval("21 June 2021");

const countdown = function (date) {
  let newDate = new Date(date);
  let currentDate = new Date();

  let timeDiff = newDate - currentDate;
  let sec = Math.floor(timeDiff / 1000);
  let min = Math.floor(sec / 60);
  let hours = Math.floor(min / 60);
  let days = Math.floor(hours / 24);

  hours = hours % 24;
  min = min % 60;
  sec = sec % 60;

  daysContainer.textContent = String(days).padStart(2, 0);
  hoursContainer.textContent = String(hours).padStart(2, 0);
  minContainer.textContent = String(min).padStart(2, 0);
  secondsContainer.textContent = String(sec).padStart(2, 0);
};

sumbitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (optionsDay.value === "Day") {
    errorMessage("day");
    return;
  }
  if (optionsMonth.value === "Month") {
    errorMessage("month");
    return;
  }
  if (optionsYear.value === "Year") {
    errorMessage("year");
    return;
  }

  const countdownDate2 = `${optionsDay.value} ${optionsMonth.value} ${optionsYear.value}`;
  console.log(countdownDate2);

  clearInterval(timer);
  interval(countdownDate2);
});

// const errorMessage = function (value) {
//   const para = document.createElement("p");
//   para.classList.add("error");
//   para.textContent = `Please enter a ${value}`;
//   formContainer.append(para);
// };

// const html = `<p class="error"></p>`;
// formContainer.insertAdjacentHTML("afterend", html);
////////////////////////////FOR HTML//////////////////
// const numbersOnly = function (input) {
//   const regex = /[^0-9]/gi;
//   input.value = input.value.replace(regex, "");
// };
// const lettersOnly = function (input) {
//   const regex = /[^a-z]/gi;
//   input.value = input.value.replace(regex, "");
// };
