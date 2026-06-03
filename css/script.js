const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        if(card.classList.contains("left")) {

            document.querySelector(".active")
            .classList.replace("active", "right");

            card.classList.replace("left", "active");

            document.querySelector(".right")
            .classList.replace("right", "left");
        }

        else if(card.classList.contains("right")) {

            document.querySelector(".active")
            .classList.replace("active", "left");

            card.classList.replace("right", "active");

            document.querySelector(".left")
            .classList.replace("left", "right");
        }

    });
});