const texts = [
    { text: "INHALE FOR 4 SECONDS", duration: 4000 }, // Text 1 displayed for 2 seconds
    { text: "HOLD FOR 7 SECONDS", duration: 7000 }, // Text 2 displayed for 3 seconds
    { text: "EXHALE FOR 8 SECONDS", duration: 8000 }  // Text 3 displayed for 1.5 seconds
];

let currentIndex = 0; // Index to keep track of current text
let val =0;

function changeText() {
    const { text, duration } = texts[currentIndex];
    document.querySelector(".change").textContent = text;
    currentIndex = (currentIndex + 1) % texts.length; // Move to the next text in the array

    // Call changeText function recursively after the specified duration
    setTimeout(changeText, duration);
    val+=12000;
}

// Start the loop
setInterval(changeText(),val);




