# LIRI-Node-App
In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

#Using axios
*Performing a GET request
axios.get('https://api.github.com/users/' + username)
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });  

*Performing a POST request
axios.post('/save', { firstName: 'Marlon', lastName: 'Bernardes' })
  .then(function(response){
    console.log('saved successfully')
  });  

  #Install API Business
* npm i node-spotify-api
* npm install --save node-spotify-api
* Veronique's Spotify Client ID 8b39d6f3d18f4c9fa98058cd7b3907e2
* Veronique's Spotify Client Secret 88636b8aa31c461082b750506e068a43 
* Veronique's OMDB API
http://www.omdbapi.com/?i=tt3896198&apikey=cb684d38
* Send all data requests to: http://www.omdbapi.com/?apikey=cb684d38&
* http://www.omdbapi.com/ (Parameters)
* BandsinTown needs to email API Key
* Bands in Town info here https://app.swaggerhub.com/apis-docs/Bandsintown/PublicAPI/3.0.0#/artist%20events/artistEvents

