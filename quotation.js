// -------------------------------
// Quotation Quiz Data (ASCII only)
// -------------------------------

const quotes = [

  // --- ATTICUS (12) ---
  {
    text: "Sometimes doing what is right means standing alone.",
    speaker: "Atticus",
    options: ["Atticus", "Scout", "Jem", "Miss Maudie"],
    hint: "This character often speaks about moral courage."
  },
  {
    text: "You never truly understand someone until you consider things from their point of view.",
    speaker: "Atticus",
    options: ["Atticus", "Calpurnia", "Aunt Alexandra", "Heck Tate"],
    hint: "A lesson about empathy."
  },
  {
    text: "Courage is not a man with a gun; it is knowing you are beaten but beginning anyway.",
    speaker: "Atticus",
    options: ["Atticus", "Jem", "Scout", "Tom Robinson"],
    hint: "This character redefines bravery for the children."
  },
  {
    text: "The truth does not change just because people refuse to see it.",
    speaker: "Atticus",
    options: ["Atticus", "Miss Maudie", "Aunt Alexandra", "Jem"],
    hint: "This speaker values honesty above comfort."
  },
  {
    text: "Most people are good when you finally see them clearly.",
    speaker: "Atticus",
    options: ["Atticus", "Scout", "Calpurnia", "Boo Radley"],
    hint: "A reflection on human nature."
  },
  {
    text: "The law is meant to protect the vulnerable, not punish them.",
    speaker: "Atticus",
    options: ["Atticus", "Heck Tate", "Judge Taylor", "Tom Robinson"],
    hint: "This character believes deeply in justice."
  },
  {
    text: "Real courage is doing the right thing even when the world disagrees.",
    speaker: "Atticus",
    options: ["Atticus", "Scout", "Miss Maudie", "Aunt Alexandra"],
    hint: "A moral lesson for his children."
  },
  {
    text: "It is never an insult to be called what someone thinks is a bad name.",
    speaker: "Atticus",
    options: ["Atticus", "Scout", "Jem", "Calpurnia"],
    hint: "This speaker teaches resilience."
  },
  {
    text: "Before I can live with others, I must live with myself.",
    speaker: "Atticus",
    options: ["Atticus", "Miss Maudie", "Jem", "Aunt Alexandra"],
    hint: "A statement about personal integrity."
  },
  {
    text: "People fear what they do not understand.",
    speaker: "Atticus",
    options: ["Atticus", "Scout", "Boo Radley", "Dill"],
    hint: "This character often explains prejudice."
  },
  {
    text: "A courtroom should be the one place where everyone is equal.",
    speaker: "Atticus",
    options: ["Atticus", "Judge Taylor", "Heck Tate", "Tom Robinson"],
    hint: "This speaker defends someone unfairly accused."
  },
  {
    text: "You cannot hold a child responsible for the sins of their community.",
    speaker: "Atticus",
    options: ["Atticus", "Calpurnia", "Miss Maudie", "Aunt Alexandra"],
    hint: "A reminder about innocence."
  },

  // --- SCOUT (10) ---
  {
    text: "I was still trying to figure out why grown-ups said one thing but meant another.",
    speaker: "Scout",
    options: ["Scout", "Jem", "Dill", "Aunt Alexandra"],
    hint: "This speaker is young and observant."
  },
  {
    text: "The world did not make sense to me, but I was determined to understand it.",
    speaker: "Scout",
    options: ["Scout", "Jem", "Atticus", "Miss Maudie"],
    hint: "This character narrates the story."
  },
  {
    text: "Sometimes I spoke before thinking, and it always got me into trouble.",
    speaker: "Scout",
    options: ["Scout", "Jem", "Dill", "Calpurnia"],
    hint: "This character is impulsive but honest."
  },
  {
    text: "I did not see why people cared so much about who belonged where.",
    speaker: "Scout",
    options: ["Scout", "Aunt Alexandra", "Jem", "Miss Maudie"],
    hint: "This speaker questions social rules."
  },
  {
    text: "I thought being fair was simple until I learned how complicated people could be.",
    speaker: "Scout",
    options: ["Scout", "Jem", "Atticus", "Calpurnia"],
    hint: "This character learns about justice."
  },
  {
    text: "I never liked being told to act like a lady.",
    speaker: "Scout",
    options: ["Scout", "Aunt Alexandra", "Miss Maudie", "Calpurnia"],
    hint: "This speaker resists traditional expectations."
  },
  {
    text: "I did not understand why people hated others they had never met.",
    speaker: "Scout",
    options: ["Scout", "Jem", "Atticus", "Dill"],
    hint: "This character questions prejudice."
  },
  {
    text: "Sometimes the things adults whispered were louder than anything they said aloud.",
    speaker: "Scout",
    options: ["Scout", "Jem", "Miss Maudie", "Aunt Alexandra"],
    hint: "This speaker notices everything."
  },
  {
    text: "I was not afraid of the dark, just the things people imagined in it.",
    speaker: "Scout",
    options: ["Scout", "Jem", "Dill", "Boo Radley"],
    hint: "This character grows braver over time."
  },
  {
    text: "I learned that bravery comes in many shapes, not just fists and shouting.",
    speaker: "Scout",
    options: ["Scout", "Jem", "Atticus", "Calpurnia"],
    hint: "This speaker matures through the story."
  },

  // --- JEM (8) ---
  {
    text: "I used to think the world was fair, but I was wrong.",
    speaker: "Jem",
    options: ["Jem", "Scout", "Atticus", "Dill"],
    hint: "This character loses innocence during the trial."
  },
  {
    text: "Growing up meant learning things I did not want to know.",
    speaker: "Jem",
    options: ["Jem", "Scout", "Dill", "Atticus"],
    hint: "This speaker matures painfully."
  },
  {
    text: "Sometimes you have to face something even when you are terrified.",
    speaker: "Jem",
    options: ["Jem", "Scout", "Atticus", "Dill"],
    hint: "This character tries to be brave."
  },
  {
    text: "I wanted to believe people were better than they acted.",
    speaker: "Jem",
    options: ["Jem", "Scout", "Miss Maudie", "Atticus"],
    hint: "This speaker struggles with disappointment."
  },
  {
    text: "I could not understand how a jury could ignore the truth.",
    speaker: "Jem",
    options: ["Jem", "Atticus", "Scout", "Tom Robinson"],
    hint: "This character is devastated by the verdict."
  },
  {
    text: "Sometimes I felt older than I really was.",
    speaker: "Jem",
    options: ["Jem", "Scout", "Dill", "Atticus"],
    hint: "This speaker grows up quickly."
  },
  {
    text: "I tried to protect Scout, even when I did not know how.",
    speaker: "Jem",
    options: ["Jem", "Atticus", "Dill", "Calpurnia"],
    hint: "This character feels responsible for his sibling."
  },
  {
    text: "I wanted to fix things, but some things were too big for me.",
    speaker: "Jem",
    options: ["Jem", "Scout", "Atticus", "Dill"],
    hint: "This speaker learns his limits."
  },

  // --- CALPURNIA (5) ---
  {
    text: "Manners show respect, no matter where you come from.",
    speaker: "Calpurnia",
    options: ["Calpurnia", "Miss Maudie", "Aunt Alexandra", "Atticus"],
    hint: "This character teaches the children about dignity."
  },
  {
    text
