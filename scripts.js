const words = [
    { english: "hello", hebrew: "שלום" },
    { english: "name", hebrew: "שם" },
    { english: "book", hebrew: "ספר" },
    { english: "computer", hebrew: "מחשב" },
    { english: "sun", hebrew: "שמש" }
];

let currentWord = {};

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function startTranslationGame() {
    currentWord = getRandomWord();
    document.getElementById("word").innerText = `Translate the word: ${currentWord.english}`;
    document.getElementById("translation").value = "";
    document.getElementById("result").innerText = "";
}

function checkTranslation() {
    const userTranslation = document.getElementById("translation").value.trim();
    if (userTranslation === currentWord.hebrew) {
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = `Incorrect. The correct translation is: ${currentWord.hebrew}`;
    }
}
