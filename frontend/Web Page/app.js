console.log("Connected Files");

// Event Listener
// This Listener listen to all the window. If any key is pressed then it'll be shown in console
window.addEventListener('keydown', function(event) {

    // First, we get the pressed key and save it in a container
    const container = document.getElementById('key-container');

    // Then, we have to create a HTML element
    const keyElement = document.createElement('span')

    // Finally we are saving the value 'key'. It is the pressed key
    keyElement.textContent = event.key;

    if (keyElement.textContent == 'a')
    {
        // Add it to the page
        container.appendChild(keyElement);  
    }

    console.log(event);
});