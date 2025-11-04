console.log("Connected Files");

// Event Listener
// This Listener listens to all the window. If any key is pressed then it'll be shown in console
window.addEventListener('keydown', function(event) {

    // With this if we can choose when we will do something. For example, if 'a' is pressed then do...
    // Once I have access to the Red Button I'll CHANGE IT
    if (event.key == 'a')
    {
        // Prevent automatically refresh
        event.preventDefault();

        // Get the user Nickname
        const NicknameInput = document.getElementById("Nickname");
        const Nickname = NicknameInput.value;

        // We check if the nickname is empty
        if (Nickname.trim() === "") {
            
            // If it's empty, tell the user and STOP
            alert("Please enter your Nickname!"); 
            
            // 'return' exits the function immediately
            // The navigation code below will NOT run
            return; 
        }

        // Here the information player is saved. THIS WILL CHANGE ONCE I CONFIGURE THE DATABASE CONNECTION
        localStorage.setItem('currentPlayer', Nickname);
        
        // Finally, when the process avobe is done, the page will change
        window.location.href = "Timer.html";
 
    }
    console.log(event);
});