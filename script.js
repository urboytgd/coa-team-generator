// script.js
document.addEventListener("DOMContentLoaded", () => {
    const playerNameInput = document.getElementById("playerName");
    const addPlayerButton = document.getElementById("addPlayer");
    const generateTeamsButton = document.getElementById("generateTeams");
    const playersList = document.getElementById("players");
    const redTeamList = document.querySelector("#redTeam ul");
    const blueTeamList = document.querySelector("#blueTeam ul");

    let players = [];

    addPlayerButton.addEventListener("click", () => {
        const playerName = playerNameInput.value.trim();
        if (playerName !== "") {
            players.push(playerName);
            playerNameInput.value = "";
            updatePlayerList();
        }
    });

    playerNameInput.addEventListener("keydown", (event) => {
        const playerName = playerNameInput.value.trim();
        if (event.key === "Enter" && playerName.length > 0) {
            players.push(playerName);
            playerNameInput.value = "";
            updatePlayerList();
        }
    } )

    generateTeamsButton.addEventListener("click", () => {
        if (players.length >= 2) {
            const shuffledPlayers = shuffleArray([...players]);
            const midpoint = Math.ceil(shuffledPlayers.length / 2);
            const redTeam = shuffledPlayers.slice(0, midpoint);
            const blueTeam = shuffledPlayers.slice(midpoint);
            displayTeams(redTeam, blueTeam);
        } else {
            alert("Please add at least 2 players to generate teams.");
        }
    });

    function updatePlayerList() {
        playersList.innerHTML = players.map(player => `<li>${player}</li>`).join("");
    }

    function displayTeams(redTeam, blueTeam) {
        redTeamList.innerHTML = redTeam.map(player => `<li>${player}</li>`).join("");
        blueTeamList.innerHTML = blueTeam.map(player => `<li>${player}</li>`).join("");
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
