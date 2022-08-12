// Use Aos
AOS.init();

// Animate Bubbly Buttons
if (document.querySelector(".bubbly-button")) {
    var animateButton = function (e) {
        e.preventDefault;
        //reset animation
        e.target.classList.remove("animate");

        e.target.classList.add("animate");
        setTimeout(function () {
            e.target.classList.remove("animate");
        }, 700);
    };

    var bubblyButtons = document.getElementsByClassName("bubbly-button");

    for (var i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener("mouseover", animateButton, false);
    }
}
// create popper
if (document.querySelector(".btn-popper")) {
    let btnPopper = document.querySelectorAll(".btn-popper");
    btnPopper.forEach((btn) => {
        btn.addEventListener("click", function () {
            let popper = document.querySelector(
                this.getAttribute("data-popper")
            );
            document;
            if (document.querySelector(".popper-content.show")) {
                document
                    .querySelectorAll(".popper-content.show")
                    .forEach((popp) => popp.classList.toggle("show"));
            }
            popper.classList.add("show");
        });
    });
}
// Create Tog Show
if (document.querySelector(".tog-show")) {
    let togShow = document.querySelectorAll(".tog-show");
    togShow.forEach((tog) => {
        tog.addEventListener("click", function () {
            let ElementTogShow = document.querySelector(this.dataset.show);
            ElementTogShow.classList.toggle("show")
        });
    });
}
