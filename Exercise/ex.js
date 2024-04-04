function showMessage(message) {
    // Create a new div element
    var messageElement = document.createElement('div');
    
    // Set the text content
    messageElement.textContent = message;
    
    // Apply styles
    messageElement.style.position = 'fixed';
    // messageElement.style.top = '50%';
    messageElement.style.bottom = '30px';
    messageElement.style.right = '-100%'; // Initially off-screen to the right
    messageElement.style.transform = 'translateX(-50%)';
    messageElement.style.backgroundColor = 'rgba(0, 0, 0, 0.584)'; // Blue color
    messageElement.style.color = 'cyan'; // White color
    messageElement.style.padding = '10px 20px';
    messageElement.style.borderRadius = '10px';
    messageElement.style.fontFamily = 'brandon';
    messageElement.style.transition = 'right 0.5s ease-in-out'; // Animation
    
    // Append the element to the body
    document.body.appendChild(messageElement);
    
    // Trigger reflow
    messageElement.getBoundingClientRect();
    
    // Slide the element into view
    messageElement.style.right = '20px'; // Adjust the distance from the right side
    
    // Hide the element after 3 seconds
    setTimeout(function() {
        // Slide the element out of view
        messageElement.style.right = '-100%'; // Off-screen to the right
        
        // Remove the element from the DOM after animation completes
        setTimeout(function() {
            messageElement.remove();
        }, 1500); // Adjust timing to match the animation duration
    }, 3000); // Adjust timing to match the desired display duration
}

// Call the showMessage function with your desired message
setInterval(function() {
    showMessage("Talk to HOPE!!");
}, 6000);