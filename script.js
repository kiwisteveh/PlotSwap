// ------------------------------
// EVENT POOLS (unchanged)
// ------------------------------

const levelPools = {
  1: [
    "Scout starts school and meets Miss Caroline",
    "Jem touches the Radley house on a dare",
    "Walter Cunningham joins the Finches for lunch",
    "Scout finds gifts in the knothole",
    "Miss Maudie's house burns down",
    "Atticus shoots the mad dog",
    "The children try to see Boo Radley",
    "Scout and Jem build a snowman",
    "The knothole is cemented shut",
    "Jem reads to Mrs. Dubose",
    "Calpurnia takes the children to her church",
    "Aunt Alexandra arrives to stay with the Finches"
  ],

  2: [
    "Scout starts school and meets Miss Caroline",
    "Jem touches the Radley house on a dare",
    "Walter Cunningham joins the Finches for lunch",
    "Scout finds gifts in the knothole",
    "Miss Maudie's house burns down",
    "Atticus shoots the mad dog",
    "The children try to see Boo Radley",
    "Scout and Jem build a snowman",
    "The knothole is cemented shut",
    "Jem reads to Mrs. Dubose",
    "Calpurnia takes the children to her church",
    "Aunt Alexandra arrives to stay with the Finches",
    "Atticus sits outside the jail to protect Tom Robinson",
    "Scout diffuses the mob at the jail",
    "The trial begins in the courthouse",
    "Mayella Ewell testifies against Tom",
    "Tom Robinson gives his testimony",
    "The jury delivers its verdict"
  ],

  3: [
    "Scout starts school and meets Miss Caroline",
    "Jem touches the Radley house on a dare",
    "Walter Cunningham joins the Finches for lunch",
    "Scout finds gifts in the knothole",
    "Miss Maudie's house burns down",
    "Atticus shoots the mad dog",
    "The children try to see Boo Radley",
    "Scout and Jem build a snowman",
    "The knothole is cemented shut",
    "Jem reads to Mrs. Dubose",
    "Calpurnia takes the children to her church",
    "Aunt Alexandra arrives to stay with the Finches",
    "Atticus sits outside the jail to protect Tom Robinson",
    "Scout diffuses the mob at the jail",
    "The trial begins in the courthouse",
    "Mayella Ewell testifies against Tom",
    "Tom Robinson gives his testimony",
    "The jury delivers its verdict",
    "Bob Ewell spits in Atticus's face",
    "Tom Robinson attempts escape",
    "Scout takes part in the Halloween pageant",
    "Bob Ewell attacks Jem and Scout",
    "Boo Radley saves the children",
    "Scout finally meets Boo and walks him home"
  ]
};

// ------------------------------
// UTILITY FUNCTIONS
// ------------------------------

function shuffle(array) {
  return array
    .map(v => ({ v, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(o => o.v);
}

function pick12(pool) {
  return shuffle(pool).slice(0, 12);
}

// ------------------------------
// GAME LOGIC
// ------------------------------

let currentCorrectOrder = [];

function loadLevel(level) {
  const pool = levelPools[level];

  // Step 1: pick 12 random events
  const selected = pick12(pool);

  // Step 2: determine the correct order for THESE 12
  currentCorrectOrder = [...selected].sort(
    (a, b) => pool.indexOf(a) - pool.indexOf(b)
  );

  // Step 3: shuffle for display
  const shuffled = shuffle(selected);

  const board = document.getElementById("gameBoard");
  board.innerHTML = "";

  shuffled.forEach(text => {
    const div = document.createElement("div");
    div.className = "tile";
    div.draggable = true;
    div.textContent = text;

    div.addEventListener("dragstart", dragStart);
    div.addEventListener("dragover", dragOver);
    div.addEventListener("drop", drop);

    board.appendChild(div);
  });

  updateTileColours();
}

let draggedTile = null;

function dragStart(e) {
  draggedTile = e.target;
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const targetTile = e.target;

  if (!draggedTile || !targetTile || !targetTile.classList.contains("tile")) {
    return;
  }

  // Swap the text content of the two tiles
  const tempText = draggedTile.textContent;
  draggedTile.textContent = targetTile.textContent;
  targetTile.textContent = tempText;

  draggedTile = null;

  updateTileColours();
}

function updateTileColours() {
  const tiles = Array.from(document.getElementById("gameBoard").children);
  const currentOrder = tiles.map(tile => tile.textContent);

  let correctCount = 0;

  tiles.forEach(tile => tile.classList.remove("correct", "incorrect"));

  currentOrder.forEach((item, i) => {
    if (item === currentCorrectOrder[i]) {
      tiles[i].classList.add("correct");
      correctCount++;
    } else {
      tiles[i].classList.add("incorrect");
    }
  });

  // Update progress bar (if you added it)
  const percent = (correctCount / 12) * 100;
  const bar = document.getElementById("progressBar");
  const text = document.getElementById("progressText");

  if (bar) bar.style.width = percent + "%";
  if (text) text.textContent = `${correctCount} / 12 correct`;

  // Trigger confetti when perfect
  if (correctCount === 12) {
    launchConfetti();
  }
}


// ------------------------------
// EVENT LISTENERS
// ------------------------------

document.getElementById("levelSelect").addEventListener("change", e => {
  loadLevel(e.target.value);
});

document.getElementById("newSetBtn").addEventListener("click", () => {
  const level = document.getElementById("levelSelect").value;
  loadLevel(level);
});

// Load Level 1 on startup
loadLevel(1);
function launchConfetti() {
  const duration = 1200;
  const end = Date.now() + duration;

  (function frame() {
    // Create a single confetti particle
    const particle = document.createElement("div");
    particle.className = "confetti";
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;
    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1200);

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
