console.log("Connected Files");

// Event Listener
// This Listener listen to all the window. If any key is pressed then it'll be shown in console
window.addEventListener('keydown', function(event) {

    // With this if we can choose when we will do something. For example, if 'a' is pressed then display it
    if (event.key == 'a')
    {
        // Prevent automatically refresh
        event.preventDefault();

        // Get the user Nickname
        const NicknameInput = document.getElementById("Nickname");
        const Nickname = NicknameInput.value;

        localStorage.setItem('currentPlayer', Nickname);
        
        window.location.href = "timmer.html";
 
    }
    console.log(event);
});