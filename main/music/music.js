let m1 = 'Meditation songs'
let m2 = 'calm music';

const clientId = '7e37451e5d1548a7aa9bc39b50d71514';
const clientSecret = '5fcd723ba60c4e95916d6597a5f3bd3d';

// Base64 encode the client ID and client secret
const basicAuth = btoa(`${clientId}:${clientSecret}`);

// Define the request options
const requestOptions = {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${basicAuth}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'grant_type=client_credentials'
};

let body = document.querySelector('.body');

// Make a request to obtain the access token
fetch('https://accounts.spotify.com/api/token', requestOptions)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to fetch access token');
  })
  .then(data => {
    call(data)
  })
  .catch(error => {
    console.error('Error:', error);
  });

function call(data){
    const accessToken = data.access_token;
    console.log('Access Token:', accessToken);

    // Function to fetch playlists from Spotify API
    async function fetchPlaylists() {
        try {
        const response = await fetch('https://api.spotify.com/v1/search?q=nature%20sounds%20meditation&type=playlist', {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${accessToken}`, // Replace YOUR_ACCESS_TOKEN with your actual access token
            }
        });
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        return data.playlists.items; // Array of playlists related to nature sounds for meditation
        } catch (error) {
        console.error('Error fetching playlists:', error);
        }
    }
  
    // Call the function to fetch playlists
    async function aaa(){
        let playData = await fetchPlaylists();
        // console.log(playData)
        playData.forEach(ele => {
            let h1 = document.createElement('h3');
            h1.classList.add('h1')
            h1.innerHTML=`
            <i class='material-icons'>music_note</i>${ele.name}`
            
            body.appendChild(h1)
            let music = document.createElement('div')
            music.classList.add('music')
            music.style.display='flex'
            body.appendChild(music)
            fetchPlaylistTracks(ele.id,music)
        });
    }
    
    aaa()
    
    // Function to fetch tracks from a playlist
    async function fetchPlaylistTracks(playlistId,music) {
        try {
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${accessToken}`, // Replace YOUR_ACCESS_TOKEN with your actual access token
            }
        });
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        // console.log(data.items)
        data.items.forEach((x)=>{
            let mainBox = document.createElement('div');
            mainBox.classList.add('mainBox');
            mainBox.innerHTML = `
                <div class="musicBox" style="background-image:url(${x.track.album.images[0].url})"></div>
                <p class="type">Music</p>
                <p class="albumName">${x.track.name}</p>
            `
            let audio = new Audio(x.track.preview_url);
            // let isPlaying = false;
        
            mainBox.addEventListener('click', () => {
                audio.play()
                // if (isPlaying) {
                //     audio.pause(); // Pause the audio if it's currently playing
                // } else {
                //     audio.play(); // Otherwise, play the audio
                // }
                // isPlaying = !isPlaying; // Toggle the playing state
            });

            music.appendChild(mainBox)
        })


        } catch (error) {
        console.error('Error fetching playlist tracks:', error);
        }
    }
    
    // Call the function to fetch tracks from a playlist (replace 'playlistId' with the actual ID of the playlist)
    ;
  
}
