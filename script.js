const FIXED_USERNAME = "admin";
const FIXED_PASSWORD = "password123";

const loginBtn = document.getElementById("loginBtn");
const loginError = document.getElementById("loginError");
const siteContent = document.getElementById("siteContent");
const loginOverlay = document.getElementById("loginOverlay");

loginBtn.addEventListener("click", () => {
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    if (
        enteredUsername === FIXED_USERNAME &&
        enteredPassword === FIXED_PASSWORD
    ) {
        loginOverlay.style.display = "none";
        siteContent.style.display = "block";
    } else {
        loginError.textContent = "Invalid username or password";
    }
});

// Change these quotes to personal inside jokes
const quotes = [
    "I’ll do it later. (Narrator: He did not.)",
    "This will only take five minutes.",
    "Trust me, I’ve thought about this.",
    "That’s future me’s problem.",
    "It worked once, so it’s basically a system."
];

const quoteElement = document.getElementById("quote");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const confettiBtn = document.getElementById("confettiBtn");

newQuoteBtn.addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = `"${randomQuote}"`;
});

confettiBtn.addEventListener("click", () => {
    alert("Respect has been paid. Thank you for your service.");
});
