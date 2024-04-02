let imgs = document.querySelector('.images');
let music = document.querySelector('.music');
let scenes = document.querySelector('.scenes');
let body = document.querySelector('.body')
let black = document.querySelector('.black')
let fullSize = document.querySelector('.fullSize');

let arr = [
    {
        text:"Mindfulness: your path to inner wisdom.",
        url:'https://images.unsplash.com/photo-1557652941-43892b86cd93?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    },{
        text:"Silence the noise, amplify the peace.",
        url: 'https://images.unsplash.com/photo-1483533272237-4747047de530?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    },{
        text:"Breathe in clarity, exhale distractions.",
        url: 'https://images.unsplash.com/photo-1551523394-885decf819c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    },{
        text:"Meditation: the art of being present.",
        url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaXRhdGlvbiUyMHJlbGF4JTIwbmF0dXJlfGVufDB8fDB8fHww'
    },{
        text:"Nourish your soul, meditate with purpose.",
        url: 'https://images.unsplash.com/photo-1527212986666-4d2d47a80d5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    }
    ,{
        text:"Connect with your essence, meditate daily.",
        url: 'https://images.unsplash.com/photo-1641496605081-632d0c51c30c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    },{
        text:"Transform your life through the power of meditation.",
        url: 'https://plus.unsplash.com/premium_photo-1666299721851-7d49a448a68a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVkaXRhdGlvbiUyMHJlbGF4JTIwbmF0dXJlfGVufDB8fDB8fHww'
    },{
        text:"Elevate your consciousness, one breath at a time.",
        url: 'https://images.unsplash.com/photo-1602082157257-a7edf60dcd56?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    },{
        text:"Calm your mind, open your heart.",
        url: 'https://images.unsplash.com/photo-1491510736257-3ad769ff47b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    },{
        text:"Embrace stillness, embrace meditation.",
        url: 'https://images.unsplash.com/photo-1531986907323-659a9efa41b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        text:"Mindfulness: your path to inner wisdom.",
        url:'https://images.unsplash.com/photo-1557652941-43892b86cd93?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    },{
        text:"Silence the noise, amplify the peace.",
        url: 'https://images.unsplash.com/photo-1483533272237-4747047de530?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    },{
        text:"Breathe in clarity, exhale distractions.",
        url: 'https://images.unsplash.com/photo-1551523394-885decf819c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    },{
        text:"Meditation: the art of being present.",
        url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaXRhdGlvbiUyMHJlbGF4JTIwbmF0dXJlfGVufDB8fDB8fHww'
    },
    {
        text:"Nourish your soul, meditate with purpose.",
        url: 'https://images.unsplash.com/photo-1527212986666-4d2d47a80d5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    }
    ,{
        text:"Connect with your essence, meditate daily.",
        url: 'https://images.unsplash.com/photo-1641496605081-632d0c51c30c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    },{
        text:"Transform your life through the power of meditation.",
        url: 'https://plus.unsplash.com/premium_photo-1666299721851-7d49a448a68a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVkaXRhdGlvbiUyMHJlbGF4JTIwbmF0dXJlfGVufDB8fDB8fHww'
    },{
        text:"Elevate your consciousness, one breath at a time.",
        url: 'https://images.unsplash.com/photo-1524901548305-08eeddc35080?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    },{
        text:"Calm your mind, open your heart.",
        url: 'https://images.unsplash.com/photo-1491510736257-3ad769ff47b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    },{
        text:"Embrace stillness, embrace meditation.",
        url: 'https://images.unsplash.com/photo-1531986907323-659a9efa41b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        text:"Mindfulness: your path to inner wisdom.",
        url:'https://images.unsplash.com/photo-1557652941-43892b86cd93?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    },{
        text:"Silence the noise, amplify the peace.",
        url: 'https://images.unsplash.com/photo-1483533272237-4747047de530?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    },{
        text:"Breathe in clarity, exhale distractions.",
        url: 'https://images.unsplash.com/photo-1551523394-885decf819c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1lZGl0YXRpb24lMjByZWxheCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
    },{
        text:"Meditation: the art of being present.",
        url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaXRhdGlvbiUyMHJlbGF4JTIwbmF0dXJlfGVufDB8fDB8fHww'
    }
]

let count =0;

function adding(){
    arr.forEach(ele => {
        let mDiv = document.createElement('div');
        let div = document.createElement('div');
        div.classList.add('boxes');
        div.style.backgroundImage = `url(${ele.url})`
        if(count%2==0) div.style.marginTop = '55px'
        div.innerText = ele.text
        mDiv.appendChild(div)
        imgs.appendChild(mDiv)
        count++;
    });
}

adding()

// 

let boxes = document.querySelectorAll('.boxes')
let val = 4;
let interval = setInterval(()=>{
    val+=1;
    loop(val)
    // if(val>1300){
    //     val=-val;
    // }
},10)

function loop (val){
    boxes.forEach((x)=>{
        x.style.transform = `translateX(-${val}px)`
    })
}

// async function music(){
//     let data = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyA31xiX6n9H_vSCijw5DSDxqWJGgul5eJs&part=snippet&q=meditationmusic&type=video`);
//     let res = await data.json();
//     console.log(res);
// }

// music();

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
    searchNatureSounds(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

function call(data){
    const accessToken = data.access_token;
    // console.log('Access Token:', accessToken);
    const albumName = 'Meditative Songs'
    // Use the access token to make authorized requests to the Spotify API
    // For example:
    fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(m1)}&type=artist`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data);
    
        data.artists.items.forEach((x)=>{
            let mainBox = document.createElement('div');
            mainBox.classList.add('mainBox');
            let album = x.type[0].toUpperCase();
            let followers = x.followers.total;
            // album[0].toUpper
            mainBox.innerHTML = `
                <div class="musicBox" style="background-image:url(${x.images[0].url})"></div>
                <p class="type">${album}rtists</p>
                <p class="albumName">${x.name}</p>
            `
            
            music.appendChild(mainBox)

            fetch(`https://api.spotify.com/v1/artists/${x.id}/top-tracks?market=US`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
            })
            .then(response => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error('Failed to retrieve artist tracks');
              })
              .then(data => {
                const tracks = data.tracks;
                let plays =0;
                let check = 'notPlaying';

                let currentAudio = null;
                mainBox.addEventListener('click',()=>{

                    if (currentAudio) {
                        currentAudio.pause();
                        currentAudio = null;
                    }
                
                    black.style.display = 'block';
                    black.style.backgroundColor = 'white';
                    let songBox = document.querySelector('.songBox');
                    songBox.style.display = 'block';
                    songBox.innerHTML = `
                        <i class="material-icons" id="cross" style="color: white; position: absolute; right: 5px; top:5px">close</i>
                    `;
                    songBox.innerHTML += `
                        <div class="intro">
                            <div class="img" style="background-image:url(${x.images[0].url})"></div>
                            <div class="imgInfo">
                                <h1 class="h1">${x.name}</h1>
                                <p class="p">${followers} monthly listeners</p>
                            </div>
                        </div>
                        <p class='popular' style="margin-bottom:20px">Popular</p>
                    `;
                
                    let track = document.createElement('div');
                    track.classList.add('tracks');
                    let num = 1;
                    tracks.forEach((x) => {
                        let table = document.createElement('div');
                        table.classList.add('table');
                
                        function formatTime(time) {
                            const minutes = Math.floor(time / 60);
                            const seconds = Math.floor(time % 60);
                            return `${minutes}:${seconds.toString().padStart(2, '0')}`;
                        }
                        table.innerHTML = `
                            <div class="songData">
                                <span class="num">${num}</span>
                                <i class='material-icons arrow' style="display:none">play_arrow</i>
                                <img src="${x.album.images[0].url}" class="songimg">
                                <span>${x.name}</span>
                            </div>
                            <span class='time'>${formatTime((x.duration_ms) / 1000)}</span>
                        `;
                
                        var audio = new Audio(`${x.preview_url}`);
                        // audio.controls = true;
                
                        table.addEventListener('click', () => {
                            // Pause the current audio if it exists
                            if (currentAudio) {
                                currentAudio.pause();
                            }
                            // Play the clicked audio
                            audio.play();
                            // Update the currently playing audio
                            currentAudio = audio;
                        });

                        audio.addEventListener('ended', () => {
                            audio.currentTime = 0; // Reset the audio to the beginning
                            audio.play(); // Start playback again
                        });
                
                        track.appendChild(table);
                        num++;
                    });
                
                    songBox.appendChild(track);

                    let cross = document.querySelector('#cross')
                    cross.addEventListener('click',() => {
                        songBox.style.display = 'none';
                        body.style.overflow = 'scroll'
                        songBox.innerHTML='';
                        songBox.innerHTML+=`
                        <i class="material-icons" id="cross" style="color: white; position: absolute; right: 5px; top:5px">close</i>
                        `
                        black.style.display = 'none'
                        black.style.backgroundColor = 'black'
                        currentAudio.pause();
                        currentAudio = null;
                    })

                    body.style.overflow = 'hidden'
                }) 
              })

             
        })
        
    })
    .catch(error => console.error('Error fetching user data:', error));
}


let circle1 = document.querySelector('.circle');
let circle2 = document.querySelector('.circle2');
let times = 1;
let width = 0;

circle1.addEventListener('click',()=>{
    circle2.style.display = 'block'
    let len = (322*times)+width;
    let mainBox = document.querySelectorAll('.mainBox');
    mainBox.forEach((x)=>{
        x.style.transform = `translateX(-${len}px)`
    })
    width+=22;
    times++;
    if(times==16){
        circle1.style.display = 'none'
    }
})

circle2.addEventListener('click',()=>{
    let mainBox = document.querySelectorAll('.mainBox');
    mainBox.forEach((x)=>{
        x.style.transform = `translateX(10px)`
    })
    times=1;
    width =0;
    circle2.style.display = 'none'
})


async function nature(){
    let apiKey = '42868898-ed34784613294936d0d4f6293';
    let searchQuery = 'nature and meditation';
    let data = await fetch(`https://pixabay.com/api/videos/?key=${apiKey}&q=${encodeURIComponent(searchQuery)}`)
    let res = await data.json();
    // console.log(res);

    res.hits.forEach((x)=>{
            let mainBox2 = document.createElement('div');
            mainBox2.classList.add('mainBox2');
            // album[0].toUpper
            mainBox2.innerHTML = `
                <div class="musicBox" style="background-image:url(${x.videos.large.thumbnail})"></div>
            `

            mainBox2.addEventListener('click',()=>{
                var video = x.videos.large.url;
                let fullSize = document.createElement('div');
                fullSize.classList.add('fullSize');
                fullSize.style.display='block'
                const videoElement = document.createElement('video');
                videoElement.src = video;
                videoElement.style.height = '100%';
                videoElement.style.width = '100%';
                fullSize.appendChild(videoElement)
                videoElement.play();
                videoElement.controls = true
                body.style.overflow = 'hidden'
                black.style.display = 'block'
                body.append(fullSize)
                let cross2 = document.getElementById('cross2');
                cross2.addEventListener('click',()=>{
                    black.style.display = 'none';
                    fullSize.style.display='none'
                    videoElement.pause();
                    body.style.overflow = 'scroll'
                    videoElement.currentTime = 0
                    videoElement.currentTime = 100000

                })

                videoElement.addEventListener('ended', function() {
                    videoElement.play(); // Restart the video when it ends
                });

            })

            scenes.appendChild(mainBox2)
    })
    
            
}

nature();

let circle4 = document.querySelector('.circle4');
let circle3 = document.querySelector('.circle3');
let time2 = 1;
let width2 = 0;

circle4.addEventListener('click',()=>{
    circle3.style.display = 'block'
    let len = (322*time2)+width2;
    let mainBox2 = document.querySelectorAll('.mainBox2');
    mainBox2.forEach((x)=>{
        x.style.transform = `translateX(-${len}px)`
    })
    width2+=23.5;
    time2++;
    if(time2==17){
        circle4.style.display = 'none'
    }
})

circle3.addEventListener('click',()=>{
    let mainBox2 = document.querySelectorAll('.mainBox2');
    mainBox2.forEach((x)=>{
        x.style.transform = `translateX(10px)`
    })
    time2=1;
    width2 =0;
    circle3.style.display = 'none'
})


// const accessToken = 'BQAKzp5_ThjkGyqPOuroQ6XInlhv5omU0Ni0vgTSexAqEbSsOzk0WEt2Ej3I_NzaG54EHsWBAsewBtPvt_ndPPjv33ziAruaDvT3dXeWBHptiOeB_kA';
const searchQuery = 'relaxing meditation sounds';
const limit = 20;

async function searchNatureSounds(data) {
    const accessToken = data.access_token;
  try {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=track&limit=${limit}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch nature sounds');
    }

    const data = await response.json();
    // console.log('Nature Sounds:', data.tracks.items);

    let boxes = document.querySelectorAll('.mainBox2');
    console.log(boxes);
    let count =0;
    boxes.forEach(x=>{
        let audio = document.createElement('audio')
        audio.src = data.tracks.items[count].preview_url
        x.appendChild(audio)
        x.addEventListener('click',()=>{
            audio.play();
            audio.addEventListener('ended', loopVideo);
        })
        count++;
        const loopVideo = () => {
            audio.play(); // Restart the video when it ends
        };

        let cross2 = document.getElementById('cross2');
                cross2.addEventListener('click',()=>{
                    audio.pause()
                })
    })
  } catch (error) {
    console.error('Error fetching nature sounds:', error.message);
  }
}

