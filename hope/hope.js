 let count =0;
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    // Create a new instance of SpeechRecognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';

    // Event listener for when speech is recognized
     recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      input.value = transcript;
      input.focus()
    //   document.getElementById('transcript').textContent = 'You said: ' + transcript;
    };

    // Event listener for when the button is clicked
    document.getElementById('speechButton').addEventListener('click', () => {
      count++;
      if(count%2==0){
        recognition.stop()
        document.querySelector(".input").placeholder = "Enter a prompt here";
      }
      else {
        recognition.start();
        document.querySelector(".input").placeholder = "Listening!!";
      }
    });
  } else {
    console.log('Speech recognition not supported in this browser.');
  }


  var currentSpeechUtterance = null;

  // Function to speak the given text
  function speak(text) {
    // Stop any ongoing speech
    if (currentSpeechUtterance) {
      speechSynthesis.cancel();
      currentSpeechUtterance = null;
    }
  
    // Create a new SpeechSynthesisUtterance instance
    var message = new SpeechSynthesisUtterance(text);
  
    // Speak the message
    speechSynthesis.speak(message);
  
    // Update the current speech utterance variable
    currentSpeechUtterance = message;
  }
  
  // Function to stop speech
  function stopSpeaking() {
    // Check if there is an ongoing speech utterance
    if (currentSpeechUtterance) {
      // Cancel the ongoing speech
      speechSynthesis.cancel();
      // Reset the current speech utterance variable
      currentSpeechUtterance = null;
    }
  }


// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// var recognition = new SpeechRecognition();
// recognition.start();
// recognition.addEventListener('result', function(event) {
//     var transcript = event.results[0][0].transcript;
//     console.log(transcript);
// });