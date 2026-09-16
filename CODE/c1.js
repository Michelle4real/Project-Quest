const pages = [

`Status:
Historical records located.....
Scanning memory pages.....
Cross-referencing timeline.....
Your Guide's personality loading.....
Reconstruction ready.`,

`SYSTEM OVERRIDE!!!

PSYCH!😏

This isn't a historical record.

It's a collection of random moments,
memories,
and a bunch of random shii I remember about you.😏`,

`It's really funny.

There are so many places I could've started with...

I could start at the time of conception....

Or from the time your parents used you to celebrate Valentine's Day 😏.....

So many tunnels to choose from.....

I'm not even sure where to start.`,

`WHO WERE YOU WHEN I FIRST MET YOU?

You were a 16 year old nigga fresh out of boarding school.

You were a guy who had just started a new phase of experiences.

You were quite strange actually.

But you were nice.

You were also very stubborn.
Almost as stubborn as me.`,

`You were chill.
Understanding.
Very attentive...

Unlike now 😒😂

You were learning to navigate this new phase
and trying to understand everything happening around you.

You were trying to cope with so many changes
happening at the same time.`,

`Loss of friends.
More sense of responsibility.

And I'm definitely not saying this
to flatter you at all.

But you were and are an amazing person
with a good heart
trying so hard to form nonchalant.

The cutest nonchalant I've ever seen.

My gosh.
You were so cute.`,

`WHERE DID WE MEET?

We met on Snapchat because of Josiah.

A wingman without even knowing it.

And we first met in person in chapel.

And that's practically the foundation of my story.`,

`But let's head somewhere first of all
and find out...

Who knows what you'll find 😏

OFF TO THE HIDDEN ARCHIVES
MY GUY 😂😉.`

];

let currentPage = 0;
let typing = false;

const story = document.getElementById("storyText");
const button = document.getElementById("continueBtn");

function typeWriter(text) {
    story.innerHTML = "";
    story.style.opacity = "1";
    typing = true;

    button.style.opacity = "0";
    button.style.pointerEvents = "none";

    const isSystem = text.includes("SYSTEM OVERRIDE") || text.startsWith("Status:");

    story.classList.toggle("system-text", isSystem);

    let index = 0;

    function type() {
        if (index < text.length) {
            const character = text.charAt(index);

            if (character === "\n") {
                story.innerHTML += "<br>";
            } else {
                story.innerHTML += character;
            }

            index++;
            setTimeout(type, 64);
        } else {
            typing = false;
            button.style.opacity = "1";
            button.style.pointerEvents = "auto";
        }
    }

    type();
}

button.addEventListener("click", () => {
    if (typing) return;

    currentPage++;

    if (currentPage < pages.length) {
        story.style.opacity = "0";

        setTimeout(() => {
            typeWriter(pages[currentPage]);
        }, 800);

    } else {
        story.style.opacity = "0";

        setTimeout(() => {
            story.classList.add("system-text");
            story.innerHTML = `
                ARCHIVE ACCESS GRANTED<br><br>
                Opening Hidden Archive...
            `;

            story.style.opacity = "1";

            setTimeout(() => {
                window.location.href = "hidden.html";
            }, 1800);

        }, 800);
    }
});

typeWriter(pages[0]);