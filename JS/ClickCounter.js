    const button1 = document.getElementById("counter");
    const button2 = document.getElementById("reset");
    let initialText = document.querySelector("h3");
    let initialValue = initialText.textContent;

    button1.addEventListener("mousedown", function () {
        this.style.backgroundColor = "#3d2b57";

        initialValue++;
        initialText.textContent = initialValue;
    });

    button1.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "";
    });

    button2.addEventListener("mousedown", function () {
        this.style.backgroundColor = "#3d2b57";
    });

    button2.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "";
    });

    function reset() {
        initialText.textContent = 0;
        initialValue = 0;
    }