// ------------------------------
// EVENT POOLS
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
    // Level 1 events
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

    // Additional 6
    "Atticus sits outside the jail to protect Tom Robinson",
    "Scout diffuses the mob at the jail",
    "The trial begins in the courthouse",
    "Mayella Ewell testifies against Tom",
    "Tom Robinson gives his testimony",
    "The jury delivers its verdict"
  ],

  3: [
    // Level 2 events
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

    // Additional 6
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

  // canonical order = first 12 events in the pool
  currentCorrectOrder = pool.slice(0, 12);

  const selected = pick12(pool);
  const shuffled = shuffle(selected);

  const board = document.getElementById("gameBoard");
  board.innerHTML = "";

  shuffled.forEach((text, index) => {
    const div = document.createElement("div");
    div.className = "tile";
    div.draggable = true;
    div.textContent = text;
    div.dataset.index = index;

    div.addEventListener("dragstart", dragStart);
    div.addEventListener("dragover", dragOver);
    div.addEventListener("drop", drop);

    board.appendChild(div);
  });

  document.getElementById("result").textContent = "";
}

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.dataset.index);
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const fromIndex = e.dataTransfer.getData("text/plain");
  const toIndex = e.target.dataset.index;

  const board = document.getElementById("gameBoard");
  const tiles = Array.from(board.children);

  board.insertBefore(tiles[fromIndex], tiles[toIndex]);

  // update indices
  Array.from(board.children).forEach((tile, i) => {
    tile.dataset.index = i;
  });
}

function checkOrder() {
  const tiles = Array.from(document.getElementById("gameBoard").children);
  const currentOrder = tiles.map(tile => tile.textContent);

  tiles.forEach(tile => tile.classList.remove("correct", "incorrect"));

  let allCorrect = true;

  currentOrder.forEach((item, i) => {
    if (item === currentCorrectOrder[i]) {
      tiles[i].classList.add("correct");
    } else {
      tiles[i].classList.add("incorrect");
      allCorrect = false;
    }
  });

  document.getElementById("result").textContent =
    allCorrect ? "Perfect! All events are in the correct order." :
    "Some events are out of order — keep trying.";
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

document.getElementById("checkBtn").addEventListener("click", checkOrder);

// Load Level 1 on startup
loadLevel(1);
