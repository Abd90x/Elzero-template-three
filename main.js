let sectionSkills = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".progress span");

let sectionStats = document.querySelector(".stats");
let myh3 = document.querySelectorAll(".stat h3");

let started = false;

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
let counter = setInterval(() => {
  let dataNow = new Date().getTime();
  let dateDiff = countDownDate - dataNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

window.onscroll = function () {
  if (window.scrollY >= sectionSkills.offsetTop - 100) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= sectionStats.offsetTop - 100) {
    if (!started) {
      myh3.forEach((h3) => {
        startCount(h3);
      });
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
