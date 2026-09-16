const terminal = document.getElementById("terminalText");
const messages =[
    ">Loading Memories.....",
    ">Searching For Hero....",
    ">Retrieving Hero Data....",
    ">Adjusting Compass....",
    ">Hero Name: Habibi",
    ">Level 17",
    "Status: Quest Available"
];

let messageIndex = 0;
let charIndex =0;
let output = "";

function typemessage(){
    if( messageIndex >= messages.length){
       setTimeout(() => {
         terminal.innerHTML +=`
        <br><br>
<br><br>
<strong> WELCOME BACK,</strong><br><br>
<span style="font-size:2rem; color:#d4af37;">HABIBI</span><br><br>
PRESS <strong>ENTER</strong> TO BEGIN YOUR UPGRADE TO ANOTHER LEVEL...
<br><br>`
       ;
       },1000)
 return;
    }
        const currentMessage = messages[messageIndex];
        output += currentMessage.charAt(charIndex);

        terminal.innerHTML = output +'<span class="cursor">|</span>';
        charIndex++;
        if(charIndex < currentMessage.length){
            setTimeout(typemessage, 95);
        }else{
            output += "<br>";

            charIndex = 0;
            messageIndex++;
            setTimeout(typemessage, 50   );

        }
    } 


typemessage();

document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        document.body.classList.add("fade-out");
        setTimeout(()=> {
            window.location.href = "C1.html";
        }, 1500)
    }
    });