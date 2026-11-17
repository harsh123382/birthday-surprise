
// OPEN THE PHOTO MEMORIES

function showMemories() {

    document.getElementById("memories")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// BACKGROUND MUSIC

const music = document.getElementById("birthdayMusic");

const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", async function() {

    if (music.paused) {

        try {

            await music.play();

            musicButton.innerText = "♫ Pause Music";

        } catch (error) {

            alert("Please add your song as assets/song.mp3");

        }

    } else {

        music.pause();

        musicButton.innerText = "♫ Play Music";

    }

});


// FLOATING HEART ANIMATION

function createHearts() {

    for (let i = 0; i < 35; i++) {

        setTimeout(function() {

            const heart = document.createElement("div");

            heart.className = "heart";

            heart.innerText = "♥";

            heart.style.left = Math.random() * 100 + "vw";

            heart.style.fontSize =
                (15 + Math.random() * 25) + "px";

            heart.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            document.body.appendChild(heart);

            setTimeout(function() {

                heart.remove();

            }, 6500);

        }, i * 70);

    }

}


// REVEAL THE SECRET MESSAGE

const surpriseButton =
    document.getElementById("surpriseButton");

surpriseButton.addEventListener("click", function() {

    const message =
        document.getElementById("secretMessage");

    message.classList.add("show");

    surpriseButton.innerText = "A Little Love For You ❤️";

    createHearts();

});
