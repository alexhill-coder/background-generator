// The element that displays the current color values in a string. 
let css = document.querySelector("h3");

// The color select buttons.
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");

// The background element of the page.
let body = document.getElementById("gradient");

// The random button.
let ranButton = document.querySelector(".rancolor");

// Sets the background to the initial values of the color buttons. 
body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

// Displays the initial values of the color buttons.
css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

// Sets the new color values of the background and the display string.  
function setgradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background;
}

// Randomly selects a new color. 
function randomColor() {
    let color = Math.floor(Math.random()*16777215).toString(16);
    // to resolve issue where the returned value is less than 6 characters
    if (color.length < 6) {
        randomColor()
    }

    return color
}

// Calls the random function to set a random color value for both color buttons.
function newColor() {
    color1.value = "#" + randomColor();
    color2.value = "#" + randomColor();
    setgradient();
}

// Checks to see if the user has pressed/altered any of the buttons.
color1.addEventListener("input", setgradient);

color2.addEventListener("input", setgradient);

ranButton.addEventListener("click", newColor);