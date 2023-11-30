document.addEventListener("DOMContentLoaded", function() {
    // list of play options
    var options = ["rock", "paper", "scissors"];

    // winning rules
    var rules = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
    };

    // Function to determine the game result
    function playGame() {
        // get player choice
        var playerChoice = document.getElementById("choice").value;

        // get computer choice
        var computerChoice = options[Math.floor(Math.random() * options.length)];

        // display player and computer choices
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "Player's choice: " + playerChoice + "<br>Computer's choice: " + computerChoice;

        // check the result
        if (playerChoice === computerChoice) {
            resultDiv.innerHTML += "<br>It's a tie!";
        } else if (rules[playerChoice] === computerChoice) {
            resultDiv.innerHTML += "<br>You win!";
        } else {
            resultDiv.innerHTML += "<br>You lose!";
        }
    }

    // Add event listener for the play button
    var playButton = document.getElementById("playButton");
    playButton.addEventListener("click", playGame);
});
