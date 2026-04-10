let currentIndex = 0;
let score = 0;
let shuffledQuotes = [];
let acceptingAnswers = true;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startQuiz() {
  shuffledQuotes = shuffle([...quotes]);
  currentIndex = 0;
  score = 0;
  updateScoreDisplay();
  showQuestion();
}

function showQuestion() {
  const q = shuffledQuotes[currentIndex];

  document.getElementById("quoteText").textContent = q.text;

  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  const shuffledOptions = shuffle([...q.options]);

  shuffledOptions.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(btn, option, q.speaker);
    optionsContainer.appendChild(btn);
  });

  document.getElementById("hintText").classList.add("hidden");
  document.getElementById("hintText").textContent = q.hint;

  document.getElementById("nextButton").classList.add("hidden");
  acceptingAnswers = true;
}

function selectAnswer(button, selected, correct) {
  if (!acceptingAnswers) return;
  acceptingAnswers = false;

  const buttons = document.querySelectorAll("#optionsContainer button");

  buttons.forEach(btn => btn.disabled = true);

  if (selected === correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("incorrect");
  }

  buttons.forEach(btn => {
    if (btn.textContent === correct) {
      btn.classList.add("correct");
    }
  });

  updateScoreDisplay();

  document.getElementById("nextButton").classList.remove("hidden");
}

function updateScoreDisplay() {
  const scoreDisplay = document.getElementById("scoreDisplay");
  scoreDisplay.textContent = "Score: " + score + " / " + currentIndex;
}

document.getElementById("nextButton").onclick = () => {
  currentIndex++;
  if (currentIndex < shuffledQuotes.length) {
    showQuestion();
  } else {
    showResults();
  }
};

function showResults() {
  document.getElementById("quizContainer").classList.add("hidden");
  document.getElementById("resultScreen").classList.remove("hidden");
  document.getElementById("finalScore").textContent =
    score + " out of " + shuffledQuotes.length;
}

document.getElementById("hintButton").onclick = () => {
  document.getElementById("hintText").classList.remove("hidden");
};

document.getElementById("menuButton").onclick = () => {
  location.href = "index.html";
};

startQuiz();
