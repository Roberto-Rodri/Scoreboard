console.log("Connected Files");

// Event Listener
// This Listener listen to all the window. If any key is pressed then it'll be shown in console
window.addEventListener('keydown', function(event) {

    // With this if we can choose when we will do something. For example, if 'a' is pressed then do...
    if (event.key == 'Enter')
    {
        // Will change the current page to NIckname.html, where you can add your player information before starting
        window.location.href = "Nickname.html";
 
    }
    console.log(event);
});