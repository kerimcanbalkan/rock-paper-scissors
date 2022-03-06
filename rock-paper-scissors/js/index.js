const hands = document.querySelector(".hands");
const contest = document.querySelector(".contest");

let SCORE = 0;
const handOptions = {
  rock: "/assets/Rock.png",
  paper: "/assets/Paper.png",
  scissors: "/assets/Scissors.png",
};

const pickUserHand = function (hand) {
  hands.style.display = "none";
  contest.style.display = "flex";
  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand);
};

const pickComputerHand = function (hand) {
  const hands = ["rock", "paper", "scissors"];
  const cpHand = hands[Math.floor(Math.random() * hands.length)];
  console.log(cpHand);
  document.getElementById("computerPickImage").src = handOptions[cpHand];

  referee(hand, cpHand);
};

const referee = function (hand, cpHand) {
  switch (hand) {
    case "rock":
      if (cpHand === "paper") {
        setDecision("YOU LOOSE!");
        SCORE--;
      }
      if (hand === cpHand) {
        setDecision("TIE!");
      }
      if (cpHand === "scissors") {
        setDecision("YOU WIN!");
        SCORE++;
      }

      break;
    case "paper":
      if (cpHand === "scissors") {
        setDecision("YOU LOOSE!");
        SCORE--;
      }
      if (hand === cpHand) {
        setDecision("TIE!");
      }
      if (cpHand === "rock") {
        setDecision("YOU WIN!");
        SCORE++;
      }
      break;
    case "scissors":
      if (cpHand === "rock") {
        setDecision("YOU LOOSE!");
        SCORE--;
      }
      if (hand === cpHand) {
        setDecision("TIE!");
      }
      if (cpHand === "paper") {
        setDecision("YOU WIN!");
        SCORE++;
      }
      break;
  }
  document.querySelector(".score h1").innerText = SCORE;
};

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
};

const restartGame = function () {
  contest.style.display = "none";
  hands.style.display = "flex";
};
