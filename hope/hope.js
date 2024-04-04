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


  function speak(text){
      var msg = new SpeechSynthesisUtterance();
      msg.text = text;

      msg.volume = 1; // 0 to 1
      msg.rate = 1; // 0.1 to 10
      msg.pitch = 1; // 0 to 2

      // Get the list of available voices
      // var voices = window.speechSynthesis.getVoices();
      // var desiredVoice = voices.find(voice => voice.name === 'Google UK English Female');
      // // console.log(voices)

      // // Optionally, set the voice
      // msg.voice = desiredVoice;
      window.speechSynthesis.speak(msg);
  }


// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// var recognition = new SpeechRecognition();
// recognition.start();
// recognition.addEventListener('result', function(event) {
//     var transcript = event.results[0][0].transcript;
//     console.log(transcript);
// });