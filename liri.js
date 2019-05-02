//<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
//search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);

var Spotify = require('node-spotify-api');
var  Env = require('dotenv').config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
 
spotify
    .search({ type: 'track', query: 'All the Small Things' })
    .then(function(response) {
    console.log(response);
  })
  .catch(function(err)  {
      console.log(err);
  });

spotify
    .request ('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data) 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err)
  });

const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
});
 
const result = dotenv.config() 
    if (result.error) {
    throw result.error
};
console.log(result.parsed)