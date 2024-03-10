const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#resetButton');
const winningScoreSelect = document.querySelector('#winningScoreSelect');

let winningScore = 5;
let isGameOver = false;

const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display'),
};

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display'),
};

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score++;
    if (((player.score == winningScore) & (player.score - opponent.score >= 2)) | ((player.score > winningScore) & (player.score - opponent.score == 2))) {
      isGameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener('click', () => {
  updateScores(p1, p2);
});

p2.button.addEventListener('click', () => {
  updateScores(p2, p1);
});
winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  // this berarti = winningScoreSelect
  reset();
});

resetButton.addEventListener('click', reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
}
