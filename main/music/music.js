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
    // const limit = 100;
    const encodedGenre = encodeURIComponent(m1);
    // Use the access token to make authorized requests to the Spotify API
    // For example:
    fetch(`https://api.spotify.com/v1/search?q=genre:${encodedGenre}&type=track`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Error fetching user data:', error));
}