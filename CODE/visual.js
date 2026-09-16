const photoGrid = document.getElementById("photoGrid");
const videoGrid = document.getElementById("videoGrid");
const mediaViewer = document.getElementById("mediaViewer");
const viewerContent = document.getElementById("viewerContent");
const closeViewer = document.getElementById("closeViewer");
const backBtn = document.getElementById("backBtn");
const continueBtn = document.getElementById("continueBtn");

const photos = Array.from(
    { length: 20 },
    (_, i) => `photos/photo${String(i + 1).padStart(2, "0")}.jpeg`
);

const videos = Array.from(
    { length: 10 },
    (_, i) => `videos/video${String(i + 1).padStart(2, "0")}.mp4`
);

photos.forEach((src, index) => {
    const card = document.createElement("div");
    card.className = "media-card";

    card.innerHTML = `
        <img src="${src}" alt="Photo ${index + 1}">
        <div class="media-info">
            <span>IMAGE FILE</span>
            <h3>IMAGE ${String(index + 1).padStart(3, "0")}</h3>
        </div>
    `;

    card.addEventListener("click", () => openViewer("image", src));
    photoGrid.appendChild(card);
});

videos.forEach((src, index) => {
    const card = document.createElement("div");
    card.className = "media-card";

    card.innerHTML = `
        <video src="${src}" muted></video>
        <div class="media-info">
            <span>VIDEO FILE</span>
            <h3>VIDEO ${String(index + 1).padStart(3, "0")}</h3>
        </div>
    `;

    card.addEventListener("click", () => openViewer("video", src));
    videoGrid.appendChild(card);
});

function openViewer(type, src) {
    viewerContent.innerHTML = "";

    if (type === "image") {
        const media = document.createElement("img");
        media.className = "viewer-image";
        media.src = src;
        media.alt = "Visual record";
        viewerContent.appendChild(media);
    } else {
        const media = document.createElement("video");
        media.src = src;
        media.controls = true;
        media.autoplay = true;
        viewerContent.appendChild(media);
    }

    mediaViewer.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMediaViewer() {
    mediaViewer.classList.remove("active");
    viewerContent.innerHTML = "";
    document.body.style.overflow = "";
}

closeViewer.addEventListener("click", closeMediaViewer);

mediaViewer.addEventListener("click", (event) => {
    if (event.target === mediaViewer) {
        closeMediaViewer();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mediaViewer.classList.contains("active")) {
        closeMediaViewer();
    }
});

backBtn.addEventListener("click", () => {
    window.location.href = "inventory.html";
});

continueBtn.addEventListener("click", () => {
    window.location.href = "final.html";
});

card.addEventListener("click", () => {
    console.log("IMAGE SOURCE:", src);
    openViewer("image", src);
});