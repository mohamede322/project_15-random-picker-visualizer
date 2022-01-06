let textarea = document.getElementById("textarea");
let currentWords = document.getElementById("current-words");
let word = document.createElement("div");
let wantedRollsEl = document.getElementById("wanted-rolls");

textarea.addEventListener("input", () => {
  currentWords.innerHTML = "";
  addWords();
});

function addWords() {
  let value = textarea.value;
  if (!value.includes(",")) {
    word.className = "inner-txt";
    word.innerText = value;
    currentWords.append(word);
  } else {
    let valueArr = value.split(",");
    valueArr.forEach((val) => {
      if (val !== "") {
        let word = document.createElement("div");
        word.className = "inner-txt";
        word.innerText = val;
        currentWords.append(word);
      }
    });
  }
  if (value.startsWith(" " || ",")) {
    currentWords.innerHTML = "";
  }
  if (value === "") {
    currentWords.innerHTML = "";
  }
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    getRandomWord();
  }
});

function getRandomWord() {
  let timesRolled = 0;
  let wantedRolls = wantedRollsEl.value;
  function roll() {
    if (wantedRolls !== 0) {
      let els = document.querySelectorAll(".inner-txt");
      els.forEach((el) => {
        el.classList.remove("active");
      });
      els[
        Math.floor(Math.random() * currentWords.childElementCount)
      ].classList.add("active");
      timesRolled += 1;
      if (timesRolled == wantedRolls) {
        clearInterval(rolling);
      }
    }
  }
  let rolling = setInterval(roll, 100);
}
