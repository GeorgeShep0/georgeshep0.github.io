let clickCount = 0;

function doSomethingStupid() {
    clickCount++;

    const messages = [
        "WHY WOULD YOU DO THAT?",
        "STOP.",
        "SERIOUSLY. STOP.",
        "THIS BUTTON ISN’T EVEN CONNECTED TO ANYTHING.",
        "I AM RUNNING OUT OF PATIENCE.",
        "CONGRATULATIONS. YOU’VE ACHIEVED NOTHING.",
        "THIS IS WHY WE CAN’T HAVE NICE THINGS."
    ];

    const output = document.getElementById("output");
    output.innerText = messages[Math.min(clickCount - 1, messages.length - 1)];

    const btn = document.querySelector(".annoying-button");
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 80 + "%";
    btn.style.top = Math.random() * 80 + "%";

    if (Math.random() > 0.6) {
        alert("ERROR: BUTTON FEELS JUDGED");
    }
}

setInterval(() => {
    if (Math.random() > 0.7) {
        console.log("SYSTEM LOG: Everything is fine. Probably.");
    }
}, 2000);
