// Nickname Generator

// Global Variables
fetch("nicknames.txt")
    .then((rawData) => rawData.text())
    .then((data) => getNick = data.split(","));
// let getNick = ["The Grim Reaper", "The Hawk", "Ironhead", "Prime Time", "The Microwave", "Goldenrod"];
let nickIndex = 0;

// Event Listener
document.getElementById('randomNickname').addEventListener("click", randNick);
document.getElementById('allNicknames').addEventListener("click", allNick);

// Event Functions
function randNick() {
    // Randomize nickname from array
    nickIndex = Math.randomInt(0, getNick.length);

    let firstname = document.getElementById('firstName').value;
    let lastname = document.getElementById('lastName').value;

    // display Nickname
    document.getElementById('nicknameResults').innerHTML = firstname + ' "' + getNick[nickIndex] + '" ' + lastname;
}

function allNick() {
    // Display all nicknames

    let firstname = document.getElementById('firstName').value;
    let lastname = document.getElementById('lastName').value;
    
    for (let i = 0; i < getNick.length; i++) {
        document.getElementById('nicknameResults').innerHTML += firstname + ' "' + getNick[i] + '" ' + lastname + "<br>";
    }
}