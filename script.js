const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function removeLast() {
    display.value = display.value.toString().slice(0, -1);
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Light/Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("mode-toggle");
    const body = document.body;
    const calculator = document.getElementById("calculator");
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    // Check local storage for mode preference
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        calculator.classList.add("light-mode");
        display.classList.add("light-mode");
        buttons.forEach(button => button.classList.add("light-mode"));
        modeToggle.textContent = "🌙"; // Show moon for dark mode
    }

    modeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");
        calculator.classList.toggle("light-mode");
        display.classList.toggle("light-mode");
        buttons.forEach(button => button.classList.toggle("light-mode"));

        // Update button icon
        if (body.classList.contains("light-mode")) {
            modeToggle.textContent = "🌙"; // Show moon when in light mode
            localStorage.setItem("theme", "light");
        } else {
            modeToggle.textContent = "☀️"; // Show sun when in dark mode
            localStorage.setItem("theme", "dark");
        }
    });
});
