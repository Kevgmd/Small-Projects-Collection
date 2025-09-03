document.querySelector("a").addEventListener("mouseover", function () {
    this.style.textDecoration = "underline";
});

document.querySelector("a").addEventListener("mouseout", function () {
    this.style.textDecoration = "";
});

document.querySelector("a").addEventListener("mousedown", function () {
    this.style.color = "darkgray";
});

document.querySelector("a").addEventListener("mouseup", function () {
    this.style.color = "";
});

document.querySelector("button").addEventListener("mousedown", function () {
    this.style.backgroundColor = "#e60036";
});

document.querySelector("button").addEventListener("mouseup", function () {
    this.style.backgroundColor = "";
});