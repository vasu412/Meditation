let scenes = document.querySelector('.scenes')
let body = document.querySelector('.body')
let black = document.querySelector('.black')
console.log(scenes)
// async function nature(){
//     let apiKey = '42868898-ed34784613294936d0d4f6293';
//     let searchQuery = 'nature and meditation';
//     let data = await fetch(`https://pixabay.com/api/videos/?key=${apiKey}&q=${encodeURIComponent(searchQuery)}`)
//     let res = await data.json();
//     // console.log(res);

//     res.hits.forEach((x)=>{
//             let mainBox2 = document.createElement('div');
//             mainBox2.classList.add('mainBox2');
//             // album[0].toUpper
//             mainBox2.innerHTML = `
//                 <div class="musicBox" style="background-image:url(${x.videos.large.thumbnail})"></div>
//             `

//             mainBox2.addEventListener('click',()=>{
//                 var video = x.videos.large.url;
//                 let fullSize = document.createElement('div');
//                 fullSize.classList.add('fullSize');
//                 fullSize.style.display='block'
//                 const videoElement = document.createElement('video');

//                 videoElement.src = video;
//                 videoElement.style.height = '100%';
//                 videoElement.style.width = '100%';
//                 fullSize.appendChild(videoElement);
//                 videoElement.play();
//                 // videoElement.controls = true
//                 body.style.overflow = 'hidden'
//                 black.style.display = 'block'
//                 body.append(fullSize)
//                 let cross2 = document.getElementById('cross2');
//                 cross2.addEventListener('click',()=>{
//                     black.style.display = 'none';
//                     fullSize.style.display='none'
//                     videoElement.pause();
//                     body.style.overflow = 'scroll'
//                     videoElement.currentTime = 0
//                 })

//                 videoElement.addEventListener('ended', function() {
//                     videoElement.play(); // Restart the video when it ends
//                 });
//             })

//             scenes.appendChild(mainBox2)
//     })
    
            
// }

// nature();


async function nature() {
    const apiKey = '42868898-ed34784613294936d0d4f6293'; // Replace with your Pixabay API key
    const searchQuery = 'nature and meditation';
    try {
        const response = await fetch(`https://pixabay.com/api/videos/?key=${apiKey}&q=${encodeURIComponent(searchQuery)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data from Pixabay API');
        }
        const data = await response.json();
        console.log(data)
        data.hits.forEach((x) => {
            const mainBox2 = document.createElement('div');
            mainBox2.classList.add('mainBox2');
            mainBox2.innerHTML = `
                <div class="musicBox" style="background-image:url(${x.videos.large.thumbnail})"></div>
            `;
            mainBox2.addEventListener('click', () => {
                const fullSize = document.createElement('div');
                fullSize.classList.add('fullSize');
                fullSize.style.display = 'block';
                const videoElement = document.createElement('video');
                videoElement.src = x.videos.large.url;
                videoElement.style.height = '100%';
                videoElement.style.width = '100%';
                videoElement.controls = true;
                fullSize.appendChild(videoElement);
                videoElement.play();
                document.body.style.overflow = 'hidden';
                black.style.display = 'block';
                document.body.append(fullSize);
                const cross2 = document.getElementById('cross2');
                cross2.addEventListener('click', () => {
                    black.style.display = 'none';
                    fullSize.style.display = 'none';
                    videoElement.pause();
                    document.body.style.overflow = 'scroll';
                    videoElement.currentTime = 0;
                    videoElement.removeEventListener('ended', loopVideo);
                });
                const loopVideo = () => {
                    videoElement.play(); // Restart the video when it ends
                };
                videoElement.addEventListener('ended', loopVideo);
            });
            scenes.appendChild(mainBox2);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}

nature();


// const fetch = require('node-fetch');

const accessToken = 'BQAKzp5_ThjkGyqPOuroQ6XInlhv5omU0Ni0vgTSexAqEbSsOzk0WEt2Ej3I_NzaG54EHsWBAsewBtPvt_ndPPjv33ziAruaDvT3dXeWBHptiOeB_kA';
const searchQuery = 'relaxing meditation sounds';
const limit = 20;

async function searchNatureSounds() {
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
    console.log('Nature Sounds:', data.tracks.items);

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

searchNatureSounds();


// const fetch = require('node-fetch');

// const apiKey = 'AIzaSyA31xiX6n9H_vSCijw5DSDxqWJGgul5eJs';
// const searchQuery = 'nature meditation';
// const maxResults = 20; // Maximum number of results to retrieve

// async function searchNatureMeditationVideos() {
//   try {
//     const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${encodeURIComponent(searchQuery)}&type=video&maxResults=${maxResults}`);

//     if (!response.ok) {
//       throw new Error('Failed to fetch nature meditation videos');
//     }

//     const data = await response.json();
//     const videoIds = data.items.map(item => item.id.videoId);
//     console.log('Nature Meditation Video IDs:', videoIds);

//     // Embed videos using the YouTube embedded player
//     videoIds.forEach(videoId => {
//       const iframe = document.createElement('iframe');
//       iframe.src = `https://www.youtube.com/embed/${videoId}`;
//       iframe.width = '560'; // Set width of embedded player
//       iframe.height = '315'; // Set height of embedded player
//       iframe.allowFullscreen = true; // Allow fullscreen mode
//       document.body.appendChild(iframe); // Append iframe to DOM
//     });
//   } catch (error) {
//     console.error('Error fetching nature meditation videos:', error.message);
//   }
// }

// searchNatureMeditationVideos();

