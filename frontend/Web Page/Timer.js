// Variables for the timer
const timeDisplayed = document.getElementById("timeDisplayed"); 
let startTime = 0;
let elapsedTime = 0;
let TimmerRunning = false;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

// Function to update the timer
function updateTime(){
    // Marks a starting point 
    elapsedTime = Date.now() - startTime;
    secs = Math.floor(elapsedTime / 1000 % 60);
    mins = Math.floor(elapsedTime / (1000 * 60) % 60);
    hrs = Math.floor(elapsedTime / (1000 * 60 * 60)  % 60 );

    // With this method we make sure our time is allways showed with this format 00:00:00
    secs = String(secs).padStart(2, '0');
    mins = String(mins).padStart(2, '0');
    hrs = String(hrs).padStart(2, '0');

    timeDisplayed.textContent = `${hrs}:${mins}:${secs}`;
}

// Function to stop the timer 
function stopTimer() {
    if (!TimmerRunning) return; // Do nothing if already stopped

    TimmerRunning = false;
    clearInterval(intervalId);
    console.log("Timer stopped!");

    // Get the final time
    const finalTime = timeDisplayed.textContent;
    
    // Get the nickname we saved from the last page
    const nickname = localStorage.getItem('currentPlayer');

    // HERE I HAVE TO save (nickname, finalTime) to MY database
    console.log(`Saving score: ${nickname} with time: ${finalTime}`);

    // Go back to the scoreboard
    window.location.href = "Scores.html";
}

// Event Listener to stop the timer ---
window.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        event.preventDefault();
        stopTimer();
    }
});

// This function starts the timer automatically
function startTimer() {
    if (TimmerRunning) return; // Don't start if already running

    TimmerRunning = true;
    startTime = Date.now() - elapsedTime; // Start from 0
    intervalId = setInterval(updateTime, 1000); // 1000ms = 1 second
    console.log("Timer started!");
}

// This line calls the startTimer function as soon as the page loads
startTimer();