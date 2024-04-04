const clientId = '7e37451e5d1548a7aa9bc39b50d71514';
const clientSecret = '5fcd723ba60c4e95916d6597a5f3bd3d';
const basicAuth = btoa(`${clientId}:${clientSecret}`);
const requestOptions = {
    method: 'POST',
    headers: {
        'Authorization': `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials'
};

let body = document.querySelector('.body')

let all = document.querySelector('.data');

async function fetchAccessToken() {
    try {
        const response = await fetch('https://accounts.spotify.com/api/token', requestOptions);
        if (!response.ok) {
            throw new Error('Failed to fetch access token');
        }
        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error('Error fetching access token:', error);
        throw error;
    }
}

async function fetchPlaylists(accessToken, query) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=playlist`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch playlists');
        }
        const data = await response.json();
        return data.playlists.items;
    } catch (error) {
        console.error('Error fetching playlists:', error);
        throw error;
    }
}

async function fetchPlaylistTracks(accessToken, playlistId) {
    try {
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch playlist tracks');
        }
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error fetching playlist tracks:', error);
        throw error;
    }
}

let currentlyPlayingAudio = null;
let currentPlayButton = null;
let currentPauseButton = null;

async function displayPlaylists(accessToken, playlists) {
    try {
        for (const playlist of playlists) {
            const h1 = document.createElement('h3');
            h1.classList.add('h1');
            h1.innerHTML = `<i class='material-icons'>music_note</i>${playlist.name}`;
            all.appendChild(h1);

            const music = document.createElement('div');
            music.classList.add('music');
            music.style.display = 'flex';
            all.appendChild(music);

            const tracks = await fetchPlaylistTracks(accessToken, playlist.id);

            tracks.forEach(track => {
                const mainBox = document.createElement('div');
                mainBox.classList.add('mainBox');
                mainBox.innerHTML = `
                    <div class="musicBox" style="background-image:url(${track.track.album.images[0].url});position:relative;">
                     <i class='material-icons play1' style='z-index:999; color:white; cursor:pointer ; position:absolute;bottom:5px;'>play_arrow</i>
                     <i class='material-icons play2' style='z-index:999; color:white; cursor:pointer ; position:absolute;bottom:5px; display:none;'>pause</i>
                    </div>
                    <p class="type">Music</p>
                    <p class="albumName">${track.track.name}</p>
                `;
                const play1 = mainBox.querySelector('.play1')
                const play2 = mainBox.querySelector('.play2')
                // console.log(play)
                const audio = new Audio(track.track.preview_url);

                mainBox.addEventListener('click', () => {
                    if (currentlyPlayingAudio && currentlyPlayingAudio !== audio) {
                        currentlyPlayingAudio.pause();
                        currentPlayButton.style.display = 'block';
                        currentPauseButton.style.display = 'none';
                    }
                    if (audio.paused) {
                        audio.play();
                        currentlyPlayingAudio = audio;
                        currentPlayButton = play1;
                        currentPauseButton = play2;
                        play1.style.display = 'none';
                        play2.style.display = 'block';
                    } else {
                        audio.pause();
                        currentlyPlayingAudio = null;
                        currentPlayButton = null;
                        currentPauseButton = null;
                        play1.style.display = 'block';
                        play2.style.display = 'none';
                    }
                });

                audio.addEventListener('ended', () => {
                    audio.currentTime = 0; // Reset the audio to the beginning
                    audio.play(); // Start playback again
                });
                music.appendChild(mainBox);
            });
        }
    } catch (error) {
        console.error('Error displaying playlists:', error);
    }
}

async function init() {
    try {
        const accessToken = await fetchAccessToken();
        const playlists = await fetchPlaylists(accessToken, 'nature sounds meditation');
        await displayPlaylists(accessToken, playlists);
    } catch (error) {
        console.error('Initialization error:', error);
    }
}

init();

let input = document.querySelector('.input');
let search = document.querySelector('.button')

search.addEventListener('click',()=>{
    let value = input.value;
    all.innerHTML = ""

    async function init() {
        try {
            const accessToken = await fetchAccessToken();
            const playlists = await fetchPlaylists(accessToken, value);
            await displayPlaylists(accessToken, playlists);
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }
    
    init();
})