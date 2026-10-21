
const terminal = document.getElementById("terminalText");

const messages = [
    ">Loading Memories.....",
    ">Searching For Hero....",
    ">Retrieving Hero Data....",
    ">Adjusting Compass....",
    ">Hero Name: Habibi",
    ">Level 17",
    "Status: Quest Available"
];

let messageIndex = 0;
let charIndex = 0;
let output = "";
let ready = false;
let transitioning = false;

function typeMessage() {
    if (messageIndex >= messages.length) {
        setTimeout(() => {
            terminal.innerHTML = output + `
                <br><br>
                <strong>WELCOME BACK,</strong><br><br>
                <span style="font-size:2rem; color:#d4af37;">HABIBI</span><br><br>
                <span class="desktop-hint">PRESS ENTER OR</span>
                TAP BELOW TO BEGIN YOUR UPGRADE TO ANOTHER LEVEL...
                <br><br>
                <button id="startBtn">CONTINUE →</button>
            `;

            document.getElementById("startBtn")
                .addEventListener("click", continueExperience);

            ready = true;
        }, 1000);
        return;
    }

    const currentMessage = messages[messageIndex];
    output += currentMessage.charAt(charIndex);

    terminal.innerHTML = output + '<span class="cursor">|</span>';
    charIndex++;

    if (charIndex < currentMessage.length) {
        setTimeout(typeMessage, 95);
    } else {
        output += "<br>";
        charIndex = 0;
        messageIndex++;
        setTimeout(typeMessage, 50);
    }
}

function continueExperience() {
    if (!ready || transitioning) return;

    transitioning = true;
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "C1.html";
    }, 1500);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        continueExperience();
    }
});

typeMessage();
