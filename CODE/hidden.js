const archiveHome = document.getElementById("archiveHome");
const memoriesCard = document.getElementById("memoriesCard");
const memoriesContent = document.getElementById("memoriesContent");
const backToArchive = document.getElementById("backToArchive");

const memory1 = document.getElementById("memory1");
const memoryFile = document.getElementById("memoryFile");
const backToMemories = document.getElementById("backToMemories");
const memoryStatus = document.getElementById("memoryStatus");
const memoryText = document.getElementById("memoryText");

memoriesCard.addEventListener("click", () => {
    archiveHome.classList.add("hidden");

    setTimeout(() => {
        memoriesContent.classList.add("active");
    }, 300);
});

backToArchive.addEventListener("click", () => {
    memoriesContent.classList.remove("active");

    setTimeout(() => {
        archiveHome.classList.remove("hidden");
    }, 300);
});

memory1.addEventListener("click", () => {
    memoriesContent.classList.remove("active");

    setTimeout(() => {
        memoryFile.classList.add("active");
        memoryStatus.style.display = "block";
        memoryText.style.display = "none";

        setTimeout(() => {
            memoryStatus.textContent = "FILE RECOVERED.";
        }, 600);

        setTimeout(() => {
            memoryStatus.style.display = "none";
            memoryText.style.display = "block";
        }, 1000);
    }, 300);
});

backToMemories.addEventListener("click", () => {
    memoryFile.classList.remove("active");

    setTimeout(() => {
        memoriesContent.classList.add("active");
    }, 300);
});

const memory2 = document.getElementById("memory2");
const memoryFile2 = document.getElementById("memoryFile2");
const backToMemories2 = document.getElementById("backToMemories2");
const memoryStatus2 = document.getElementById("memoryStatus2");
const memoryText2 = document.getElementById("memoryText2");

memory2.addEventListener("click", () => {
    memoriesContent.classList.remove("active");

    setTimeout(() => {
        memoryFile2.classList.add("active");
        memoryStatus2.style.display = "block";
        memoryText2.style.display = "none";

        setTimeout(() => {
            memoryStatus2.textContent = "FILE RECOVERED.";
        }, 600);

        setTimeout(() => {
            memoryStatus2.style.display = "none";
            memoryText2.style.display = "block";
        }, 1000);
    }, 300);
});

backToMemories2.addEventListener("click", () => {
    memoryFile2.classList.remove("active");

    setTimeout(() => {
        memoriesContent.classList.add("active");
    }, 300);
});

const memory3 = document.getElementById("memory3");
const memoryFile3 = document.getElementById("memoryFile3");
const backToMemories3 = document.getElementById("backToMemories3");
const memoryStatus3 = document.getElementById("memoryStatus3");
const memoryText3 = document.getElementById("memoryText3");

memory3.addEventListener("click", () => {
    memoriesContent.classList.remove("active");

    setTimeout(() => {
        memoryFile3.classList.add("active");
        memoryStatus3.style.display = "block";
        memoryText3.style.display = "none";

        setTimeout(() => {
            memoryStatus3.textContent = "FILE RECOVERED.";
        }, 600);

        setTimeout(() => {
            memoryStatus3.style.display = "none";
            memoryText3.style.display = "block";
        }, 1000);
    }, 300);
});

backToMemories3.addEventListener("click", () => {
    memoryFile3.classList.remove("active");

    setTimeout(() => {
        memoriesContent.classList.add("active");
    }, 300);
});

const memory4 = document.getElementById("memory4");
const memoryFile4 = document.getElementById("memoryFile4");
const backToMemories4 = document.getElementById("backToMemories4");
const memoryStatus4 = document.getElementById("memoryStatus4");
const memoryText4 = document.getElementById("memoryText4");

memory4.addEventListener("click", () => {
    memoriesContent.classList.remove("active");

    setTimeout(() => {
        memoryFile4.classList.add("active");
        memoryStatus4.style.display = "block";
        memoryText4.style.display = "none";

        setTimeout(() => {
            memoryStatus4.textContent = "FILE RECOVERED.";
        }, 600);

        setTimeout(() => {
            memoryStatus4.style.display = "none";
            memoryText4.style.display = "block";
        }, 1000);
    }, 300);
});

backToMemories4.addEventListener("click", () => {
    memoryFile4.classList.remove("active");

    setTimeout(() => {
        memoriesContent.classList.add("active");
    }, 300);
});

const memory5 = document.getElementById("memory5");
const memoryFile5 = document.getElementById("memoryFile5");
const backToMemories5 = document.getElementById("backToMemories5");
const memoryStatus5 = document.getElementById("memoryStatus5");
const memoryText5 = document.getElementById("memoryText5");

memory5.addEventListener("click", () => {
    memoriesContent.classList.remove("active");

    setTimeout(() => {
        memoryFile5.classList.add("active");
        memoryStatus5.style.display = "block";
        memoryText5.style.display = "none";

        setTimeout(() => {
            memoryStatus5.textContent = "FILE RECOVERED.";
        }, 600);

        setTimeout(() => {
            memoryStatus5.style.display = "none";
            memoryText5.style.display = "block";
        }, 1000);
    }, 300);
});

backToMemories5.addEventListener("click", () => {
    memoryFile5.classList.remove("active");

    setTimeout(() => {
        memoriesContent.classList.add("active");
    }, 300);
});

const cakeCard = document.getElementById("cakeCard");
const cakeContent = document.getElementById("cakeContent");
const backToArchiveFromCake = document.getElementById("backToArchiveFromCake");

cakeCard.addEventListener("click", () => {
    archiveHome.classList.add("hidden");

    setTimeout(() => {
        cakeContent.classList.add("active");
    }, 300);
});

backToArchiveFromCake.addEventListener("click", () => {
    cakeContent.classList.remove("active");

    setTimeout(() => {
        archiveHome.classList.remove("hidden");
    }, 300);
});

const soundtrackCard = document.getElementById("soundtrackCard");
const soundtrackContent = document.getElementById("soundtrackContent");
const backToArchiveFromSoundtrack = document.getElementById("backToArchiveFromSoundtrack");

soundtrackCard.addEventListener("click", () => {
    archiveHome.classList.add("hidden");

    setTimeout(() => {
        soundtrackContent.classList.add("active");
    }, 300);
});

backToArchiveFromSoundtrack.addEventListener("click", () => {
    soundtrackContent.classList.remove("active");

    setTimeout(() => {
        archiveHome.classList.remove("hidden");
    }, 300);
});

const catchphrasesCard = document.getElementById("catchphrasesCard");
const catchphrasesContent = document.getElementById("catchphrasesContent");
const backToArchiveFromCatchphrases = document.getElementById("backToArchiveFromCatchphrases");

catchphrasesCard.addEventListener("click", () => {
    archiveHome.classList.add("hidden");

    setTimeout(() => {
        catchphrasesContent.classList.add("active");
    }, 300);
});

backToArchiveFromCatchphrases.addEventListener("click", () => {
    catchphrasesContent.classList.remove("active");

    setTimeout(() => {
        archiveHome.classList.remove("hidden");
    }, 300);
});

const adviceCard = document.getElementById("adviceCard");
const adviceContent = document.getElementById("adviceContent");
const backToArchiveFromAdvice = document.getElementById("backToArchiveFromAdvice");

adviceCard.addEventListener("click", () => {
    archiveHome.classList.add("hidden");

    setTimeout(() => {
        adviceContent.classList.add("active");
    }, 300);
});

backToArchiveFromAdvice.addEventListener("click", () => {
    adviceContent.classList.remove("active");

    setTimeout(() => {
        archiveHome.classList.remove("hidden");
    }, 300);
});

const memesCard = document.getElementById("memesCard");
const memesContent = document.getElementById("memesContent");
const backToArchiveFromMemes = document.getElementById("backToArchiveFromMemes");

memesCard.addEventListener("click", () => {
    archiveHome.classList.add("hidden");

    setTimeout(() => {
        memesContent.classList.add("active");
    }, 300);
});

backToArchiveFromMemes.addEventListener("click", () => {
    memesContent.classList.remove("active");

    setTimeout(() => {
        archiveHome.classList.remove("hidden");
    }, 300);
});

backToArchiveFromMemes.addEventListener("click", () => {
    memesContent.classList.remove("active");

    setTimeout(() => {
        archiveHome.classList.remove("hidden");
    }, 300);
});

const inventoryBtn = document.getElementById("inventoryBtn");

inventoryBtn.addEventListener("click", () => {
    window.location.href = "inventory.html";
});