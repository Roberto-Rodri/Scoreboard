// --- 1. All your timer variables and elements ---
// Make sure your timmer.html has <h1 id="timeDisplayed">00:00:00</h1>
const timeDisplayed = document.getElementById("timeDisplayed"); 
let startTime = 0;
let elapsedTime = 0;
let TimmerRunning = false;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

// --- 2. Your updateTime function ---
function updateTime(){
    elapsedTime = Date.now() - startTime;
    secs = Math.floor(elapsedTime / 1000 % 60);
    mins = Math.floor(elapsedTime / (1000 * 60) % 60);
    hrs = Math.floor(elapsedTime / (1000 * 60 * 60)  % 60 );

    function extraZero(number){
        return (("0") + number).length > 2 ? unit : "0" + number;
    }

    secs = extraZero(secs);
    mins = extraZero(mins);
    hrs = extraZero(hrs);

    timeDisplayed.textContent = `${hrs}:${mins}:${secs}`;
}

// --- 3. A function to STOP the timer ---
function stopTimer() {
    if (!TimmerRunning) return; // Do nothing if already stopped

    TimmerRunning = false;
    clearInterval(intervalId);
    console.log("Timer stopped!");

    // Get the final time
    const finalTime = timeDisplayed.textContent;
    
    // Get the nickname we saved from the last page
    const nickname = localStorage.getItem('currentPlayer');

    // !!! HERE you would save (nickname, finalTime) to your database !!!
    console.log(`Saving score: ${nickname} with time: ${finalTime}`);

    // Go back to the scoreboard
    window.location.href = "index.html";
}

// --- 4. A listener for THIS page to stop the timer ---
window.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        event.preventDefault();
        // When 'a' is pressed on *this* page, stop the timer.
        stopTimer();
    }
});

// --- 5. THIS IS THE KEY: Start the timer automatically ---
function startTimer() {
    if (TimmerRunning) return; // Don't start if already running

    TimmerRunning = true;
    startTime = Date.now() - elapsedTime; // Start from 0
    intervalId = setInterval(updateTime, 1000); // 1000ms = 1 second
    console.log("Timer started!");
}

// Call the startTimer function as soon as the page loads
startTimer();