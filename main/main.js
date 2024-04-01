let imgs = document.querySelector('.images');
let music = document.querySelector('.music');
let body = document.querySelector('.body')

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

let boxes = document.querySelectorAll('.boxes')
let val = 4;
let interval = setInterval(()=>{
    val+=1;
    boxes.forEach((x)=>{
        x.style.transform = `translateX(-${val}px)`
    }) 
},10)


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
  })
  .catch(error => {
    console.error('Error:', error);
  });

function call(data){
    const accessToken = data.access_token;
    console.log('Access Token:', accessToken);
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
        console.log(data);
    
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

                mainBox.addEventListener('click',()=>{
                    let songBox = document.querySelector('.songBox');
                    songBox.style.display = 'block';

                    let cross = document.querySelector('#cross')
                    console.log(cross)
                    cross.addEventListener('click',()=>{
                        songBox.style.display = 'none';
                        console.log("wfwebwk")
                    })

                    songBox.innerHTML+=`
                    <div class="intro">
                        <div class="img" style="background-image:url(${x.images[0].url})"></div>
                        <div class="imgInfo">
                            <h1 class="h1">${x.name}</h1>
                            <p class="p">${followers} monthly listeners</p>
                        </div>
                    </div>
                    <p class='popular' style="margin-bottom:20px">Popular</p>
                    `
                    let track = document.createElement('div');
                    track.classList.add('tracks');
                    let num = 1;
                    tracks.forEach((x)=>{
                        let table = document.createElement('div');
                        table.classList.add('table');
                        table.innerHTML = `
                            <div class="songData">
                                <span class="num">${num}</span>
                                <i class='material-icons arrow' style="display:none">play_arrow</i>
                                <img src="${x.album.images[0].url}" class="songimg">
                                <span>${x.name}</span>
                            </div>
                            <span class='time'>${x.duration_ms}</span>
                        `
                        track.appendChild(table)
                        num++;

                        var audio = new Audio(`${x.preview_url}`);

                        if(check=='notPlaying'){
                            table.addEventListener('click',()=>{
                                if(check=='playing'){
                                    audio.pause()
                                    check = 'notPlaying'
                                }
                                else if(check=='notPlaying'){
                                    audio.play();
                                    check = 'playing'
                                }
                                
                            })
                        }
                        else{
                            audio.pause();
                            check='notPlaying'
                        }
                        
                    })

                    songBox.appendChild(track)
                }) 

                if (tracks.length > 0) {
                  console.log('Artist Top Tracks:', tracks);
                } else {
                  console.log('No tracks found for the artist');
                }
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